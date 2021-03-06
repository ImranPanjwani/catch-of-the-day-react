import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';

    if (!fish) return null;
    if(!isAvailable) {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer availalble</li>
    }
    return <li key={key}>
      {count} lbs {fish.name}
      {formatPrice(count * fish.price)}
      <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
    </li>
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const totalAmount = orderIds.reduce((prevValue, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevValue + count * fish.price;
      }
      return prevValue;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
        {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
          Total:<strong>{formatPrice(totalAmount)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
