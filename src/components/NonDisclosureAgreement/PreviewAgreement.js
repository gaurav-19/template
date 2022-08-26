import React from "react";

function PreviewAgreement({ form }) {
    return (
        <div>
            <div className="h4">Preview Agreement</div>
            <h5>Disclosing Party Detials</h5>
            <p>Name: {form.disclosingPartyName}</p>
            <p>Mobile no: {form.disclosingPartyMobile}</p>
            <p>Email: {form.disclosingPartyEmail}</p>
            <p>Address: {form.disclosingPartyAddress}</p>

            <p>Receiving Party Detials</p>
            <p>Name: {form.receivingPartyName}</p>
            <p>Mobile no: {form.receivingPartyMobile}</p>
            <p>Email: {form.receivingPartyEmail}</p>
            <p>Address: {form.receivingPartyAddress}</p>
        </div>
    )
}

export default PreviewAgreement;