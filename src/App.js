import "bootstrap/dist/css/bootstrap.min.css";
import SideMenu from "./components/SideMenu";
import { Col, Row } from "react-bootstrap";
import background from "./images/menu_background.jpg";
import background2 from "./images/pattern_bg.png";
import OrderForm from "./components/OrderForm";
import { CakeProvider } from "./components/CakeContext";

function App() {
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
    </div>
  );
}

export default App;
