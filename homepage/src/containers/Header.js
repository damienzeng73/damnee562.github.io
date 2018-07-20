import React from 'react'
import classNames from 'classnames'
import { Container, Button } from 'semantic-ui-react'
import { Link, animateScroll } from 'react-scroll'

import Navbar from '../components/Navbar'

import './Header.css'

class Header extends React.Component {
    state = {
        navbarClass: 'mobile',
        hamburgerActive: false,
        showScrollToTopIcon: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll)
        window.addEventListener('resize', this.handleOnResize)

        if (window.innerWidth > 768) {
            this.setState({ navbarClass: '' })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll)
        window.removeEventListener('resize', this.handleOnResize)
    }

    handleOnScroll = (e) => {
        e.preventDefault()

        let navbarClass = classNames({
            'small-nav': window.scrollY > 0,
            'mobile': this.state.navbarClass.includes('mobile')
        })
        this.setState({ navbarClass })

        if (window.scrollY > 800) {
            this.setState({ showScrollToTopIcon: true })
        } else {
            this.setState({ showScrollToTopIcon: false })
        }
    }

    handleOnResize = (e) => {
        e.preventDefault()

        let navbarClass = classNames({
            'mobile': window.innerWidth <= 768,
            'small-nav': this.state.navbarClass.includes('small-nav')
        })
        this.setState({ navbarClass })
    }

    handleOpenMenu = (e) => {
        e.preventDefault()

        let navbarClass = classNames({
            'open': !this.state.navbarClass.includes('open'),
            'mobile': this.state.navbarClass.includes('mobile'),
            'small-nav': this.state.navbarClass.includes('small-nav')
        })
        this.setState({ navbarClass, hamburgerActive: !this.state.hamburgerActive })
    }

    handleSetActive = () => {
        this.setState({ hamburgerActive: false })
    }

    scrollToTop = () => {
        animateScroll.scrollToTop()
    }

    render() {
        return (
            <Container id='header' fluid>
                <Navbar
                    customClass={this.state.navbarClass}
                    hamburgerActive={this.state.hamburgerActive}
                    handleOpenMenu={this.handleOpenMenu}
                    handleSetActive={this.handleSetActive}
                />

                <Link className='scroll' activeClass='active' to='main' spy smooth>
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
