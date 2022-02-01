import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Col, Table } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore/lite";

function Orders() {
  const [orders, setOrders] = useState([]);
  // fetch data from firebase using getDocs, problem is page does not reload
  const ordersCollectionRef = collection(db, "purchaseOrders");

  useEffect(() => {
    const getOrders = async () => {
      const data = await getDocs(ordersCollectionRef);
      // attaching the id: doc.id will give you the id cause you won't get the id when fetching
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getOrders();
  }, []);

  // fetch data from firebase using onSnapshot, refresh page because onSnapshot refires from firebase
  // useEffect(() => {
  //   db.collection("purchaseOrders").onSnapshot((snapshot) => {
  //     setOrders(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  return (
    <Col md={6}>
      <h1 className="text-center">Purchase Orders</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Postal Code</th>
            <th>Email</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>{order.postalCode}</td>
                <td>{order.email}</td>
                <td>${order.total.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
}

export default Orders;
