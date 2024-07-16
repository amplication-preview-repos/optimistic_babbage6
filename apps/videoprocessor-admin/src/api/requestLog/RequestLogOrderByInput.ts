import { SortOrder } from "../../util/SortOrder";

export type RequestLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
