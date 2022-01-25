import React, { useState, createContext } from "react";

export const CakeContext = createContext();

export const CakeProvider = (props) => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [radius, setRadius] = useState(0);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkOption, setCheckOption] = useState("sheet");
  const [cakeLayer, setCakeLayer] = useState(1);

  const [validName, setValidName] = useState(false);
  const [validAddress, setValidAddress] = useState(false);
  const [validPostal, setValidPostal] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const [validClientForm, setValidClientForm] = useState(false);

  const [validSheetForm, setValidSheetForm] = useState(false);

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
      }}
    >
      {props.children}
    </CakeContext.Provider>
  );
};
