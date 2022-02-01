import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function Orders() {
  //   const [orders, setOrders] = useState([]);
  //   // fetch data from firebase using getDocs, problem is page does not reload
  //   const ordersCollectionRef = collection(db, "purchaseOrders");

  //   useEffect(() => {
  //     const getOrders = async () => {
  //       const data = await getDocs(ordersCollectionRef);
  //       // attaching the id: doc.id will give you the id cause you won't get the id when fetching
  //       setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     };

  //     getOrders();
  //   }, []);

  // fetch data from firebase using onSnapshot, refresh page because onSnapshot refires from firebase
  // useEffect(() => {
  //   db.collection("purchaseOrders").onSnapshot((snapshot) => {
  //     setOrders(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  return (
    <div>
      <h1>This is the Order Page</h1>
      {/* {orders.map((order) => {
        return (
          <div>
            <h1>Name: {order.name}</h1>
            <h1>Address: {order.address}</h1>
            <h1>Phone: {order.phone}</h1>
            <h1>PostalCode: {order.postalCode}</h1>
            <h1>Email: {order.email}</h1>
            <h1>CakeSizePrice: {order.cakeSizePrice}</h1>
            <h1>Cheese: {order.cheese}</h1>
            <h1>Fruit: {order.fruit}</h1>
            <h1>Almond: {order.almond}</h1>
            <h1>Total: {order.total.toFixed(2)}</h1>
            <hr />
          </div>
        );
      })} */}
    </div>
  );
}

export default Orders;
