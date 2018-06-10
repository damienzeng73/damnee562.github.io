import React from 'react'
import { Container } from 'semantic-ui-react'

import SocialMediaBar from './SocialMediaBar'
import './Footer.css'

const Footer = () => {
    return (
        <Container id='footer' fluid>
            <div className='about-me'>
                <h4>About Damien</h4>
                <span>3F., No.820, Chunri Rd.</span>
                <span>Taoyuan Dist., Taoyuan City 330</span>
                <span>TAIWAN (R.O.C)</span>
                <a href="mailto:damnee562@gmail.com?subject=Mail from Damien's site">
                    damnee562@gmail.com
                </a>
            </div>

            <div className='social-media'>
                <h4>Follow me</h4>
                <SocialMediaBar />
            </div>
        </Container>
    )
}


export default Footer
