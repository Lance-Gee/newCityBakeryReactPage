import React, { useContext } from "react";
import { CakeContext } from "./CakeContext";

const RoundForm = () => {
  const { radius, validSheetForm } = useContext(CakeContext);
  const [radiusValue, setRadiusValue] = radius;
  const [validSheetFormValue, setValidSheeFormValue] = validSheetForm;

  function validateRoundSize() {
    if (radiusValue >= 15 && radiusValue <= 30) {
      document.getElementById("radius").classList.add("is-valid");
      document.getElementById("radius").classList.remove("is-invalid");
      setValidSheeFormValue(true);
    } else {
      document.getElementById("radius").classList.remove("is-valid");
      document.getElementById("radius").classList.add("is-invalid");
      setValidSheeFormValue(false);
    }
  }

  return (
    <div id="roundOption" className="mt-4">
      <div className="input-group">
        <span className="input-group-text">Round Size</span>
        <input
          onBlur={validateRoundSize}
          id="radius"
          type="text"
          aria-label="radius"
          className="form-control"
          placeholder="min 15 max 30"
          name="radius"
          min="15"
          max="30"
          required
          onChange={(e) => {
            setRadiusValue(e.target.value);
          }}
        />
        <span className="input-group-text" id="basic-addon1">
          rad (cm)
        </span>
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">
          Radius must be between 15cm and 30cm!
        </div>
      </div>
    </div>
  );
};

export default RoundForm;
