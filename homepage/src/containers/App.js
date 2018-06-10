import React from 'react'
import { Container } from 'semantic-ui-react'

import Footer from '../components/Footer'
import CC from '../components/CC'
import Main from './Main'

class App extends React.Component {
    render() {
        return (
            <Container fluid>
                <Main />
                <Footer />
                <CC />
            </Container>
        )
    }
}


export default App
