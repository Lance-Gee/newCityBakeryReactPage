import React, { useContext, useEffect, useState } from "react";
import { CakeContext } from "./CakeContext";
import { Col, Row } from "react-bootstrap";

const ClientForm = () => {
  const {
    name,
    address,
    postalCode,
    phone,
    email,
    validName,
    validAddress,
    validPostal,
    validPhone,
    validEmail,
    validClientForm,
  } = useContext(CakeContext);
  const [nameValue, setNameValue] = name;
  const [addressValue, setAddressValue] = address;
  const [postalCodeValue, setPostalCodeValue] = postalCode;
  const [phoneValue, setPhoneValue] = phone;
  const [emailValue, setEmailValue] = email;
  const [validNameValue, setValidNameValue] = validName;
  const [validAddressValue, setValidAddressValue] = validAddress;
  const [validPostalValue, setValidPostalValue] = validPostal;
  const [validPhoneValue, setValidPhoneValue] = validPhone;
  const [validEmailValue, setValidEmailValue] = validEmail;
  const [validClientFormValue, setValidClientFormValue] = validClientForm;

  const [checkNumber, setCheckNumber] = useState("home");

  useEffect(() => {
    if (
      validNameValue &&
      validAddressValue &&
      validPostalValue &&
      validPhoneValue &&
      validEmailValue
    ) {
      setValidClientFormValue(true);
    } else {
      setValidClientFormValue(false);
    }
  }, [
    validNameValue,
    validAddressValue,
    validPostalValue,
    validPhoneValue,
    validEmailValue,
    setValidClientFormValue,
    validClientFormValue,
  ]);

  function validateName() {
    const symbols = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const namePattern = new RegExp(symbols);
    const isName = isNaN(nameValue);
    if (isName === false || nameValue === "" || nameValue === undefined) {
      document.getElementById("clientName").classList.add("is-invalid");
      document.getElementById("clientName").classList.remove("is-valid");
      setValidNameValue(false);
    } else if (namePattern.test(nameValue)) {
      document.getElementById("clientName").classList.add("is-invalid");
      document.getElementById("clientName").classList.remove("is-valid");
      setValidNameValue(false);
    } else {
      document.getElementById("clientName").classList.add("is-valid");
      document.getElementById("clientName").classList.remove("is-invalid");
      setValidNameValue(true);
    }
  }

  function validateAddress() {
    const pattern = new RegExp("^[a-zA-Z0-9- ]+$");
    if (addressValue === "" || addressValue === undefined) {
      document.getElementById("address").classList.add("is-invalid");
      document.getElementById("address").classList.remove("is-valid");
      setValidAddressValue(false);
    } else if (pattern.test(addressValue)) {
      document.getElementById("address").classList.add("is-valid");
      document.getElementById("address").classList.remove("is-invalid");
      setValidAddressValue(true);
    } else {
      document.getElementById("address").classList.add("is-invalid");
      document.getElementById("address").classList.remove("is-valid");
      setValidAddressValue(false);
    }
  }

  function validatePostalCode() {
    const pattern = new RegExp("^[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]$");
    if (pattern.test(postalCodeValue)) {
      document.getElementById("postalCode").classList.add("is-valid");
      document.getElementById("postalCode").classList.remove("is-invalid");
      setValidPostalValue(true);
    } else {
      document.getElementById("postalCode").classList.add("is-invalid");
      document.getElementById("postalCode").classList.remove("is-valid");
      setValidPostalValue(false);
    }
  }

  function validatePhone() {
    // Regex found here https://stackoverflow.com/questions/9776231/regular-expression-to-validate-us-phone-numbers
    const pattern = new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{4}$");
    if (pattern.test(phoneValue)) {
      document.getElementById("telephone").classList.add("is-valid");
      document.getElementById("telephone").classList.remove("is-invalid");
      setValidPhoneValue(true);
    } else {
      document.getElementById("telephone").classList.add("is-invalid");
      document.getElementById("telephone").classList.remove("is-valid");
      setValidPhoneValue(false);
    }
  }

  function validateEmail() {
    const pattern = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z]+[.][a-zA-Z]{2,}$");
    if (pattern.test(emailValue)) {
      document.getElementById("email").classList.add("is-valid");
      document.getElementById("email").classList.remove("is-invalid");
      setValidEmailValue(true);
    } else {
      document.getElementById("email").classList.add("is-invalid");
      document.getElementById("email").classList.remove("is-valid");
      setValidEmailValue(false);
    }
  }

  return (
    <div>
      <h2 className="text-center">Order Form</h2>
      <div>
        <label htmlFor="firstName" className="form-label mt-3">
          Client Name
        </label>
        <input
          onBlur={validateName}
          type="text"
          className="form-control"
          id="clientName"
          name="clientName"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          pattern="[A-Za-z- ]+"
          required
          autoFocus
        />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please enter a valid Name</div>
      </div>
      <div>
        <label htmlFor="address" className="form-label mt-3">
          Address
        </label>
        <input
          onBlur={validateAddress}
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={addressValue}
          onChange={(e) => setAddressValue(e.target.value)}
          pattern="^[a-zA-Z0-9- ]+$"
          required
        />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please enter a valid Address</div>
      </div>
      <div>
        <label htmlFor="postalCode" className="form-label mt-3">
          Postal Code
        </label>
        <input
          onBlur={validatePostalCode}
          type="text"
          className="form-control"
          id="postalCode"
          name="postalCode"
          value={postalCodeValue}
          onChange={(e) => setPostalCodeValue(e.target.value)}
          placeholder="L9L9L9"
          pattern="[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]"
          required
        />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">
          Please enter a valid Postal Code eg. T5T5T5
        </div>
      </div>
      <div>
        <label htmlFor="telephone" className="form-label mt-3">
          Telephone
        </label>
        <input
          onBlur={validatePhone}
          type="text"
          className="form-control"
          id="telephone"
          name="phone"
          value={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
          placeholder="xxx-xxx-xxxx"
          pattern="\d{3}[\-]\d{3}[\-]\d{4}"
          required
        />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">
          Please enter a valid Phone number eg. xxx-xxx-xxxx
        </div>
      </div>
      <Row className="mt-2">
        <Col md={4}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="phoneNumber"
              id="business"
              value="business"
              checked={checkNumber === "business"}
              onChange={(e) => setCheckNumber(e.target.value)}
            />
            <label className="form-check-label" htmlFor="business">
              Business
            </label>
          </div>
        </Col>
        <Col md={4}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="phoneNumber"
              id="home"
              value="home"
              checked={checkNumber === "home"}
              onChange={(e) => setCheckNumber(e.target.value)}
            />
            <label className="form-check-label" htmlFor="home">
              {" "}
              Home{" "}
            </label>
          </div>
        </Col>
      </Row>
      <div>
        <label htmlFor="email" className="form-label mt-3">
          Email
        </label>
        <input
          onBlur={validateEmail}
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="yourName@gmail.com"
          pattern="^[a-zA-Z0-9_.-]+@[a-zA-Z]+[\.][a-zA-Z]{2,}$"
          required
        />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">
          Please enter a valid Email eg. John@example.com
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
