import * as graphql from "@nestjs/graphql";
import { FrameResolverBase } from "./base/frame.resolver.base";
import { Frame } from "./base/Frame";
import { FrameService } from "./frame.service";

@graphql.Resolver(() => Frame)
export class FrameResolver extends FrameResolverBase {
  constructor(protected readonly service: FrameService) {
    super(service);
  }
}
