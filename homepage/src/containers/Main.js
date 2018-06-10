import React from 'react'
import classNames from 'classnames'
import { Container } from 'semantic-ui-react'

import Navbar from '../components/Navbar'

import './Main.css'

class Main extends React.Component {
    state = {
        navbarClass: ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll)
    }

    handleOnScroll = (e) => {
        e.preventDefault()

        let navbarClass = classNames({
            'small-nav': e.pageY > 0
        })
        this.setState({ navbarClass })
    }

    handleOpenMenu = (e) => {
        e.preventDefault()

        let navbarClass = classNames({
            'mobile': !this.state.navbarClass.includes('mobile'),
            'small-nav': this.state.navbarClass.includes('small-nav')
        })
        this.setState({ navbarClass })
    }

    render() {
        return (
            <Container id='main' fluid>
                <Navbar
                    customClass={this.state.navbarClass}
                    handleOpenMenu={this.handleOpenMenu}
                />
            </Container>
        )
    }
}


export default Main
