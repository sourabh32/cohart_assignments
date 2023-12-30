const { User } = require("../db");

// Middleware for handling auth
const adminMiddleware = async (req, res, next) => {
  try {
    const { username, password } = req.headers;
    console.log(username,password)

    

    const admin = await User.findOne({ username });

    if (admin && admin.password === password) {
      req.user = {
        role: "admin",
        id: admin._id,
      };
     
      next();
    } else {
      res.status(403).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error in adminMiddleware:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = adminMiddleware;
