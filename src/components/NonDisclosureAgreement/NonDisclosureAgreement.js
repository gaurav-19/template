import React, { useState } from 'react';

import DisclosingPartyDetials from './DisclosingPartyDetials';
import ReceivingPartyDetials from './ReceivingPartyDetails';
import PreviewAgreement from './PreviewAgreement';


function NonDisclosureAgreement() {
    let initialData = {
        step: 1,
        disclosingPartyName: "",
        disclosingPartyMobile: "",
        disclosingPartyEmail: "",
        disclosingPartyAddress: "",
        receivingPartyName: "",
        receivingPartyMobile: " ",
        receivingPartyEmail: "",
        receivingPartyAddress: ""
    }

    const [step, setStep] = useState(0);
    const [form, setForm] = useState(initialData);

    const currentStep = [
        {
            component: <DisclosingPartyDetials form={form} setForm={setForm} />
        },
        {
            component: <ReceivingPartyDetials form={form} setForm={setForm} />
        },
        {
            component: <PreviewAgreement form={form} setForm={setForm} />
        }
    ];

    const thumbnailViewer = currentStep.map(function (element, index) {
        return (
            <div className='thumbnail' onClick={() => setStep(index)}>
                <p>Step {index + 1}</p>
            </div>)
            ;
    })

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
        <div className='container'>
            <div className='h2'>Non Disclosure Agreement</div>
            <div class="row">
                <div class="col-md-3 m-3 bg-light">
                    {thumbnailViewer}
                </div>
                <div class="col-md-7 m-3 bg-light">
                    {currentStep[step].component}
                    {step > 0 &&
                        <button className="btn btn-outline-dark" onClick={goToPrevStep}>Back</button>}
                    {step < currentStep.length - 1 &&
                        <button className="btn btn-primary" onClick={goToNextStep}>Next</button>}
                    {step === currentStep.length - 1 &&
                        <button className="btn btn-success" onClick={() => alert('Submitted!')}>Submit</button>}
                </div>
            </div>
        </div>
    )
}

export default NonDisclosureAgreement;


// function currentStep(){
    //     switch (form.step) {
    //         case 1:
    //           return (
    //             <DisclosingPartyDetials form={form} setForm={setForm} nextStep={nextStep}/>
    //           )
    //         case 2:
    //           return (
    //             <ReceivingPartyDetials form={form} setForm={setForm} nextStep={nextStep} prevStep={prevStep}/>
    //           )
    //         case 3:
    //           return (
    //             <PreviewAgreement form={form} setForm={setForm} prevStep={prevStep}/>
    //           )
    //         default:
    //            // do nothing
    //       }
    // }