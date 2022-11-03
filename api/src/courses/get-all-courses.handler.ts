import { RequestHandler } from "express";
import { prisma } from "../common/db";

export const getAllCoursesHandler: RequestHandler = async (req, res, next) => {
  try {
    const data = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
      },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
};
