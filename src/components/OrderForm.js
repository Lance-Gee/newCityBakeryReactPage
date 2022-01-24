import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./OrderForm.module.css";
import { useState, useContext } from "react";
import RoundForm from "./RoundForm";
import SheetForm from "./SheetForm";
import ClientForm from "./ClientForm";
import { CakeContext } from "./CakeContext";

// Create Validation JS file for just validation and use useContext to store data
function OrderForm() {
  const { validClientForm, validSheetForm } = useContext(CakeContext);

  const [validClientFormValue, setValidClientFormValue] = validClientForm;
  const [validSheetFormValue, setValidSheetFormValue] = validSheetForm;

  const [checkOption, setCheckOption] = useState("sheet");

  const [cheese, setCheese] = useState(0);
  const [almond, setAlmond] = useState(0);
  const [fruit, setFruit] = useState(0);

  function bothFormsValid() {
    if (validClientFormValue && validSheetFormValue) {
      return true;
    } else {
      return false;
    }
  }

  const validateForm = () => {
    console.log("yes you made it to the purchase button!");
  };

  const [selectedOption, setSelectOption] = useState(
    <SheetForm length={0} width={0} />
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted!");
  }

  return (
    <Container className={classes.orderFormDiv}>
      <ClientForm />
      <div className="mt-5">
        <form id="newBakeryForm" action="" onSubmit={handleSubmit}>
          <h4 className="mt-3">Order Information</h4>
          <hr />
          <h6>Choose Cake Options</h6>
          <Row>
            <Col md={3}>
              <div className="form-check mt-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="cakeType"
                  id="round"
                  value="round"
                  checked={checkOption === "round"}
                  onChange={(e) => {
                    setCheckOption(e.target.value);
                    setSelectOption(<RoundForm />);
                    setValidSheetFormValue(false);
                  }}
                />
                <label className="form-check-label" htmlFor="round">
                  Round Cake
                </label>
              </div>
            </Col>
            <Col md={3}>
              <div className="form-check mt-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="cakeType"
                  id="sheet"
                  value="sheet"
                  checked={checkOption === "sheet"}
                  onChange={(e) => {
                    setCheckOption(e.target.value);
                    setSelectOption(<SheetForm length={0} width={0} />);
                    setValidSheetFormValue(false);
                  }}
                />
                <label className="form-check-label" htmlFor="sheet">
                  Sheet Cake
                </label>
              </div>
            </Col>
            <Col md={6}>
              <label className="form-check-label" htmlFor="sheet">
                Select the number of Layers
              </label>
              <select
                id="cakeLayer"
                className="form-select"
                aria-label="cakeLayer"
                name="cakeLayer"
              >
                <option defaultValue={"1"}>One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
            <div>{selectedOption}</div>
            <div className="mt-4">
              <h5>Additional Choices</h5>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="5"
                  id="creamCheese"
                  name="creamCheese"
                  onChange={(e) => setCheese(e.target.value)}
                />
                <label className="form-check-label" htmlFor="creamCheese">
                  Cream Cheese icing is an extra $5
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={almond}
                  id="fruitAlmond"
                  name="fruitAlmond"
                  onChange={(e) => setAlmond(7)}
                />
                <label className="form-check-label" htmlFor="fruitAlmond">
                  Fruit and Almonds topping is an extra $7
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="4"
                  id="fruitJam"
                  name="fruitJam"
                  onChange={(e) => setFruit(e.target.value)}
                />
                <label className="form-check-label" htmlFor="fruitJam">
                  Fruit jam filling between layers is an extra $4
                </label>
              </div>
            </div>
            <div className="mt-2">
              <hr />
            </div>
            <button
              type="button"
              className="btn btn-warning"
              disabled={!bothFormsValid()}
              onClick={validateForm}
            >
              Place Order
            </button>
          </Row>
        </form>
      </div>
    </Container>
  );
}

export default OrderForm;
