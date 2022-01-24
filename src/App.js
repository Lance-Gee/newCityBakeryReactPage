import "./App.css";
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
      <Row>
        <Col md={3} style={{ backgroundImage: `url(${background})` }}>
          <SideMenu />
        </Col>
        <Col
          md={6}
          style={{
            backgroundImage: `url(${background2})`,
          }}
        >
          <CakeProvider>
            <OrderForm />
          </CakeProvider>
        </Col>
      </Row>
    </div>
  );
}

export default App;
