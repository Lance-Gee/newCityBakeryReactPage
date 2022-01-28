import { Col, Container, Row, Modal, Button, ModalBody } from "react-bootstrap";
import classes from "./OrderForm.module.css";
import { useState, useContext, useEffect } from "react";
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
    cakeTotal,
    cheese,
    almond,
    fruit,
    name,
    address,
    postalCode,
    phone,
    phoneType,
    email,
    cakeOptionTotal,
  } = useContext(CakeContext);

  const [validClientFormValue, setValidClientFormValue] = validClientForm;
  const [validSheetFormValue, setValidSheetFormValue] = validSheetForm;
  const [lengthValue, setLengthValue] = length;
  const [widthValue, setWidthValue] = width;
  const [radiusValue, setRadiusValue] = radius;
  const [checkOptionValue, setCheckOptionValue] = checkOption;
  const [cakeLayerValue, setCakeLayerValue] = cakeLayer;
  const [cakeTotalValue, setCakeTotalValue] = cakeTotal;

  const [nameValue, setNameValue] = name;
  const [addressValue, setAddressValue] = address;
  const [postalCodeValue, setPostalCodeValue] = postalCode;
  const [phoneValue, setPhoneValue] = phone;
  const [phoneTypeValue, setPhoneTypeValue] = phoneType;
  const [emailValue, setEmailValue] = email;
  const [cakeTotalOptionValue, setCakeTotalOptionValue] = cakeOptionTotal;

  const [cheeseValue, setCheeseValue] = cheese;
  const [almondValue, setAlmondValue] = almond;
  const [fruitValue, setFruitValue] = fruit;

  const [additionalLayer, setAdditionalLayer] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setCakeTotalValue(0);
    if (checkOptionValue === "sheet" && lengthValue > 0 && widthValue > 0) {
      const cakeDimensions = lengthValue * widthValue;
      const cakeCalc = (cakeDimensions - 900) * 0.02 + 18;
      setCakeTotalOptionValue(cakeCalc);
    } else if (checkOptionValue === "round" && radiusValue > 0) {
      const cakeDimensionRad = radiusValue * radiusValue * 3.14;
      const cakeCalcRad = (cakeDimensionRad - 707) * 0.02 + 15;
      setCakeTotalOptionValue(cakeCalcRad);
    } else {
      setCakeTotalOptionValue(0);
    }

    if (cakeLayerValue === 2) {
      setAdditionalLayer(cakeTotalOptionValue / 2);
      setCakeTotalValue(cakeTotalOptionValue + additionalLayer);
    } else if (cakeLayerValue === 3) {
      setAdditionalLayer(cakeTotalOptionValue / 2);
      setCakeTotalValue(cakeTotalOptionValue + additionalLayer * 2);
    }
  }, [lengthValue, widthValue, radiusValue]);

  useEffect(() => {
    setCakeTotalValue(
      cakeTotalOptionValue + cheeseValue + almondValue + fruitValue
    );
  });

  function bothFormsValid() {
    if (validClientFormValue && validSheetFormValue) {
      return true;
    } else {
      return false;
    }
  }

  const [selectedOption, setSelectOption] = useState(<SheetForm />);

  function handleSubmit(e) {
    e.preventDefault();
    setShow(true);
  }

  return (
    <div>
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
                      setCakeTotalValue(0);
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
                      setCakeTotalValue(0);
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
                    value={cheeseValue}
                    id="creamCheese"
                    name="creamCheese"
                    onChange={(e) =>
                      cheeseValue === 0 ? setCheeseValue(5) : setCheeseValue(0)
                    }
                  />
                  <label className="form-check-label" htmlFor="creamCheese">
                    Cream Cheese icing is an extra $5
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={almondValue}
                    id="fruitAlmond"
                    name="fruitAlmond"
                    onChange={(e) =>
                      almondValue === 0 ? setAlmondValue(7) : setAlmondValue(0)
                    }
                  />
                  <label className="form-check-label" htmlFor="fruitAlmond">
                    Fruit and Almonds topping is an extra $7
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={fruitValue}
                    id="fruitJam"
                    name="fruitJam"
                    onChange={(e) =>
                      fruitValue === 0 ? setFruitValue(4) : setFruitValue(0)
                    }
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
                type="submit"
                className="btn btn-warning"
                disabled={!bothFormsValid()}
              >
                Place Order
              </button>
            </Row>
          </form>
        </div>
      </Container>

      {/* Modal for purchase order */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className={classes.modalHeader} closeButton>
          <Modal.Title>Purchase Order</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <h5>Customer Details</h5>
          <hr />
          <h6>{nameValue}</h6>
          <h6>{addressValue}</h6>
          <h6>{postalCodeValue}</h6>
          <h6>
            {phoneTypeValue}: {phoneValue}
          </h6>
          <h6>{emailValue}</h6>
          <Row>
            <Col>
              <h5 className="mt-3">Order Details</h5>
              <hr />
            </Col>
            <Col>
              <h5 className="mt-3">Price</h5>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              {lengthValue >= 34 &&
                widthValue >= 34 &&
                lengthValue <= 60 &&
                widthValue <= 45 && (
                  <p>
                    {checkOptionValue} cake {lengthValue}cm x {widthValue}cm
                    with {cakeLayerValue} layers:
                  </p>
                )}
              {radiusValue >= 15 && radiusValue <= 30 && (
                <p>
                  {checkOptionValue} cake {radiusValue}cm with {cakeLayerValue}{" "}
                  layers:
                </p>
              )}
            </Col>
            <Col>
              <p>{cakeTotalOptionValue.toFixed(2)}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Cream Cheese Icing:</p>
            </Col>
            <Col>
              <p>{cheeseValue.toFixed(2)}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Fruit and Almonds:</p>
            </Col>
            <Col>
              <p>{almondValue.toFixed(2)}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Fruit Jam Filling:</p>
            </Col>
            <Col>
              <p>{fruitValue.toFixed(2)}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h6>Total:</h6>
            </Col>
            <Col>
              <h6>{cakeTotalValue.toFixed(2)}</h6>
            </Col>
          </Row>
        </ModalBody>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel Order
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderForm;
