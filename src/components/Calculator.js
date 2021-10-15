import React from 'react';
import Display from "./Display";
import ButtonPanel from './ButtonPanel';

import "./Calculator.css";

export default class Calculator extends React.Component {
    render() {
        return(
            <div className="Calculator">
                <Display />
                <ButtonPanel />
            </div>
        );
    }
}