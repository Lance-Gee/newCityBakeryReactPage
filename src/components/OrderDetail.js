import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CakeContext } from "./CakeContext";

function OrderDetail() {
  const {
    validClientForm,
    validSheetForm,
    length,
    width,
    radius,
    name,
    address,
    postalCode,
    phone,
    email,
    checkOption,
    cakeLayer,
  } = useContext(CakeContext);

  const [lengthValue, setLengthValue] = length;
  const [widthValue, setWidthValue] = width;
  const [radiusValue, setRadiusValue] = radius;
  const [checkOptionValue, setCheckOptionValue] = checkOption;
  const [nameValue, setNameValue] = name;
  const [addressValue, setAddressValue] = address;
  const [postalCodeValue, setPostalCodeValue] = postalCode;
  const [phoneValue, setPhoneValue] = phone;
  const [emailValue, setEmailValue] = email;
  const [cakeLayerValue, setCakeLayerValue] = cakeLayer;

  return (
    <div>
      <h5 className="mt-5">Customer Details</h5>
      <hr />
      <h6>{nameValue}</h6>
      <h6>{addressValue}</h6>
      <h6>{postalCodeValue}</h6>
      <h6>{phoneValue}</h6>
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
                {checkOptionValue} cake {lengthValue}cm x {widthValue}cm with{" "}
                {cakeLayerValue} layers:
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
          <p>$25.88</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Cream Cheese Icing:</p>
        </Col>
        <Col>
          <p>$15.88</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Fruit and Almonds:</p>
        </Col>
        <Col>
          <p>$10.88</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Fruit Jam Filling:</p>
        </Col>
        <Col>
          <p>$5.88</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6>Total:</h6>
        </Col>
        <Col>
          <h6>$19.99</h6>
        </Col>
      </Row>
    </div>
  );
}

export default OrderDetail;
