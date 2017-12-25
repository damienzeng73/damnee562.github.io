import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import './Terminal.css'

const Terminal = () => {
    return (
        <Container id='terminal' fluid>
            <span className='machine'>damien@damien-MS-7982</span>
            <span className='colon'>:</span>
            <span className='path'>~</span>
            <span className='dollar'>$ </span>
            <span className='command'>echo profile</span>
            <span className='cursor'></span>

            <div className='profile'>
                <Header as='h2'>Damien's profile</Header>
                <Header as='h3'>Name</Header>
                <p>Damien Zeng</p>

                <Header as='h3'>Email</Header>
                <p>damnee562@gmail.com</p>
            </div>
        </Container>
    )
}


export default Terminal
