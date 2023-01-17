export class Order {
  //todo: pridėti read only ir private
  id;
  name;
  orderedAt;
  completedAt;
  products; //ProductID []
  totalPrice;

  constructor(id, name, orderedAt, completedAt, products, totalPrice) {
    //init id,init name, ...
    this.id = id;
    this.name = name;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
