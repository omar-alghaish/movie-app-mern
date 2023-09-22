import express from "express";
import reviewController from "../controllers/review.controller.js";
import tokenMiddleWare from "../middlewares/token.middleware.js";
import {  addReviewValidator } from "../../utils/validators/review.validator.js";



const router = express.Router({mergeParams: true});


router.get(
    "/",
    tokenMiddleWare.auth,
    reviewController.getReviewOfUser
)


router.post(
    "/",
    tokenMiddleWare.auth,
    addReviewValidator,
    reviewController.create

)


router.delete(
    "/:reviewId",
    tokenMiddleWare.auth,
    reviewController.remove
)


export default router;