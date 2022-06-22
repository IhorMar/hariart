import axios from "../Config";

const OrdersHelper = {
  sendOrder(params) {
    return axios
      .post("orders/", {
        ...params,
      })
      .then(() => {
        localStorage.removeItem("ORDERS");
        window.location.reload();
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
};

export default OrdersHelper;
