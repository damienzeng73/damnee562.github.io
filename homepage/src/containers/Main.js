import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

import Experience from '../components/Experience'
import Skills from '../components/Skills'
import './Main.css'

class Main extends React.Component {
    render() {
        return (
            <Container id='main' fluid>
                <Experience />
                <Skills />
                <Divider horizontal>
                    <a href='https://drive.google.com/file/d/1H5RMRjwAet3_QN03WIgR2ht4g4lvRHkp/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Want to know more about me ?</a>
                </Divider>
            </Container>
        )
    }
}


export default Main
