import React from "react";
import MediaCardSlider from "@/app/components/general/media-card-slider";

const getYouTubeId = (url) => {
    if (!url) return "";

    if (url.includes("youtube.com/shorts/")) {
        return url.split("youtube.com/shorts/")[1].split("?")[0].split("&")[0];
    }
    if (url.includes("youtu.be/")) {
        return url.split("youtu.be/")[1].split("?")[0].split("&")[0];
    }
    if (url.includes("youtube.com/watch?v=")) {
        return url.split("v=")[1].split("&")[0];
    }
    if (url.includes("youtube.com/embed/")) {
        return url.split("youtube.com/embed/")[1].split("?")[0].split("&")[0];
    }

    return "";
};

// ✅ Convert shorts → watch?v= (so MediaCardSlider's embed converter can handle it)
const normalizeYouTubeUrl = (url) => {
    const id = getYouTubeId(url);
    if (!id) return url;
    return `https://www.youtube.com/watch?v=${id}`;
};

const getYouTubeThumb = (url) => {
    const id = getYouTubeId(url);
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
};

function Valueadditionvideointerview() {
    const ytLinks = [
        "https://www.youtube.com/shorts/x9PulcmUk8k",
        "https://www.youtube.com/shorts/hpwxIgcmMcI",
        "https://www.youtube.com/shorts/bA4ymP6VNl4",
        "https://www.youtube.com/shorts/ReTwYJyXiSo",
        "https://www.youtube.com/shorts/Pdc9Wwyzcc8",
    ];

    const videoItems = ytLinks.map((link, idx) => ({
        id: idx + 1,
        title: "",
        subtitle: "",
        description: "",
        videoUrl: normalizeYouTubeUrl(link),  // ✅ IMPORTANT
        thumbnail: getYouTubeThumb(link),      // ✅ IMPORTANT
    }));

    return (
        <>
            <style jsx global>{`
        @media (max-width: 640px) {
          .ccrc-video-slider img {
            object-fit: contain !important;
            background: #fff !important;
          }
          .ccrc-video-slider video {
            height: 380px !important;
            object-fit: contain !important;
            background: #fff !important;
          }
          .ccrc-video-slider [style*="background-image"] {
            background-size: contain !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-color: #fff !important;
          }
        }
      `}</style>

            <MediaCardSlider
                categoryTitle=""
                title="Their Experience Can Become Your Inspiration"
                videoItems={videoItems}
                cardBgClass="bg-white"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
            />
        </>
    );
}

export default Valueadditionvideointerview;
