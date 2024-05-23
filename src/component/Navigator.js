import React from 'react'
import "./IpoList.css"
import { useNavigate } from 'react-router-dom'
const Navigator = ({ dataProps }) => {
    const navigate = useNavigate()
    const backtoHomePage = () => {
        navigate("/home")
    }
    return (
        <>
            <div className='headerDetailsMain'>
                <div className='firstDiv' >
                    <div className='backButton' onClick={backtoHomePage}>
                        {`<`}
                    </div>
                    <div >

                        <div style={{ display: "flex", width: "105%", justifyContent: "space-between" }}>
                            <div>

                                <img className='circular-image' src={dataProps[0].photo} />
                            </div>
                            <div>

                                <div className='font'><b>{dataProps[0].headingName}</b></div>
                                <div className='fontBelow'>{dataProps[0].name}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='secondDiv'>
                    <div className='backButton'>&#8595;</div>
                    <div className='applyNow'>Apply Now</div>
                </div>
            </div >
        </>
    )
}

export default Navigator
