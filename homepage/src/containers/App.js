import React from 'react'
import { Grid } from 'semantic-ui-react'

import './App.css'
import Info from '../components/Info'
import SocialMediaBar from '../components/SocialMediaBar'
import Terminal from '../components/Terminal'

class App extends React.Component {
    render() {
        return (
            <Grid id='main' columns={2} divided>
                <Grid.Row>
                    <Grid.Column className='info-section' width={6}>
                        <div className='info-wrapper'>
                            <div className='info'>
                                <Info />
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
        )
    }
}


export default App
