import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import pic1 from './assets/cabin.png'
import pic2 from './assets/cake.png'
import pic3 from './assets/circus.png'
import pic4 from './assets/game.png'
import pic5 from './assets/safe.png'
import pic6 from './assets/submarine.png'

<assets />

export default function P1() {
    return (
        <>
         <div className='PORTFOLIO'> 
            <div className='container c1'>
                <div className='row'>
                    <h1 className='p22 row2'>PORTFOLIO</h1>
                </div>
                <div className='row '><h1 className='p22 row22'>___________________</h1></div>
                <div className='row '>
                    <div className='col-md-4'>
                        <img src={pic1} alt='react logo' className='img-fluid img1' />
                    </div>
                    <div className='col-md-4'>
                        <img src={pic2} alt='vite logo' className='img-fluid img1' />
                    </div>
                    <div className='col-md-4'>
                        <img src={pic3} alt='placeholder' className='img-fluid img1' />
                    </div>


                </div>
                <div className='row'>
                <div className='col-md-4'>
                        <img src={pic4} alt='react logo' className='img-fluid img1' />
                    </div>
                    <div className='col-md-4'>
                        <img src={pic5} alt='vite logo' className='img-fluid img1' />
                    </div>
                    <div className='col-md-4'>
                        <img src={pic6} alt='placeholder' className='img-fluid img1' />
                    </div>
                </div>

            </div>

         </div>

        </>
    )
}


