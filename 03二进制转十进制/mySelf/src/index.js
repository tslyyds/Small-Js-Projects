import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Form, Filed, BinaryText, DecimalText, Button, Label } from "./style";

export default function App() {
  const [Binary_Text, setBinary_Text] = useState("");
  const [Decimal_Text, setDecimal_Text] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (Binary_Text.match(/^[0-1]+$/g) === null) {
      setErrorMessage("请输入二进制数");
      return;
    }
    setErrorMessage("");
    const split = Binary_Text.split("").map(Number).reverse();
    const result = split.reduce((pre, current, index) => {
      return pre + current * Math.pow(2, index);
    });
    setDecimal_Text(result);
  };

  return (
    <>
      <h1>Binary to Decimal Converter</h1>
      <Form onSubmit={onFormSubmit}>
        {ErrorMessage && <span style={{ color: "red" }}>{ErrorMessage}</span>}
        <br></br>
        <Filed>
          <Label>Binary Iput</Label>
          <div>
            <BinaryText
              type="text"
              placeholder="输入二进制数"
              value={Binary_Text}
              onChange={(e) => {
                setBinary_Text(e.target.value);
                setDecimal_Text("");
                setErrorMessage("");
              }}
            />
            <Button>转换</Button>
          </div>
        </Filed>
        <Filed>
          <Label>Decimal output</Label>
          <div>
            <DecimalText type="text" value={Decimal_Text} disabled />
          </div>
        </Filed>
      </Form>
    </>
  );
}

const rootDom = document.getElementById("root");
ReactDOM.render(<App />, rootDom);
