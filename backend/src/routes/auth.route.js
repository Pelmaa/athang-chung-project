const verifyAuth = require("../middlewares/verifyAuth.middleware");
const authController = require("../controllers/auth.controller");
const authRoutes = express.Router();

authRoutes.post("/signin", authController.signIn);

authRoutes.post("/signup", authController.signUp);
authRoutes.delete("/signout", verifyAuth, authController.signout);

module.exports = authRoutes;
