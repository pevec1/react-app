import React from "react";
import Button from "./Button";
import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="Button-panel">
        <div>
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="÷" actions />
        </div>
        <div>
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="x" actions />
        </div>
        <div>
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" actions />
        </div>
        <div>
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="+" actions />
        </div>
        <div>
          <Button name="0" wide />
          <Button name="." />
          <Button name="=" actions />
        </div>
      </div>
    );
  }
}