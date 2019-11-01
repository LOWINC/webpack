export const OrderStatus = {
  Init: "Init",
  Paying: "Paying"
};

export const MapStatusToStr = {
  [OrderStatus.Init]: "待支付",
  [OrderStatus.Paying]: "支付中"
};
