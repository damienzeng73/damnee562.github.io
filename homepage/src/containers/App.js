import React from 'react'
import { Container } from 'semantic-ui-react'

import Header from './Header'
import Main from './Main'
import Footer from '../components/Footer'
import CC from '../components/CC'

class App extends React.Component {
    render() {
        return (
            <Container fluid>
                <Header />
                <Main />
                <Footer />
                <CC />
            </Container>
        )
    }
}


export default App
