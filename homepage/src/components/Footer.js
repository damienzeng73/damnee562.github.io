import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import SocialMediaBar from './SocialMediaBar'
import './Footer.css'

const Footer = () => {
    return (
        <Container id='footer' fluid>
            <div className='about-me'>
                <Header as='h4'>About Damien</Header>
                <span>3F., No.820, Chunri Rd.</span>
                <span>Taoyuan Dist., Taoyuan City 330</span>
                <span>TAIWAN (R.O.C)</span>
                <a href="mailto:damnee562@gmail.com?subject=Mail from Damien's site">
                    damnee562@gmail.com
                </a>
            </div>

            <div className='social-media'>
                <Header as='h4'>Follow me</Header>
                <SocialMediaBar />
            </div>
        </Container>
    )
}


export default Footer
