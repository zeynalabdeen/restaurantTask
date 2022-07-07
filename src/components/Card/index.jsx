import React from 'react'
import './style.css'
const Card = ({ icon, value, valueName }) => {
    return (
        <div id='Card'>
            <div className="icon">
                {icon}
            </div>
            <div className="content">
                <h4 className="value">
                    {value}
                </h4>
                <p className="valueName">
                    {valueName}
                </p>
            </div>
        </div>
    )
}

export default Card