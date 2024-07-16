import { Frame as TFrame } from "../api/frame/Frame";

export const FRAME_TITLE_FIELD = "id";

export const FrameTitle = (record: TFrame): string => {
  return record.id?.toString() || String(record.id);
};
