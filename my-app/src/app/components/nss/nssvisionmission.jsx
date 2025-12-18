import React from 'react'
import VisionMission from '../about/vision-mission';

function NssVisionMission({ visionMissionData: visionMissionDataProp }) {

    const visionMissionData = visionMissionDataProp ?? [
        {
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            visionTitle: "Vision",
            missionTitle: "Mission",
            visionText: "To inspire students to become disciplined and socially responsible citizens who make a real difference in society with unity.",
            missionText:
                "To encourage equality, diversity, and active participation in community-based programs and develop values like empathy, transparency, freedom, honesty, and respect.",
            imageAlt: "Vision and Mission",
            className: "",
            showImage: false,
        }
    ];

    return (
        <>
            <VisionMission data={visionMissionData} showImg={false} />
        </>
    )
}

export default NssVisionMission
