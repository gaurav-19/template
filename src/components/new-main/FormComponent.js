import React from "react";

function FormComponent(props) {

    var textarea = (
        <div className="mb-3">
            <label htmlFor="input" className="form-label">{props.placeholder}</label>
            <textarea className="form-control" id="input" rows="5" ></textarea>
        </div>
    );

    var checkbox = (
        <div className="mb-3">
            <input type="checkbox" id="input" />
            <label htmlFor="input">{props.placeholder}</label>
        </div>)

    var otherInput = (
        <div className="mb-3">
            <input type={props.type} className="form-control" placeholder={props.placeholder} />
        </div>
    );

    switch (props.type) {
        case "textarea": return textarea;
        case "checkbox": return checkbox;
        default: return otherInput;
    }
};

export default FormComponent;