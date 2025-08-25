const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// .env 설정 불러오기
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어
app.use(cors({
    origin: process.env.FRONT_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// 라우트
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const requireAuth = require('./middlewares/auth');
const bucketRoutes = require('./routes/bucketRoutes');
app.use('/api/buckets', requireAuth, bucketRoutes);

// DB 연결
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB 연결 성공"))
    .catch((err) => console.log("연결 실패", err));

// 기본 라우트
app.get('/', (req, res) => {
    res.send("익명 MERN 팀 프로젝트(이예빈, 이승건, 이용수)");
});

app.use((err, req, res, next) => {
    console.error("💥💥💥 서버 전체 에러 💥💥💥");
    console.error(err.stack); // 에러의 전체 내용(스택)을 출력
    res.status(500).send('서버에 문제가 발생했습니다!');
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is Running `);
});
