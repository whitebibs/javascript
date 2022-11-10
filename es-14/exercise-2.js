const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}
let order2= order?.customer?.address?.city
console.log(order2);