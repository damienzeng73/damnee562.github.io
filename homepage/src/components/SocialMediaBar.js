import React from 'react'
import { Container, Button } from 'semantic-ui-react'

import './SocialMediaBar.css'

const SocialMediaBar = () => {
    return (
        <Container id='social-media-bar' fluid>
            <a href='https://www.facebook.com/profile.php?id=100003107661326' target='_blank' rel='noopener noreferrer'>
                <Button circular color='facebook' icon='facebook f' />
            </a>

            <a href='https://twitter.com/damnee562' target='_blank' rel='noopener noreferrer'>
                <Button circular color='twitter' icon='twitter' />
            </a>

            <a href='https://www.instagram.com/damienzeng6134/' target='_blank' rel='noopener noreferrer'>
                <Button circular color='instagram' icon='instagram' />
            </a>

            <a href='https://www.linkedin.com/in/damien-zeng-56920a145/' target='_blank' rel='noopener noreferrer'>
                <Button circular color='linkedin' icon='linkedin' />
            </a>

            <a href='https://github.com/damnee562' target='_blank' rel='noopener noreferrer'>
                <Button circular color='black' icon='github' />
            </a>
        </Container>
    )
}


export default SocialMediaBar
