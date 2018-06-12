import React from 'react'
import { Container, Header, Progress } from 'semantic-ui-react'

import './Skills.css'

const Skills = () => {
    return (
        <Container id='skills' fluid>
            <div className='picture'></div>
            <div className='ability-wrapper'>
                <div className='ability'>
                    <Header as='h1'>My Skills</Header>
                    <p>I'm a professional.</p>

                    <span>Python</span>
                    <Progress percent={95} size='tiny' color='blue' active />
                    <span>JavaScript</span>
                    <Progress percent={90} size='tiny' color='blue' active />
                    <span>Passion</span>
                    <Progress percent={100} size='tiny' color='blue' active />
                </div>
            </div>
        </Container>
    )
}


export default Skills
