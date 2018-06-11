import React from 'react'
import { Container } from 'semantic-ui-react'

import './Experience.css'

const Experience = () => {
    return (
        <Container id='experience'>
            <ul className='timeline'>
                <li className='timeline-item'>
                    <div className='timeline-info'>
                        <span>JUN 2018 - PRESENT</span>
                    </div>
                    <div className='timeline-marker'></div>
                    <div className='timeline-content'>
                        <h3>Software Engineer</h3>
                        <span>
                            <b>Omniscient Cloud Technologies, INC.</b>
                        </span>
                    </div>
                </li>

                <li className='timeline-item'>
                    <div className='timeline-info'>
                        <span>JAN 2016 - JUL 2017</span>
                    </div>
                    <div className='timeline-marker'></div>
                    <div className='timeline-content'>
                        <h3>Research Assistant (Internship)</h3>
                        <span>
                            <b>Genomic Medicine Core Laboratory, CGMH. Linkou</b>
                        </span>
                    </div>
                </li>

                <li className='timeline-item'>
                    <div className='timeline-info'>
                        <span>SEP 2013 - JUN 2017</span>
                    </div>
                    <div className='timeline-marker'></div>
                    <div className='timeline-content'>
                        <h3>Bachelor's Degree in Information Management</h3>
                        <span>
                            <b>Yuan Ze University</b>
                        </span>
                    </div>
                </li>
            </ul>
        </Container>
    )
}


export default Experience
