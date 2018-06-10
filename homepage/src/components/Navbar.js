import React from 'react'
import classNames from 'classnames'
import { Container, Menu, Icon } from 'semantic-ui-react'

import './Navbar.css'

class Navbar extends React.Component {
    state = {
        customClass: ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll)
    }

    handleOnScroll = (e) => {
        e.preventDefault()

        let customClass = classNames({
            'small-nav': e.pageY > 0
        })
        this.setState({ customClass })
    }

    handleOpenMenu = (e) => {
        e.preventDefault()

        let customClass = classNames({
            'mobile': !this.state.customClass.includes('mobile'),
            'small-nav': this.state.customClass.includes('small-nav')
        })
        this.setState({ customClass })
    }

    render() {
        return (
            <Container id='navbar'>
                <Menu className={this.state.customClass} pointing secondary fluid stackable>
                    <Menu.Item header>
                        <h1>Damien</h1>
                        <a className='icon' href={null} onClick={this.handleOpenMenu}>
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
}


export default Navbar
