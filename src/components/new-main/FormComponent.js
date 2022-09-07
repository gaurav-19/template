import React from "react";

function FormComponent(props) {

    function onChangeHandler(event){
        console.log(event.target.value);
    }

    return (<>
        <div className="mb-3">
            <label htmlFor="input" className="form-label">{props.placeholder}</label>
            <textarea className="form-control" id="input" rows="5"  value={props.value} onChange={ onChangeHandler }></textarea>
        </div>
    </>
    )
};

export default FormComponent;