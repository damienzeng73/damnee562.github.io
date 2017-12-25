import React from 'react'
import { Container } from 'semantic-ui-react'

import './Terminal.css'

const Terminal = () => {
    return (
        <Container id='terminal' fluid>
            <span className='machine'>damien@damien-MS-7982</span>
            <span className='colon'>:</span>
            <span className='path'>~</span>
            <span className='dollar'>$ </span>
            <span className='command'>echo profile</span>
            <span className='cursor'></span>
        </Container>
    )
}


export default Terminal
