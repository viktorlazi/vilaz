import React from 'react'
import './contact.css'
import 'fontawesome'

export const Contact = () => {
    return (
        <div className="homeContact">
            <ul>
                <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <a className="telephoneNumber">+385 12 3456789</a>
                </li>
                <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <a className="email">info@vilaz.com</a>
                </li>
            </ul>
        </div>
    )
}
