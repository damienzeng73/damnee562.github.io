import React from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from '../components/Navbar'

class App extends React.Component {
    render() {
        return (
            <Container fluid>
                <Navbar />
            </Container>
        )
    }
}


export default App
