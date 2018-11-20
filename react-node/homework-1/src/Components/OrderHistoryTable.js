import React from "react";
import "../css/order-history-table.css";

const OrderHistoryTable = ({ data }) => (
  <table className="table">
    <caption className="table__caption">Order history</caption>
    <tbody>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery address</th>
        <th>Rating</th>
      </tr>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.price}</td>
          <td>{item.address}</td>
          <td>{item.rating}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderHistoryTable;
