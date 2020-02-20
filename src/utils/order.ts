import { OrderStatus } from "../constants/order";

import dayjs from "dayjs";

type Params = keyof typeof OrderStatus;

export function isInitOrder(status: Params) {
  return status === OrderStatus.Init;
}

export function day() {
  return dayjs().format("YYYY-MM-DD");
}
