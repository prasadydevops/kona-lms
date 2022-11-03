import { RequestHandler } from "express";
import { prisma } from "../../common/db";
import { idSchema } from "../../common/zod-schemas";

export const deleteModuleHandler: RequestHandler = async (req, res, next) => {
  try {
    const moduleId = await idSchema.parseAsync(req.params.moduleId);
    await prisma.module.delete({
      where: {
        id: moduleId,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
