import React from "react";

export default function OrderCard({ order, OnQuantityChange }) {
  if (!order) return null;

  const handleIncrement = () => {
    OnQuantityChange(order.product, order.quantity + 1);
  };
  const handleDecrement = () => {
    if (order.quantity >= 1)
      OnQuantityChange(order.product, order.quantity - 1);
  };
  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>{"$ " + order.price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={handleDecrement}>
          -
        </div>
        <h4>{order.quantity}</h4>
        <div className="order-button" onClick={handleIncrement}>
          +
        </div>
      </div>
    </div>
  );
}
