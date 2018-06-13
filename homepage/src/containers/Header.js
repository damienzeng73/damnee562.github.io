import React from 'react'
import classNames from 'classnames'
import { Container, Button } from 'semantic-ui-react'
import { Link, animateScroll } from 'react-scroll'

import Navbar from '../components/Navbar'

import './Header.css'

class Header extends React.Component {
    state = {
        navbarClass: '',
        showScrollToTopIcon: false
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
            'small-nav': window.scrollY > 0
        })
        this.setState({ navbarClass })

        if (window.scrollY > 800) {
            this.setState({ showScrollToTopIcon: true })
        } else {
            this.setState({ showScrollToTopIcon: false })
        }
    }

    handleOpenMenu = (e) => {
        e.preventDefault()

        let navbarClass = classNames({
            'mobile': !this.state.navbarClass.includes('mobile'),
            'small-nav': this.state.navbarClass.includes('small-nav')
        })
        this.setState({ navbarClass })
    }

    scrollToTop = () => {
        animateScroll.scrollToTop()
    }

    render() {
        return (
            <Container id='header' fluid>
                <Navbar
                    customClass={this.state.navbarClass}
                    handleOpenMenu={this.handleOpenMenu}
                />

                <Link className='scroll' activeClass='active' to='main' spy smooth>
                    <span className='scroll-icon'></span>
                    <span className='scroll-icon'></span>
                    <span className='scroll-icon'></span>
                    Scroll
                </Link>

                <Button
                    className={classNames('scroll-to-top-icon', {
                        'hide': !this.state.showScrollToTopIcon
                    })}
                    icon='angle up'
                    size='tiny'
                    circular={true}
                    onClick={this.scrollToTop}
                />    
            </Container>
        )
    }
}


export default Header
