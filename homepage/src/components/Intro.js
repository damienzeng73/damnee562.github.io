import React from 'react'
import { Container, Header, Breadcrumb, Divider } from 'semantic-ui-react'

import './Intro.css'

const Intro = () => {
    return (
        <Container id='intro' fluid>
            <Header as='h1'>Damien Zeng</Header>
            <Breadcrumb size='large'>
                <Breadcrumb.Section link>Blog</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>Resume</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>Portfolio</Breadcrumb.Section>
            </Breadcrumb>

            <Divider />

            <pre>{`
              I'm a passionate web developer
            graduated from Yuan Ze University,
            familiar with Python and JavaScript
            programming language.
            `}</pre>
        </Container>
    )
}


export default Intro