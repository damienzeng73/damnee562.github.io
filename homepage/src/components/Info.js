import React from 'react'
import { Header, Breadcrumb } from 'semantic-ui-react'

const Info = () => {
    return (
        <div>
            <Header>Damien Zeng</Header>
            <Breadcrumb>
                <Breadcrumb.Section>Blog</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section>Resume</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section>Portfolio</Breadcrumb.Section>
            </Breadcrumb>
        </div>
    )
}


export default Info
