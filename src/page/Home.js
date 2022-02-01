import React from "react";
import { Col } from "react-bootstrap";
import OrderForm from "../components/OrderForm";
import { CakeProvider } from "../components/CakeContext";

function Home() {
  return (
    <Col md={6}>
      <CakeProvider>
        <OrderForm />
      </CakeProvider>
    </Col>
  );
}

export default Home;
