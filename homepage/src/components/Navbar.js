import React from 'react'
import { Container, Header, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = (props) => {
    return (
        <Container id='navbar'>
            <Menu className={props.customClass} pointing secondary fluid stackable>
                <Menu.Item header>
                    <Header as='h1'>
                        <span>D</span>
                        <span>a</span>
                        <span>m</span>
                        <span>i</span>
                        <span>e</span>
                        <span>n</span>
                    </Header>
                    <a className='icon' href={null} onClick={props.handleOpenMenu}>
                        <Icon name='bars' size='large' />
                    </a>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        as={Link}
                        to='header'
                        spy={true}
                        smooth={true}
                        name='home'
                    />
                    <Menu.Item
                        as={Link}
                        to='experience'
                        spy={true}
                        smooth={true}
                        name='experience'
                    />
                    <Menu.Item
                        as={Link}
                        to='skills'
                        spy={true}
                        smooth={true}
                        name='skills'
                    />
                    <Menu.Item
                        as={Link}
                        to='footer'
                        spy={true}
                        smooth={true}
                        name='contactMe'
                    />
                </Menu.Menu>
            </Menu>
        </Container>
    )
}


export default Navbar
