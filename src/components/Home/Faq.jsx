import React from 'react';

const Faq = () => {
    return(
        <div>
             <div className="faqs">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Frequently Asked Question</p>
                        <h2>You May Ask</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="accordion-1">
                                <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                                            What is our industry experience?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                        FutureBuilderz Ltd has fulfilled Ugandans needs through providing latest
                                        and trending paint colours, Gypsum ceiling designs among others in the real estate business for the 
                                        past years.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                                            What is your Mission?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                             Our mission is to ensure quality and profesional workmanship in the real estate business.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                                            What is your Vision?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            To sustain our brand name through providing high quality service.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                                            Core Values?
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                           <p> - High levels of creativity and innovation professionalism, ability to work under pressure.</p>
                                           <p> - Invest in the External appeal of your business or freshen up the interior and Exterior to 
                                            improve morals whether you have to a stand alone building, commercial plaza or any other Project
                                            you need painted. </p>
                                            <p>
                                              -  Breath New Life in a tidy home, office or Hotel by re-inventing its entire feel with latest
                                                ceiling designs and paint colours
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                                            Do you hire workers?
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            As long as you have all the qualities needed for the job we can look into your application.
                                            But also pray hard.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="accordion-2">
                                <div className="card wow fadeInRight" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                                            Who is the CEO of FutureBuilderz?
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            <strong>Kanyankole</strong> is the founder and CEO of FutureBuilderz.
                                           <span> Contact him on his phone contacts: <strong>+256 759 878 065</strong> and <strong>+256 781 758 068</strong> Also via email <strong>futurebuilderz@gmail.com</strong></span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                                            What is FutureBuilderz in full?
                                        </a>
                                    </div>
                                    <div id="collapseSeven" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            FutureBuilderz is Ashnold Interior and Exterior Services Ltd
                                        </div>
                                    </div>
                                </div> */}
                                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                                            Where is FutureBuilderz located?
                                        </a>
                                    </div>
                                    <div id="collapseEight" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                        FutureBuilderz is located in Nakawa, Kampala, Uganda.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                                            Do you have a mailing address?
                                        </a>
                                    </div>
                                    <div id="collapseNine" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            We don't have a mailing address yet but still you can contact us on our phone contacts which are always available.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                                            Do you offer a discount on your products?
                                        </a>
                                    </div>
                                    <div id="collapseTen" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            We offer discounts according to the amount of products you have taken from us and also make deliveries in areas within Kampala region.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;