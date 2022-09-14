import React, { useState } from "react";

import FormComponent from "./FormComponent";

function NewMain() {

    const [step, setStep] = useState(0);

    var doc = [
        {
            _id: 101,
            fields: [
                {
                    cid: 2,
                    title: "Name",
                    type: "text"
                },
                {
                    cid: 3,
                    title: "Email",
                    type: "email"
                },
                {
                    cid: 5,
                    title: "Mobile",
                    type: "number"
                },
            ]
        },
        {
            _id: 102,
            fields: [
                {
                    cid: 2,
                    title: "City",
                    type: "checkbox"
                },
                {
                    cid: 3,
                    title: "State",
                    type: "password"
                },
                {
                    cid: 5,
                    title: "Country",
                    type: "textarea"
                },
            ]
        }
    ]

    var component = doc[step].fields.map(element => {
        return (
            <FormComponent key={element.cid} placeholder={element.title} type={element.type}/>
        )
    });

    const thumbnailViewer = doc.map(function (element, index) {
        return (
            <div className='thumbnail' key={index} onClick={() => setStep(index)}>
                <p>Step {index + 1}</p>
            </div>)
            ;
    });

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
                    {step < doc.length - 1 &&
                        <button className="btn btn-primary" onClick={goToNextStep}>Next</button>}
                    {step === doc.length - 1 &&
                        <button className="btn btn-success" onClick={() => alert('Submitted!')}>Submit</button>}

                </div>
            </div>
        </div>
    )
};

export default NewMain;