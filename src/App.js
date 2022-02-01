import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import SideMenu from "./components/SideMenu";
import { Col, Row } from "react-bootstrap";
import background from "./images/menu_background.jpg";
import background2 from "./images/pattern_bg.png";
import OrderForm from "./components/OrderForm";
import { CakeProvider } from "./components/CakeContext";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  useEffect(() => {
    document.title = "New Bakery City";
  }, []);

  const [orders, setOrders] = useState([]);
  // fetch data from firebase using getDocs, problem is page does not reload
  const ordersCollectionRef = collection(db, "purchaseOrders");

  // useEffect(() => {
  //   const getOrders = async () => {
  //     const data = await getDocs(ordersCollectionRef);
  //     // attaching the id: doc.id will give you the id cause you won't get the id when fetching
  //     setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getOrders();
  // }, []);

  // fetch data from firebase using onSnapshot, refresh page because onSnapshot refires from firebase
  // useEffect(() => {
  //   db.collection("purchaseOrders").onSnapshot((snapshot) => {
  //     setOrders(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  return (
    <div>
      <Row
        style={{
          backgroundImage: `url(${background2})`,
        }}
      >
        <Col md={3} style={{ backgroundImage: `url(${background})` }}>
          <SideMenu />
        </Col>
        <CakeProvider>
          <Col md={6}>
            <OrderForm />
          </Col>
        </CakeProvider>
      </Row>
      {orders.map((order) => {
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
      })}
    </div>
  );
}

export default App;
