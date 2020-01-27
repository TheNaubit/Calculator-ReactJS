import React from "react";

// Don't forget to import the style of the component!
import './cloudsBackground.scss';

// This will be the component to display the moving clouds
// At the top of the app
const CloudsBackground = (props) => {
    return (
        <div id="clouds">
            <div className={"cloud x1"}></div>
            <div className={"cloud x2"}></div>
            <div className={"cloud x3"}></div>
            <div className={"cloud x4"}></div>
            <div className={"cloud x5"}></div>
        </div>
    );
}

export default CloudsBackground;