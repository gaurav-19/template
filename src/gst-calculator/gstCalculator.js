import React from "react";

function GstCalculator() {
    // used to calculate GST
    const [gst, setGst] = React.useState("gstExclusive");
    const [cost, setCost] = React.useState(0);
    const [rate, setRate] = React.useState(3);

    // used for showing results
    const [gstCost, setGstCost] = React.useState(0);
    const [totalCost, setTotalCost] = React.useState(0);

    function calculateGST() {
        var gstAmount = 0;
        var totalAmount = 0;

        if (gst === "gstExclusive") {
            totalAmount = cost * (1 + rate / 100);
            gstAmount = totalAmount - cost;
        }
        else {
            totalAmount = cost / (1 + rate / 100);
            gstAmount = cost - totalAmount;
        }

        setGstCost(gstAmount);
        setTotalCost(totalAmount);
    };

    return (
        <form>
            <div className="row">
                <h1>GST CALCULATOR</h1>

                <div className="border row col-md-5 m-3 bg-light">
                    {/* GST Inclusive/Exclusive */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadio" value="gstExclusive" checked={gst === "gstExclusive"} onChange={e => setGst(e.target.value)} />GST Exclusive
                    </div>
                    <div className="form-check form-check-inline" >
                        <input className="form-check-input" type="radio" name="inlineRadio" value="gstInclusive" checked={gst === "gstInclusive"} onChange={e => setGst(e.target.value)} />GST Inclusive
                    </div>

                    {/* Cost of goods/services */}
                    <h5>Cost of Goods/Services</h5>
                    <input type="number" className="form-control"
                        value={cost} onChange={e => setCost(e.target.value)} />

                    {/* GST rate */}
                    <h5>Select GST rate</h5>
                    <div>
                        <select
                            value={rate}
                            onChange={e => setRate(e.target.value)}>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="12">12</option>
                            <option value="18">18</option>
                            <option value="28">28</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={calculateGST}>Calculate</button>
                </div>

                {/* result */}
                <div className="border col-md-5 m-3 bg-light">
                    <p>GST amount: {gstCost}</p>
                    <p>Total amount: {totalCost}</p>
                </div>
            </div>
        </form>
    );
};

export default GstCalculator;