import React from "react";

function ReceivingPartyDetials({ form, setForm }) {
    return (
        <div>
            <div className="h4">Receiving Party Detials</div>
            <div className="mb-3">
                <input className="form-control" type="text" placeholder="Name" value={form.receivingPartyName}
                    onChange={(event) => {
                        setForm({
                            ...form, receivingPartyName: event.target.value
                        })
                    }} />
            </div>
            <div className="mb-3">
                <input className="form-control" type="number" placeholder="Mobile no." value={form.receivingPartyMobile}
                    onChange={(event) => {
                        setForm({
                            ...form, receivingPartyMobile: event.target.value
                        })
                    }} />
            </div>
            <div className="mb-3">
                <input className="form-control" type="email" placeholder="Email" value={form.receivingPartyEmail}
                    onChange={(event) => {
                        setForm({
                            ...form, receivingPartyEmail: event.target.value
                        })
                    }} />
            </div>
            <div className="mb-3">
                <input className="form-control" type="textarea" placeholder="Address" value={form.receivingPartyAddress}
                    onChange={(event) => {
                        setForm({
                            ...form, receivingPartyAddress: event.target.value
                        })
                    }} />
            </div>
        </div>
    )
}

export default ReceivingPartyDetials;