import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Particles from 'react-particles-js'

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

                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 80,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: '#fff'
                            },
                            shape: {
                                type: 'circle',
                                stroke: {
                                    width: 0,
                                    color: '#000'
                                },
                                polygon: {
                                    nb_sides: 5
                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: '#fff',
                                opacity: 0.4,
                                width: 1,
                                shadow: {
                                    enable: true,
                                    color: '#3CA9D1',
                                    blur: 5
                                }
                            },
                            move: {
                                enable: true,
                                speed: 3,
                                direction: 'none',
                                random: false,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: 'grab'
                                },
                                onclick: {
                                    enable: true,
                                    mode: 'push'
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 200,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgb(47, 54, 81)'
                    }}
                />
            </Container>
        )
    }
}


export default App
