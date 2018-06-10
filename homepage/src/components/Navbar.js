import React from 'react'
import { Container, Header, Menu, Icon } from 'semantic-ui-react'

import './Navbar.css'

const Navbar = (props) => {
    return (
        <Container id='navbar'>
            <Menu className={props.customClass} pointing secondary fluid stackable>
                <Menu.Item header>
                    <Header as='h1'>Damien</Header>
                    <a className='icon' href={null} onClick={props.handleOpenMenu}>
                        <Icon name='bars' size='large' />
                    </a>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>Home</Menu.Item>
                    <Menu.Item>Experience</Menu.Item>
                    <Menu.Item>Skills</Menu.Item>
                    <Menu.Item>Contact me</Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    )
}


export default Navbar
