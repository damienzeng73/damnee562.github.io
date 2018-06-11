import React from 'react'
import { Container } from 'semantic-ui-react'

import Experience from '../components/Experience'

class Main extends React.Component {
    render() {
        return (
            <Container id='main' fluid>
                <Experience />
            </Container>
        )
    }
}


export default Main
