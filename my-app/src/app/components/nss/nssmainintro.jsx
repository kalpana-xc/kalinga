import React from 'react'
import MainIntro from '@/app/components/about/main_intro'
import ResearchIntro from '../research-resources/research_intro'

function NssMainIntro() {
    return (
        <>
            <ResearchIntro
                title='About NSS at KU'
                subtitle="National Service Scheme"
                description={["The National Service Scheme has been promoted by the Sports Ministry & Youth Welfare Department, Government of India, and was initiated with the hope that the students engaged in higher education ought to have a sense of respect towards labour with self-motivated discipline The motto of NSS is “Not Me, But You”, which means putting the community’s needs before individual needs.",
                    "We have an active unit of 100 + NSS Volunteers, including both Boys and Girls. NSS at KU is a platform that proves our commitment to community engagement and social responsibility. It encourages students to actively participate in community service or social service activities. With initiatives like healthcare camps, environmental cleanliness and conservation, and educational projects in underprivileged areas, they develop a sense of responsibility and social awareness."
                ]}
                imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
                imageAlt="NSS"
            />
        </>
    )
}

export default NssMainIntro
