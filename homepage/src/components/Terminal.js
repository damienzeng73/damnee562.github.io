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
                <a href='mailto:damnee562@gmail.com'>
                    <p>damnee562@gmail.com</p>
                </a>

                <Header as='h3'>Skills</Header>
                <p>[Programming Languages] - Python, JavaScript</p>
                <p>[Frontend Frameworks] - React</p>
                <p>[Backend Frameworks] - Django, Flask</p>
                <p>[Databases] - MySQL, PostgreSQL, sqlite3, MongoDB</p>
                <p>[VCS] - Git</p>
                <p>[Others] - Linux</p>

                <Header as='h3'>Experiences</Header>
                <p>-</p>
            </div>
        </Container>
    )
}


export default Terminal
