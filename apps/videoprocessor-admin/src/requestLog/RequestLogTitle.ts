import { RequestLog as TRequestLog } from "../api/requestLog/RequestLog";

export const REQUESTLOG_TITLE_FIELD = "id";

export const RequestLogTitle = (record: TRequestLog): string => {
  return record.id?.toString() || String(record.id);
};
