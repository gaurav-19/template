import React from "react";

function DisclosingPartyDetials({ form, setForm }) {

    return (
        <div>
            <div className="h4">Disclosing Party Detials</div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" value={form.disclosingPartyName}
                    onChange={(event) => {
                        setForm(prevForm => {
                            return {
                                ...prevForm, disclosingPartyName: event.target.value
                            }
                        })
                    }} />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" placeholder="Mobile no." value={form.disclosingPartyMobile}
                    onChange={(event) => {
                        setForm(prevForm => {
                            return {
                                ...prevForm, disclosingPartyMobile: event.target.value
                            }
                        })
                    }} />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" value={form.disclosingPartyEmail}
                    onChange={(event) => {
                        setForm(prevForm => {
                            return {
                                ...prevForm, disclosingPartyEmail: event.target.value
                            }
                        })
                    }} />
            </div>
            <div className="mb-3">
                <input type="textarea" className="form-control" placeholder="Address" value={form.disclosingPartyAddress}
                    onChange={(event) => {
                        setForm(prevForm => {
                            return {
                                ...prevForm, disclosingPartyAddress: event.target.value
                            }
                        })
                    }} />
            </div>
        </div>
    )
}

export default DisclosingPartyDetials;

    // function onChangeHandler(event) {
    //     setForm(prevForm => {
    //         return {
    //             ...prevForm, [event.target.name]: event.target.value
    //         }
    //     })
    // }