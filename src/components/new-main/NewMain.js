import React, { useState } from "react";

import FormComponent from "./FormComponent";
import customerData from "./data/customerData";
import SubmittedFormDisplay from "./SubmittedFormDisplay";

function NewMain() {

    const [step, setStep] = useState(0);

    var doc = [
        {
            _pageId: 101,
            fields: [
                {
                    id: 2,
                    title: "Name",
                    type: "text"
                },
                {
                    id: 3,
                    title: "Email",
                    type: "email"
                },
                {
                    id: 5,
                    title: "Mobile",
                    type: "number"
                },
            ]
        },
        {
            _pageId: 102,
            fields: [
                {
                    id: 6,
                    title: "City",
                    type: "checkbox"
                },
                {
                    id: 7,
                    title: "State",
                    type: "password"
                },
                {
                    id: 8,
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

    function onSubmit(){
        var reslutForm = []; 

        doc.forEach(d => {
            d.fields.forEach(field => {
                var result = customerData.find(element => element._id === field.id);

                if(result){
                    reslutForm.push( 
                        { title: field.title,
                        value: result.value }
                     );
                }

            });
    });
        console.log(reslutForm);
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
                        <button className="btn btn-success" onClick={ onSubmit }>Submit</button>}

                </div>
            </div>
        </div>
    )
};

export default NewMain;