import { FrameWhereInput } from "./FrameWhereInput";
import { FrameOrderByInput } from "./FrameOrderByInput";

export type FrameFindManyArgs = {
  where?: FrameWhereInput;
  orderBy?: Array<FrameOrderByInput>;
  skip?: number;
  take?: number;
};
