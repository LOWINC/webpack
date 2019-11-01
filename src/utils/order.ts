import {OrderStatus} from "../constants/order";
type Params = keyof typeof OrderStatus;

export function isInitOrder(status: Params) {
  return status === OrderStatus.Init;
}
