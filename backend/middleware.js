const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  // console.log(req.headers);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({msg:"Token not found"});
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      return res.status(403).json({});
    }
  } catch (err) {
    return res.status(403).json({});
  }
}

module.exports = {
  authMiddleware,
};
