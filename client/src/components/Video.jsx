import React from 'react';

const Video = () => {
        return (
            <section className="container-fluid vidContainer">
                <div className="overlay"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" >
                    <source src="../video/short.mp4" type="video/mp4" />
                </video>
            </section>
        )
}

export default Video;