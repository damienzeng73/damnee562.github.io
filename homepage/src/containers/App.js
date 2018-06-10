import React from 'react'
import { Container } from 'semantic-ui-react'

import Header from './Header'
import Footer from '../components/Footer'
import CC from '../components/CC'

class App extends React.Component {
    render() {
        return (
            <Container fluid>
                <Header />
                <Footer />
                <CC />
            </Container>
        )
    }
}


export default App
