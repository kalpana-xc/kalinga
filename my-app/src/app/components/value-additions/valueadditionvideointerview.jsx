import React from 'react'
import MediaCardSlider from '@/app/components/general/media-card-slider';

function Valueadditionvideointerview() {
    const videoItems = [
        {
            id: 1,
            name: "Sangita Jana",
            description: "BSc Forensic Science",
            videoUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_e260bdb8-0152-4a83-93bd-fc33bb794b02.mp4",
            thumbnail:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_e260bdb8-0152-4a83-93bd-fc33bb794b02.mp4",
        },
        {
            id: 2,
            name: "Debraj Debnath",
            description: "B.Tech CS",
            videoUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
            thumbnail:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_5112c405-c05e-42cd-a9f2-6f043d3d2181.mp4",
        },
        {
            id: 3,
            name: "Surya Kumar Srivastava",
            description: "B.Tech CS (AIML)",
            videoUrl:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
            thumbnail:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Value-Added-Courses/VIDEO_8b1b9390-247c-4ca7-b120-29a1e6e2d85d.mp4",
        },
    ];
    return (
        <>
            <MediaCardSlider
                categoryTitle="Video Interviews"
<<<<<<< Updated upstream
                title="Alumni Talk"
=======
                title=""
>>>>>>> Stashed changes
                videoItems={videoItems}
                cardBgClass="bg-white"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
            />
        </>
    )
}

export default Valueadditionvideointerview