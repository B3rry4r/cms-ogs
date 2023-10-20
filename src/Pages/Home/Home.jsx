import React, { useEffect, useState } from 'react';
import './Home.scss'
import video from '../../Assets/3.mp4'
import gsap from 'gsap';
import Loader from '../../Components/Loader/Loader';
import president from '../../Assets/6.jpg';
import { slides, slides4 } from '../../Components/ImageData/ImageData';
import CarouselMarquee from '../../Components/Marquee/Marquee';
import UniqueCarousel from '../../Components/UniqueCarousel/UniqueCarousel';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }

        return () => {
            document.body.classList.remove('disable-scroll');
        };
    }, [isLoading]);


    useEffect(() => {
        const preloadVideo = async () => {
            // await new Promise((resolve) => setTimeout(resolve, 4000))
            try {
                const videoElement = document.createElement('video');
                videoElement.src = video;
                videoElement.load();
                videoElement.addEventListener('loadeddata', handleVideoLoad);
            } catch (error) {
                console.error('Error preloading video:', error);
                setIsLoading(false); // Handle any error and set isLoading to false
            }
        };

        preloadVideo();
    }, []);

    const handleVideoLoad = () => {
        setIsLoading(false); // Set isLoading to false when the video is loaded
        const tl = gsap.timeline()

        tl
            .to('.spinner-content', {
                scale: 0
            })
            .to('.overlay', {
                scaleY: 0,
                stagger: .3,
                ease: 'Power3.out'
            })
            .to('.loader', {
                delay: .1,
                scaleY: 0
            })
    };


    return (
        <div className='landing-page' >
            <Loader />
            <div className='home' >
                <div className="top">
                    <div className="hero">
                        <video className="landing-video" autoPlay loop muted >
                            <source src={video} type="video/mp4" />
                            {/* Add fallback content for browsers that don't support video */}
                            Your browser does not support the video tag.
                        </video>
                        <div className="hero-contents">
                            <div className="headings">
                                <h1>Welcome to the Legacy of CMS Grammar School, Lagos</h1>
                                <h1><span>Unite</span>. Inspire. <span>Flourish.</span></h1>
                            </div>
                            <div className="desc">
                                {/* <i class="fa-solid fa-angles-down"></i> */}
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-x-twitter"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcome">
                    <div className="filtered circle-1"></div>
                    <div className="filtered circle-2"></div>
                    <div className="filtered circle-3"></div>

                    <div className="welcome-overlay">
                        <div className="image">
                            <img src={president} alt="president-img" />
                        </div>
                        <h2>Presidential Welcome Address</h2>
                        <p>Dear Esteemed Old Grammarians,

                            With heartfelt joy, I warmly welcome you to our esteemed community, a testament to the enduring legacy of CMS Grammar School, Lagos. United by the values of academic excellence, camaraderie, and impactful service, we stand as a dynamic network of leaders and change-makers, dedicated to upholding our alma mater's cherished traditions and fostering new pathways of collective progress and transformation. Here's to the timeless legacy of the Old Grammarians Society and the boundless possibilities that lie ahead as we navigate this journey together.

                            Warm regards,</p>
                        <p>[President's Name]</p>
                    </div>
                </div>
                <div className="about">
                    <div className="indexed">
                        <div className="the-ogs">
                            <h1>The O.G.S.</h1>
                            <p>The Old Grammarians Society is a distinguished community of former students of CMS Grammar School, Lagos, founded on the principles of fostering lasting connections, preserving our esteemed heritage, and promoting excellence in all endeavors. With a rich history that dates back decades, our association continues to serve as a beacon of unity and progress, uniting generations of scholars, professionals, and leaders under one collective identity.</p>
                        </div>
                        <div className="mission">
                            <h1>Our Mission</h1>
                            <p>Our mission is to nurture a strong community of CMS Grammar School alumni dedicated to academic excellence and positive societal impact. Through mentorship, engagement, and philanthropy, we aspire to inspire a legacy of excellence and lifelong learning for the benefit of future generations.</p>
                        </div>
                        <div className="bottom">
                            <div className="line" />
                            <p className="button">
                                Read More
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hall-of-fame">
                    <div className="filtered circle-1"></div>
                    <div className="filtered circle-2"></div>
                    <div className="filtered circle-3"></div>
                    <div className="filtered circle-4"></div>

                    <div className="hof-overlay">
                        <div className="text">
                            <h1>Hall Of Fame</h1>
                        </div>
                        <div className="marquee-container">
                            {/* <CarouselMarquee imageUrls={slides}  /> */}
                            <CarouselMarquee imageUrls={slides} rotationAngle={"40px"} />
                        </div>

                        <div className="text">
                            <p>The OGS Hall of Fame commemorates exceptional Old Grammarians whose positive contributions have left an enduring mark on the world stage. Click 'Details' on each portrait to explore our esteemed Hall of Famers</p>
                        </div>
                    </div>
                </div>
                <div className="upcoming-events">
                    <UniqueCarousel data={slides4} />
                </div>
                <div className="updates">
                    <div className="text">
                        <h2>OGS, GRAMMARIANS & CMS GRAMMAR SCHOOL IN THE NEWS</h2>
                    </div>
                    <ul className="u-grid">
                        <li>
                            <div className="b-container">
                                <div className="circle-a b-filter"></div>
                                <div className="circle-b b-filter"></div>
                                <div className="circle-c b-filter"></div>
                            </div>
                            <div className="content">
                                <h3>Why I Am Still Active At 90 - Akinola, First Lagos State  Surveyor General</h3>
                                <p className="middle">
                                    <i class="fa-regular fa-calendar-days"></i> 2023-01-16 05:51:41
                                </p>
                                <p className="clamp">I was born in Ipaja now under Alimosho Local Government Area. Then it was in Ikeja Local Government, which was under the then Western Region. From the school, we used to come to Ikeja for Empire Day. I started my school at Ipaja; after elementary school, I went to CMS Grammar School in Lagos</p>
                                <span className="button">More</span>

                            </div>
                        </li>
                        <li>
                            <div className="b-container">
                                <div className="circle-a b-filter"></div>
                                <div className="circle-b b-filter"></div>
                                <div className="circle-c b-filter"></div>
                            </div>
                            <div className="content">
                                <h3>CMS Grammar School Celebrates 164th anniversary</h3>
                                <p className="middle">
                                    <i class="fa-regular fa-calendar-days"></i> 2023-01-16 05:51:41
                                </p>
                                <p className="clamp">Nigeria’s oldest secondary school, CMS Grammar School, Lagos is celebrating the 162nd anniversary of its establishment. The management of the institution, Old Grammarian Society (OGS) and members of the Founder’s Day Planning Committee of the CMS Grammar School, Lagos kicked off the week-long programme of activities with a Career Talk for current students of the</p>
                                <span className="button">More</span>
                            </div>
                        </li>
                        <li>
                            <div className="b-container">
                                <div className="circle-a b-filter"></div>
                                <div className="circle-b b-filter"></div>
                                <div className="circle-c b-filter"></div>
                            </div>
                            <div className="content">
                                <h3>Bayo Oduneye: Man Behind National Troupe</h3>
                                <p className="middle">
                                    <i class="fa-regular fa-calendar-days"></i> 2023-01-16 05:51:41
                                </p>
                                <p className="clamp">Born Bayo Adisa Oduneye on November 4, Nineteen Thirty-six, he attended Ijebu Ode Grammar School, then Holy Trinity Parish School, Ebute Ero, CMS Grammar School, both in Lagos. Between 1957 and Sixty-four, Oduneye was at OpenShaw Grammar School, Manchester, Royal Academy of Dramatic Arts, London and Carnegie Mellon ...</p>
                                <span className="button">More</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home