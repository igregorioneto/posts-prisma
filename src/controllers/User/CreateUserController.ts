import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { User } from "../../interfaces/User";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, role } = request.body;

    const user: User = await prismaClient.user.create({
      data: {
        name,
        email,
        role
      },
    });

    return response.json(user);
  }
}