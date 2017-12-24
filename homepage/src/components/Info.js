import React from 'react'
import { Container, Header, Breadcrumb } from 'semantic-ui-react'

import './Info.css'

const Info = () => {
    return (
        <Container id='info' fluid>
            <Header as='h1'>Damien Zeng</Header>
            <Breadcrumb>
                <Breadcrumb.Section>Blog</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section>Resume</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section>Portfolio</Breadcrumb.Section>
            </Breadcrumb>
        </Container>
    )
}


export default Info
