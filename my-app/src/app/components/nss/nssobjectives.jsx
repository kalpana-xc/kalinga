'use client'

import React from 'react'
import ImageListItem from '../ccrc/imagelistitem';

function NssObjectives() {
    const Items = [
        {
            id: 1,
            text: "To understand the community in which they will work"
        },
        {
            id: 2,
            text: "To identify the problems of that community and make efforts to solve them"
        },
        {
            id: 3,
            text: "To develop a sense of social and civic responsibility"
        },
        {
            id: 4,
            text: "To utilise the volunteer’s knowledge and come up with collective solutions to individual and community problems"
        },
        {
            id: 5,
            text: "To develop a capacity to deal with natural disasters or emergencies"
        },
        {
            id: 6,
            text: "To build skills that encourage active people's participation"
        },
        {
            id: 7,
            text: "To practice national integration and social harmony"
        },
        {
            id: 8,
            text: "To develop leadership and fair decision-making skills"
        }
    ];

    return (
        <>
            <ImageListItem items={Items} title='NSS Objectives' />
        </>
    )
}   

export default NssObjectives
