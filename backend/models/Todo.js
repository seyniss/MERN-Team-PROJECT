// models/Todo.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        text: { type: String, required: true, trim: true, maxlength: 200 },
        isCompleted: { type: Boolean, default: false },
        deviceId: { type: String, required: true, index: true },
        theme: { type: String, enum: ['bucket', 'recommend', 'habit', 'worry', 'choice'], required: true }, // 프로젝트 테마
        isPublic: { type: Boolean, default: true },   // 선택
        tag: { type: String, trim: true },            // 선택: 단일 태그
    },
    { timestamps: true }
);

module.exports = mongoose.model('Todo', todoSchema);
