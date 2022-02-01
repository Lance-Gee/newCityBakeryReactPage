import React, { useContext, useEffect } from "react";
import { CakeContext } from "./CakeContext";

const SheetForm = () => {
  const { length, width, validSheetForm, resetAllForm } =
    useContext(CakeContext);
  const [lengthValue, setLenghtValue] = length;
  const [widthValue, setWidthValue] = width;
  const [validSheetFormValue, setValidSheetFormValue] = validSheetForm;
  const [resetAllFormValue] = resetAllForm;

  useEffect(() => {
    if (resetAllFormValue) {
      document.getElementById("length").classList.remove("is-valid");
      document.getElementById("width").classList.remove("is-valid");
    }
  }, [resetAllFormValue]);

  let isLengthGood = false;
  let isWidthGood = false;

  function validateSheetSize() {
    if (lengthValue >= 30 && lengthValue <= 60) {
      document.getElementById("length").classList.add("is-valid");
      document.getElementById("length").classList.remove("is-invalid");
      isLengthGood = true;
    } else {
      document.getElementById("length").classList.remove("is-valid");
      document.getElementById("length").classList.add("is-invalid");
    }

    if (widthValue >= 30 && widthValue <= 45) {
      document.getElementById("width").classList.add("is-valid");
      document.getElementById("width").classList.remove("is-invalid");
      isWidthGood = true;
    } else {
      document.getElementById("width").classList.remove("is-valid");
      document.getElementById("width").classList.add("is-invalid");
    }

    if (isLengthGood && isWidthGood) {
      console.log("everything good");
      setValidSheetFormValue(true);
    } else {
      setValidSheetFormValue(false);
    }
  }

  return (
    <div id="sheetOption" className="mt-4">
      <div className="input-group">
        <span className="input-group-text">Sheet Size</span>
        <input
          onBlur={validateSheetSize}
          id="length"
          type="text"
          aria-label="length"
          className="form-control"
          placeholder="min 30 max 60"
          name="length"
          min="30"
          max="60"
          required
          onChange={(e) => {
            setLenghtValue(e.target.value);
          }}
        />
        <span className="input-group-text" id="basic-addon1">
          L (cm)
        </span>
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">
          Length must be between 30cm and 60cm!
        </div>
      </div>
      <div className="input-group">
        <span className="input-group-text">Sheet Size</span>
        <input
          onBlur={validateSheetSize}
          id="width"
          type="text"
          aria-label="width"
          className="form-control"
          placeholder="min 30 max 45"
          name="width"
          min="30"
          max="45"
          required
          onChange={(e) => {
            setWidthValue(e.target.value);
          }}
        />
        <span className="input-group-text" id="basic-addon1">
          W (cm)
        </span>
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">
          Width must be between 30cm and 45cm!
        </div>
      </div>
    </div>
  );
};

export default SheetForm;
