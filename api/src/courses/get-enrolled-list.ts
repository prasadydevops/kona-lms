import { RequestHandler } from "express";
import { z } from "zod";
import { idSchema } from "../common/zod-schemas";

export const getEnrolledUsers: RequestHandler = (req, res, next) => {
  try {
    const courseId = idSchema.parse(req.params.courseId);
  } catch (error) {
    next(error);
  }
};
