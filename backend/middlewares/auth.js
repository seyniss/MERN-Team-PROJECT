const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const token = req.cookies?.auth

    if (!token) {
        return res.status(401).json({ message: "인증에 필요한 토큰이 없음" });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload
        next();
    } catch (error) {
        return res.status(401).json({ message: "유효하지 않은 토큰" })
    }
};
