const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Bucket = require("../models/Bucket");

// ID 유효성 검사
const ensureObjectId = (id, res) => {
  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
    return false;
  }
  return true;
};

// 생성: req.body 그대로 사용
router.post("/", async (req, res) => {
  try {
    const newBucket = new Bucket(req.body); // 모델 = body 입력
    const saved = await newBucket.save();   // 스키마 검증 + pre('save') 적용
    res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "버킷을 저장하지 못했습니다." });
  }
});

// 전체 조회
router.get("/", async (req, res) => {
  try {
    const buckets = await Bucket.find().sort({createdAt:-1})

    res.status(201).json(buckets)
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "데이터를 불러오지 못했습니다." });
  }
});

// 단일 조회
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!ensureObjectId(id, res)) 
    return res.status(400).json({message:'유효하지 않은 ID입니다.'});

  try {
    const bucket = await Bucket.findById(id);
    if (!bucket) return res.status(404).json({ message: "해당 ID의 bucket이 없습니다." });
    res.status(200).json(bucket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "데이터를 불러오지 못했습니다." });
  }
});

// 전체 수정 
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  if (!ensureObjectId(id, res)) 
    return res.status(400).json({message:'유효하지 않은 ID입니다.'});

  try {
    const updated = await Bucket.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,   // 유효성 검사
    });
    if (!updated) return res.status(404).json({ message: "해당 ID의 bucket이 없습니다." });
    res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "데이터를 수정하지 못했습니다." });
  }
});

// 부분 수정 (
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  if (!ensureObjectId(id, res)) 
    return res.status(400).json({message:'유효하지 않은 ID입니다.'});

  try {
    const updated = await Bucket.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      context: "query"
    });
    if (!updated) return res.status(404).json({ message: "해당 ID의 bucket이 없습니다." });
    res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "데이터를 수정하지 못했습니다." });
  }
});

// 삭제
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!ensureObjectId(id, res)) 
    return res.status(400).json({message:'유효하지 않은 ID입니다.'});

  try {
    const deleted = await Bucket.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "해당 ID의 bucket이 없습니다." });
    res.status(200).json({ message: "삭제 성공", id: deleted._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "데이터를 삭제하지 못했습니다." });
  }
});

module.exports = router;
