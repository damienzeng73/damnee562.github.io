import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

import Experience from '../components/Experience'
import Skills from '../components/Skills'

class Main extends React.Component {
    render() {
        return (
            <Container id='main' fluid>
                <Experience />
                <Skills />
                <Divider hidden />
            </Container>
        )
    }
}


export default Main
