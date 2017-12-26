import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import './App.css'
import Intro from '../components/Intro'
import SocialMediaBar from '../components/SocialMediaBar'
import Terminal from '../components/Terminal'

class App extends React.Component {
    render() {
        return (
            <Container id='main-wrapper' fluid>
                <Grid id='main' columns={2} divided container>
                    <Grid.Row>
                        <Grid.Column className='intro-section' width={6}>
                            <div className='intro-wrapper'>
                                <div>
                                    <Intro />
                                    <SocialMediaBar />
                                </div>
                            </div>
                        </Grid.Column>

                        <Grid.Column className='terminal-section' width={10}>
                            <div className='terminal-wrapper'>
                                <Terminal />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}


export default App
