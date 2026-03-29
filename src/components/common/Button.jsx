import React from 'react'
import Icons from './Icons'

const Button = ({ text, className, icon }) => {
    return (
        <div><button className={`cursor-pointer ${className}`}><Icons icon={icon} /> {text}</button></div>
    )
}

export default Button