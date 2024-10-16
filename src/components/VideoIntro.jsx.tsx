import React from 'react';

const VideoIntro: React.FC<{ onVideoEnd: () => void }> = ({ onVideoEnd }) => {
    return (
        <div>
            <video
                width="100%"
                controls
                onEnded={onVideoEnd} // Trigger onVideoEnd when the video ends
            >
                <source src="../../public/video/quiz-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoIntro;
