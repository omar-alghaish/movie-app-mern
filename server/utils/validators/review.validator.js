import { body } from "express-validator";
import requestHandler from "../../src/handlers/request.handler.js";

export const addReviewValidator = [
  body("mediaId")
    .exists()
    .withMessage("mediaId is required")
    .isLength({ min: 1 })
    .withMessage("mediaId can not be empty"),
  body("content")
    .exists()
    .withMessage("content is required")
    .isLength({ min: 1 })
    .withMessage("content can not be empty"),
  body("mediaType")
    .exists()
    .withMessage("mediaType is required")
    .isLength({ min: 1 })
    .withMessage("mediaType can not be empty")
    .custom((type) => ["movie", "tv"].includes(type))
    .withMessage("mediaType invalid"),
    body("mediaTitle")
    .exists().withMessage("mediaTitle is required"),
    body("mediaPoster")
    .exists().withMessage("mediaPoster is required"),
    requestHandler.validate
    
];
