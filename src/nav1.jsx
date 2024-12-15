import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

export default function NAV1() {
    return (
        <>
            <nav className="navbar navp">
                <div className="container">
                    <a className="brand1">START BOOTSTAP</a>
                    <div className="d-flex" >
                        <button className=" brand2" >PORTFOLIO</button>
                        <button className=" brand2" >ABOUT</button>
                        <button className=" brand2" >CONTACT</button>

                    </div>
                </div>
            </nav>

        </>
    )
}


