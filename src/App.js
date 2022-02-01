import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import background from "./images/menu_background.jpg";
import background2 from "./images/pattern_bg.png";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./page/ErrorPage";
import Home from "./page/Home";
import Orders from "./page/Orders";
import SideMenu from "./components/SideMenu";

function App() {
  useEffect(() => {
    document.title = "New Bakery City";
  }, []);

  return (
    <Row
      style={{
        backgroundImage: `url(${background2})`,
      }}
    >
      <Router>
        <Col md={3} style={{ backgroundImage: `url(${background})` }}>
          <SideMenu />
        </Col>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Row>
  );
}

export default App;
