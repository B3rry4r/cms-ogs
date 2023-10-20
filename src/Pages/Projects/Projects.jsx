import React from 'react';
import './Projects.scss';
import proj1 from '../../Assets/project.jpg';

const Projects = () => {
    return (
        <div className='projects' >
            <div className="p-t-fullW">
                <div className="contents">
                    <h1>Completed <span>Projects</span></h1>

                    <div className="text">
                        <p>Discover the impactful initiatives and ventures spearheaded by the Old Grammarians Society. From community-driven campaigns to educational endeavors, our projects are a testament to our commitment to making a positive difference. Explore our diverse range of initiatives that aim to inspire, empower, and uplift communities both locally and beyond.</p>
                    </div>
                </div>
            </div>

            <div className="projects-container">
                <h1>Our <span>Completed</span> Projects</h1>
                <div className="p-grid">
                    <div className="project">
                        <div className="image">
                            <img src={proj1} alt="proj-1" />
                            <div className="overlay">
                                <p className="more">More</p>
                            </div>
                        </div>
                        <div className="p-desc">
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img src={proj1} alt="proj-1" />
                            <div className="overlay">
                                <p className="more">More</p>
                            </div>
                        </div>
                        <div className="p-desc">
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img src={proj1} alt="proj-1" />
                            <div className="overlay">
                                <p className="more">More</p>
                            </div>
                        </div>
                        <div className="p-desc">
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img src={proj1} alt="proj-1" />
                            <div className="overlay">
                                <p className="more">More</p>
                            </div>
                        </div>
                        <div className="p-desc">
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img src={proj1} alt="proj-1" />
                            <div className="overlay">
                                <p className="more">More</p>
                            </div>
                        </div>
                        <div className="p-desc">
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img src={proj1} alt="proj-1" />
                            <div className="overlay">
                                <p className="more">More</p>
                            </div>
                        </div>
                        <div className="p-desc">
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img src={proj1} alt="proj-1" />
                            <div className="overlay">
                                <p className="more">More</p>
                            </div>
                        </div>
                        <div className="p-desc">
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img src={proj1} alt="proj-1" />
                            <div className="overlay">
                                <p className="more">More</p>
                            </div>
                        </div>
                        <div className="p-desc">
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img src={proj1} alt="proj-1" />
                            <div className="overlay">
                                <p className="more">More</p>
                            </div>
                        </div>
                        <div className="p-desc">
                            <span>Lorem, ipsum.</span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects