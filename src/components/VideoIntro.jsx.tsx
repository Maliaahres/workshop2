import React from 'react';
import styled from "styled-components";

const VideoWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center; /* To center the text inside the wrapper */
`;

const VideoIntro: React.FC<{ onVideoEnd: () => void }> = ({ onVideoEnd }) => {
    return (
        <VideoWrapper>

            <video width="100%" controls onEnded={onVideoEnd}>
                <source src="public/video/quiz-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </VideoWrapper>
    );
};

export default VideoIntro;
