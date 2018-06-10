import React from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CC from '../components/CC'

class App extends React.Component {
    render() {
        return (
            <Container fluid>
                <Navbar />
                <Footer />
                <CC />
            </Container>
        )
    }
}


export default App
