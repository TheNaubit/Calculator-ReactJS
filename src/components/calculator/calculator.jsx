import React from 'react';

// Import the component's style
import './calculator.scss';

// We need to import this enum too
import { BUTTON_TYPES, OPERATION_TYPES } from './../../utils/enums';

// And the Utils
import * as Utils from './../../utils/functions';

// And the sub components
import Button from './../button/button';
import Screen from './../screen/screen';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        // We need to define the state's properties but undefined
        this.state = {
            firstNumber: undefined,
            secondNumber: undefined,
            operation: OPERATION_TYPES.NULL
        }

        // And bind the handlers!
        this.handleBtnNumberClick = this.handleBtnNumberClick.bind(this);
        this.handleBtnClearClick = this.handleBtnClearClick.bind(this);
        this.handleBtnOperationClick = this.handleBtnOperationClick.bind(this);
    }

    // Now let's code the handler of the number buttons
    handleBtnNumberClick = (number) => {

        // If we are typing the first number (since no operation has been defined)...
        if (this.state.operation === OPERATION_TYPES.NULL) {
            // If first number is undefined or zero
            if (this.state.firstNumber === undefined || (this.state.firstNumber === 0 && number !== 0)) {
                // We can override it with our new number
                this.setState({
                    firstNumber: number
                });
            // If first number was already written
            } else {
                // We add this new digit
                let newFirstNumber = this.state.firstNumber * 10 + number;
                this.setState({
                    firstNumber: newFirstNumber
                });
            }
        // If we are typing the second number
        } else {
            // We do exactly the same check that we did for the first number
            if (this.state.secondNumber === undefined || (this.state.secondNumber === 0 && number !== 0)) {
                this.setState({
                    secondNumber: number
                });
            } else {
                let newSecondNumber = this.state.secondNumber * 10 + number;
                this.setState({
                    secondNumber: newSecondNumber
                });
            }
        }
    };

    // This is the handler for the Clear button
    handleBtnClearClick = () => {
        // It justs resets the state to the initial one
        this.setState({
            firstNumber: undefined,
            secondNumber: undefined,
            operation: OPERATION_TYPES.NULL
        });
    }

    // This is the handler for our operation buttons
    handleBtnOperationClick = (operation) => {
        switch (operation) {
            // If we want to divide
            case OPERATION_TYPES.DIVIDE:
                // And first number is defined
                if (this.state.firstNumber !== undefined) {
                    // We add the divide operation to our state
                    this.setState({
                        operation: operation
                    });
                }

                break;
            // The same happens with multiply
            case OPERATION_TYPES.MULTIPLY:
                if (this.state.firstNumber !== undefined) {
                    this.setState({
                        operation: operation
                    });
                }

                break;
            // And subtract
            case OPERATION_TYPES.SUBTRACT:
                if (this.state.firstNumber !== undefined) {
                    this.setState({
                        operation: operation
                    });
                }

                break;
            // The Equal operation is an special case
            case OPERATION_TYPES.EQUAL:
                // Since it only happens at the end (once we wrote the second number)
                // So we resolve the operation
                let operationResult = Utils.resolveOperation(this.state.firstNumber, this.state.secondNumber, this.state.operation);
                // And if we could
                if (operationResult !== undefined) {
                    // Update the state with the result
                    this.setState({
                        firstNumber: operationResult,
                        secondNumber: undefined,
                        operation: OPERATION_TYPES.NULL
                    });
                }
                break;
            // With the Add operation is equal than Subtract, Divide and Multiply ones
            // Except we specify the operation element, since we also catch here the default case
            case OPERATION_TYPES.ADD:
            default:
                if (this.state.firstNumber !== undefined) {
                    this.setState({
                        operation: OPERATION_TYPES.ADD
                    })
                }
                ;
                break;
        }
    }

    // Now the render function
    // I used a CSS grid for this (each cell is defined as 'wrapper')
    // And inside of them I add the components
    render() {
        return (
            <div id="calculator" className="calculator">
                <div className="screenWrapper">
                    <Screen operation={Utils.formatOperation(this.state.firstNumber, this.state.secondNumber, this.state.operation)} />
                </div>
                <div className="btnDivideWrapper">
                    <Button btnText="÷" btnType={BUTTON_TYPES.OPERATION} btnClickHandler={() => { this.handleBtnOperationClick(OPERATION_TYPES.DIVIDE) }} />
                </div>
                <div className="btnMultiplyWrapper">
                    <Button btnText="×" btnType={BUTTON_TYPES.OPERATION} btnClickHandler={() => { this.handleBtnOperationClick(OPERATION_TYPES.MULTIPLY) }} />
                </div>
                <div className="btnAddWrapper">
                    <Button btnText="+" btnType={BUTTON_TYPES.OPERATION} btnClickHandler={() => { this.handleBtnOperationClick(OPERATION_TYPES.ADD) }} />
                </div>
                <div className="btnSubtractWrapper">
                    <Button btnText="-" btnType={BUTTON_TYPES.OPERATION} btnClickHandler={() => { this.handleBtnOperationClick(OPERATION_TYPES.SUBTRACT) }} />
                </div>
                <div className="btnEqualWrapper">
                    <Button btnText="=" btnType={BUTTON_TYPES.OPERATION} btnClickHandler={() => { this.handleBtnOperationClick(OPERATION_TYPES.EQUAL) }} />
                </div>
                <div className="btnClearWrapper">
                    <Button btnText="Clear" btnType={BUTTON_TYPES.CLEAR} btnClickHandler={() => { this.handleBtnClearClick() }} />
                </div>
                <div className="btnNumber1Wrapper">
                    <Button btnText="1" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(1) }} />
                </div>
                <div className="btnNumber2Wrapper">
                    <Button btnText="2" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(2) }} />
                </div>
                <div className="btnNumber3Wrapper">
                    <Button btnText="3" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(3) }} />
                </div>
                <div className="btnNumber4Wrapper">
                    <Button btnText="4" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(4) }} />
                </div>
                <div className="btnNumber5Wrapper">
                    <Button btnText="5" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(5) }} />
                </div>
                <div className="btnNumber6Wrapper">
                    <Button btnText="6" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(6) }} />
                </div>
                <div className="btnNumber7Wrapper">
                    <Button btnText="7" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(7) }} />
                </div>
                <div className="btnNumber8Wrapper">
                    <Button btnText="8" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(8) }} />
                </div>
                <div className="btnNumber9Wrapper">
                    <Button btnText="9" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(9) }} />
                </div>
                <div className="btnNumber0Wrapper">
                    <Button btnText="0" btnType={BUTTON_TYPES.NUMBER} btnClickHandler={() => { this.handleBtnNumberClick(0) }} />
                </div>
            </div>
        );
    }
}