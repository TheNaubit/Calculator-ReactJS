import React from 'react';

// Import the component's style
import './screen.scss';

import { BUTTON_TYPES } from './../../utils/enums';

const Screen = (props) => {
    
    let operation = props.operation;
    
    return (
        <div className="screen">
            <p>{operation}</p>
        </div>
    );
}

export default Screen;