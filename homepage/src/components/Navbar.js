import React from 'react'
import classNames from 'classnames'
import { Container, Menu, Icon, Image, Popup } from 'semantic-ui-react'

import letterD from '../assets/letter-d.png'
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
        const cc = <div>Icons made by <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>

        return (
            <Container id='navbar'>
                <Menu className={this.state.customClass} pointing secondary fluid stackable>
                    <Menu.Item header>
                        <Popup trigger={<Image src={letterD} />} size='mini'>
                            <Popup.Content>
                                {cc}
                            </Popup.Content>
                        </Popup>
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
