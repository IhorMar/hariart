export function setOrders(orders) {
  try {
    localStorage.setItem("ORDERS", JSON.stringify(orders));
  } catch (e) {
    cleanUpStorage(data);
  }
}

export function getOrders() {
  let orders = [];
  try {
    const data = localStorage.getItem("ORDERS");

    if (data) {
      orders = JSON.parse(data);
    }
  } catch (e) {
    console.error(e.message);
  }

  return orders;
}

export function removeOrders() {
  localStorage.removeItem("ORDERS");
}
