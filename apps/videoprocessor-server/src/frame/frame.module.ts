import { Module } from "@nestjs/common";
import { FrameModuleBase } from "./base/frame.module.base";
import { FrameService } from "./frame.service";
import { FrameController } from "./frame.controller";
import { FrameResolver } from "./frame.resolver";

@Module({
  imports: [FrameModuleBase],
  controllers: [FrameController],
  providers: [FrameService, FrameResolver],
  exports: [FrameService],
})
export class FrameModule {}
