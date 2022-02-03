import React, { useState, createContext } from "react";

export const CakeContext = createContext(null);

export const CakeProvider = ({ props }) => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [radius, setRadius] = useState(0);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("Home");
  const [email, setEmail] = useState("");
  const [checkOption, setCheckOption] = useState("sheet");
  const [cakeLayer, setCakeLayer] = useState(1);
  const [cakeOptionTotal, setCakeOptionTotal] = useState(0);

  const [validName, setValidName] = useState(false);
  const [validAddress, setValidAddress] = useState(false);
  const [validPostal, setValidPostal] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const [validClientForm, setValidClientForm] = useState(false);
  const [validSheetForm, setValidSheetForm] = useState(false);

  const [cheese, setCheese] = useState(0);
  const [almond, setAlmond] = useState(0);
  const [fruit, setFruit] = useState(0);

  const [cakeTotal, setCakeTotal] = useState(0);
  const [resetAllForm, setResetAllForm] = useState(false);

  return (
    <CakeContext.Provider
      value={{
        length: [length, setLength],
        width: [width, setWidth],
        radius: [radius, setRadius],
        name: [name, setName],
        address: [address, setAddress],
        postalCode: [postalCode, setPostalCode],
        phone: [phone, setPhone],
        phoneType: [phoneType, setPhoneType],
        email: [email, setEmail],
        checkOption: [checkOption, setCheckOption],
        cakeLayer: [cakeLayer, setCakeLayer],
        validName: [validName, setValidName],
        validAddress: [validAddress, setValidAddress],
        validPostal: [validPostal, setValidPostal],
        validPhone: [validPhone, setValidPhone],
        validEmail: [validEmail, setValidEmail],
        validClientForm: [validClientForm, setValidClientForm],
        validSheetForm: [validSheetForm, setValidSheetForm],
        cakeOptionTotal: [cakeOptionTotal, setCakeOptionTotal],
        cheese: [cheese, setCheese],
        almond: [almond, setAlmond],
        fruit: [fruit, setFruit],
        cakeTotal: [cakeTotal, setCakeTotal],
        resetAllForm: [resetAllForm, setResetAllForm],
      }}
    >
      {props.children}
    </CakeContext.Provider>
  );
};
