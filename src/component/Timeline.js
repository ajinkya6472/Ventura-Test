import React from 'react'
import "./IpoList.css"
const Timeline = () => {

    const steps = [
        { id: 1, detail: "Bidding starts", date: "12 Dec 2023" },
        { id: 2, detail: "Bidding ends", date: "15 Dec 2023" },
        { id: 3, detail: "Allotment finalization", date: "18 Dec 2023" },
        { id: 4, detail: "Refund initiation", date: "18 Dec 2023" },
        { id: 5, detail: "Demat transfer", date: "18 Dec 2023" },
        { id: 6, detail: "Listing date", date: "21 Dec 2023" },
    ]
    return (
        <div className='ipoDetailsMain'>
            <h4 style={{ textAlign: "start", fontSize: "22px", marginTop: "10px", padding: "0px", fontFamily: "Sora" }}><b>IPO timeline</b></h4>
            <div className='timeline'>
                {steps.map((step, index) => {
                    return <>
                        <div key={index} className='step'>
                            <div className='greenCircle'>
                                <span className='checkmark'>&#10003;</span>
                            </div>
                            <div>
                                <div className='timelinefont'><b>{step.detail}</b></div>
                                <div style={{ textAlign: "start" }} className='fontBelow'>{step.date}</div>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>
    )
}

export default Timeline
