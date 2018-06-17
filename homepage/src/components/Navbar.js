import React from 'react'
import { Container, Header, Menu } from 'semantic-ui-react'
import { Link } from 'react-scroll'
import classNames from 'classnames'

import './Navbar.css'
import '../assets/hamburgers.css'

const Navbar = (props) => {
    const hamburgerClass = classNames('hamburger', 'hamburger--emphatic', {
        'is-active': props.hamburgerActive
    })

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

                    <button className={hamburgerClass} type='button' onClick={props.handleOpenMenu}>
                        <span className='hamburger-box'>
                            <span className='hamburger-inner'></span>
                        </span>
                    </button>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        as={Link}
                        to='header'
                        spy={true}
                        smooth={true}
                        name='home'
                        onSetActive={props.handleSetActive}
                    />
                    <Menu.Item
                        as={Link}
                        to='experience'
                        spy={true}
                        smooth={true}
                        name='experience'
                        onSetActive={props.handleSetActive}
                    />
                    <Menu.Item
                        as={Link}
                        to='skills'
                        spy={true}
                        smooth={true}
                        name='skills'
                        onSetActive={props.handleSetActive}
                    />
                    <Menu.Item
                        as={Link}
                        to='footer'
                        spy={true}
                        smooth={true}
                        name='contactMe'
                        onSetActive={props.handleSetActive}
                    />
                </Menu.Menu>
            </Menu>
        </Container>
    )
}


export default Navbar
