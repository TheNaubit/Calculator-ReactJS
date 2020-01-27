import React from 'react';

// Import the component's style
import './button.scss';

import { BUTTON_TYPES } from './../../utils/enums';

const Button = (props) => {
    let btnType = props.btnType;
    let btnText = props.btnText;
    let btnClickHandler = props.btnClickHandler;

    let btnClass;

    switch (btnType) {
        case BUTTON_TYPES.CLEAR:
            btnClass = "btn btnClear";
            break;
        case BUTTON_TYPES.OPERATION:
            btnClass = "btn btnOperation";
            break;
        case BUTTON_TYPES.NUMBER:
        default:
            btnClass = "btn btnNumber";
            break;
    }
    return (
        <div className={btnClass} onClick={btnClickHandler}>
            <p>{btnText}</p>
        </div>
    );
}

export default Button;