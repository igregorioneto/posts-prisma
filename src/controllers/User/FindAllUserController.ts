import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { User } from "../../interfaces/User";

export class FindAllUserController {
  async handle(request: Request, response: Response) {
    const users: User[] = await prismaClient.user.findMany();

    return response.json(users);
  }
}