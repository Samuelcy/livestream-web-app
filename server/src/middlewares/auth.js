import jwt from "jsonwebtoken";

const config = process.env;

// Checks if token is valid or exists
export const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(401).send("A token is required for authentication.");
  }

  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded; // Decoded token has info of userId and email

  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next(); // will go to validator (authRoutes.js) then postRegister/postLogin
};
