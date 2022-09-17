import React from 'react';
import NavBar from '../NavBar/NavBar';
import 'boxicons'



export default function About() {
    return (
        <div>

            <NavBar />

            <div className="container-fluid mt-3">
                <h1 className="text-primary text-center">About Us</h1>

                <hr />
                <div className="slider">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://source.unsplash.com/775x300/?ai" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>AI Baesed Redirecting</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://source.unsplash.com/775x300/?tech" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Get Fastest Solution</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://source.unsplash.com/775x300/?web" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Accurate Solution</h5>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="description my-4">
                    <h2 className='text-primary text-center'>About Developers</h2>
                    <div className="about-developer m-3">
                        <h4>1. Krupesh Vithlani: </h4>
                        <p className='m-3'>Hola 👋, Krupesh this side. Currently Pursuing 3rd Year of BCA at SSSDIIT Gurukul Junagadh, Gujarat.  <br /><br />

                            I am a Google Crowdsource Influencer, core team member of Coders Evoke, CodeIN & LBT Community, and Hack Club Lead. <br /><br />

                            I organized HTML Sessions on Coders Evoke Community. That is really great I learned a lot of things in that session and also got many connections from it. <br /><br />

                            I also participated in Holiday Hacks Hackathon and created an AI-based Translator "Trnaslato AI" using React JS and Alan AI & Got 3rd rank in the Hackathon
                            <br /><br />
                            I also organized Web3Camp by GirlScript in Jodhpur. It was really great experience to organize an event and manage the event.</p>
                            <div className="social m-3">
                           <a href="https://linkedin.com/in/krupesh-is-here" className='mx-3'><box-icon name='linkedin' type='logo' animation='tada' color='#0076b4' ></box-icon></a>
                           <a href="https://github.com/tkrupesh14" className='mx-3'><box-icon name='github' type='logo' animation='tada' ></box-icon></a>
                           <a href="https://twitter.com/krupesh_is_here" className='mx-3'><box-icon name='twitter' type='logo' animation='tada' color='#1ca1f3' ></box-icon></a>
                            </div>
                           
                    </div>
                    <div className="about-developer m-3">
                        <h4>2. Avnish Bharadva: </h4>
                        <p className='m-3'>Intermediate Frontend Developer with a demonstrated history of working in the e-learning industry. Skilled in HTML, Cascading Style Sheets (CSS), Javascript , Java and Web Development. Strong engineering professional with a BCA focused in Web Developer from SSSDIIT College.</p>
                        <div className="social m-3">
                           <a href="https://linkedin.com/in/krupesh-is-here" className='mx-3'><box-icon name='linkedin' type='logo' animation='tada' color='#0076b4' ></box-icon></a>
                           <a href="https://github.com/tkrupesh14" className='mx-3'><box-icon name='github' type='logo' animation='tada' ></box-icon></a>
                           <a href="https://twitter.com/krupesh_is_here" className='mx-3'><box-icon name='twitter' type='logo' animation='tada' color='#1ca1f3' ></box-icon></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
