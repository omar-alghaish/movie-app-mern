import express from "express";
import favoriteController from "../controllers/favourit.controller.js";
import userController from "../controllers/user.controller.js";
import tokenMiddleware from "../middlewares/token.middleware.js";
import {
  signUpValidator,
  signInValidator,
  updatePasswordValidator,
  addFavoriteValidator,
} from "../../utils/validators/user.validator.js";
const router = express.Router();

router.post("/signup", signUpValidator, userController.signup);

router.post("/signin", signInValidator, userController.signin);

router.put(
  "/update-password",
  tokenMiddleware.auth,
  updatePasswordValidator,
  userController.updatePassword
);

router.get("/info", tokenMiddleware.auth, userController.getInfo);

router;

router
  .route("/favorites")
  .get(tokenMiddleware.auth, favoriteController.getFavoritesOfUser)
  .post(
    tokenMiddleware.auth,
    addFavoriteValidator,
    favoriteController.addFavorite
  );
router.delete(
  "/favorites/:favoriteId",
  tokenMiddleware.auth,
  favoriteController.removeFavorite
);

export default router;
