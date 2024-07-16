import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FrameServiceBase } from "./base/frame.service.base";

@Injectable()
export class FrameService extends FrameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
