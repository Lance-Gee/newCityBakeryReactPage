import { Col, Container, Row } from "react-bootstrap";
import classes from "./OrderForm.module.css";
import { useState, useContext } from "react";
import RoundForm from "./RoundForm";
import SheetForm from "./SheetForm";
import ClientForm from "./ClientForm";
import { CakeContext } from "./CakeContext";

// Create Validation JS file for just validation and use useContext to store data
function OrderForm() {
  const {
    validClientForm,
    validSheetForm,
    length,
    width,
    radius,
    checkOption,
    cakeLayer,
  } = useContext(CakeContext);

  const [validClientFormValue, setValidClientFormValue] = validClientForm;
  const [validSheetFormValue, setValidSheetFormValue] = validSheetForm;
  const [lengthValue, setLengthValue] = length;
  const [widthValue, setWidthValue] = width;
  const [radiusValue, setRadiusValue] = radius;
  const [checkOptionValue, setCheckOptionValue] = checkOption;
  const [cakeLayerValue, setCakeLayerValue] = cakeLayer;

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
    console.log("Length: " + lengthValue);
    console.log("Width: " + widthValue);
    console.log("Radius: " + radiusValue);
    console.log("Cheese: " + cheese);
    console.log("Almond: " + almond);
    console.log("Fruit: " + fruit);
  };

  const [selectedOption, setSelectOption] = useState(<SheetForm />);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted!");
  }

  return (
    <Container className={`mt-5 ${classes.orderFormDiv}`}>
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
                  checked={checkOptionValue === "round"}
                  onChange={(e) => {
                    setCheckOptionValue(e.target.value);
                    setSelectOption(<RoundForm />);
                    setValidSheetFormValue(false);
                    setRadiusValue(0);
                    setLengthValue(0);
                    setWidthValue(0);
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
                  checked={checkOptionValue === "sheet"}
                  onChange={(e) => {
                    setCheckOptionValue(e.target.value);
                    setSelectOption(<SheetForm />);
                    setValidSheetFormValue(false);
                    setLengthValue(0);
                    setWidthValue(0);
                    setRadiusValue(0);
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
                onChange={(e) => {
                  setCakeLayerValue(parseInt(e.target.value));
                }}
              >
                <option defaultValue={1}>One</option>
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
                  value={cheese}
                  id="creamCheese"
                  name="creamCheese"
                  onChange={(e) => (cheese === 0 ? setCheese(5) : setCheese(0))}
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
                  onChange={(e) => (almond === 0 ? setAlmond(7) : setAlmond(0))}
                />
                <label className="form-check-label" htmlFor="fruitAlmond">
                  Fruit and Almonds topping is an extra $7
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={fruit}
                  id="fruitJam"
                  name="fruitJam"
                  onChange={(e) => (fruit === 0 ? setFruit(4) : setFruit(0))}
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
