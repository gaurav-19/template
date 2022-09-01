import React, { useState } from "react";

import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";

function MainComponent() {

    const [step, setStep] = useState(0);

    var doc = {
        _id: 101,
        component: [
            { cid: 2, Component1: "" },
            { cid: 3, Component3: "" },
            { cid: 5, Component5: "" },
        ]
    }

    function getComponents(doc) {
        var displayComponent = doc.component.map((ele, index) => {
            switch (ele.cid) {
                case 1:
                    return (<Component1 key={index} />)
                case 2:
                    return (<Component2 key={index} />)
                case 3:
                    return (<Component3 key={index} />)
                case 4:
                    return (<Component4 key={index} />)
                case 5:
                    return (<Component5 key={index} />)
                default:
                    return <p>no such component</p>
            }
        })
        return displayComponent;
    }

    function goToNextStep() {
        setStep(prevStep => {
            return prevStep + 1
        });
    }

    function goToPrevStep() {
        setStep(prevStep => {
            return prevStep - 1;
        });
    }

    const component = getComponents(doc).map((ele, index) => {
        if (index === step)
            return ele;
    }
    );

    const thumbnailViewer = component.map(function (element, index) {
        return (
            <div className='thumbnail' key={index} onClick={() => setStep(index)}>
                <p>Step {index + 1}</p>
            </div>)
            ;
    })

    return (
        <div className="container">
            <div className="row">

                {/* thumbnail */}
                <div className="col-md-3 m-3 bg-light">
                    {thumbnailViewer}
                </div>

                <div className="col-md-7 m-3 bg-light">

                    {/* component */}
                    {component}

                    {/* buttons  */}
                    {step > 0 &&
                        <button className="btn btn-outline-dark" onClick={goToPrevStep}>Back</button>}
                    {step < component.length - 1 &&
                        <button className="btn btn-primary" onClick={goToNextStep}>Next</button>}
                    {step === component.length - 1 &&
                        <button className="btn btn-success" onClick={() => alert('Submitted!')}>Submit</button>}

                </div>
            </div>
        </div>
    )
};

export default MainComponent;