import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sb from './start_boot.jsx'
import NAV1 from './nav1.jsx'
import P1 from './PORT.jsx'
import CO1 from './Cl.jsx'
import AB1 from './ABOUT.jsx'
import FL1 from './FL.jsx'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NAV1 />
    <Sb />
    <P1 />
    <AB1 />
    <CO1 />
    <FL1 />
    
  </StrictMode>,
)
