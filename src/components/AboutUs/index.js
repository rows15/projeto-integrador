import './style.scss';
import '../../App.scss'

import Mateus    from "../../assets/aboutUs/Mateus.jpg";
import Marcelo   from "../../assets/aboutUs/Marcelo.png";
import Wesley  from "../../assets/aboutUs/Wesley.jpg";
import Leticia  from "../../assets/aboutUs/Leticia.jpg";
import Francielle    from "../../assets/aboutUs/Francieli.jpg";
import Katherine    from "../../assets/aboutUs/Katherine.jpg";

const AboutUs = () => {

    return (


        <section id="aboutUs" >

            <div className="text-about">
                <p>Grupo do checkpoint integrador CTD </p>
            </div>


                <div className="cards">
                    {/* MATEUS */}
                    <articles >
                        <div className="caixa caixa-1">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Mateus} alt="Foto Mateus Dias." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme ">
                                    <h4 className="profile-name">Mateus Dias</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/alinepollisbeck/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="http://github.com/lipollis" target="_blank" rel="noopener noreferrer">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* MARCELO  */}
                    <articles >
                        <div className="caixa caixa-2">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Marcelo} alt="Foto Marcelo Ramos." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Marcelo</h4>
                                    <h5 className="profile-social"><a href=" https://www.linkedin.com/in/esther-maria-pimentel-porto-4b351a74/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/EstherPimentel" target="_blank" rel="noopener noreferrer">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* WESLEY */}
                    <articles >
                        <div className="caixa caixa-3">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Wesley} alt="Foto Wesley Bueno." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Wesley Bueno</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/gisellepiasetzki/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/GisellePiasetzki" target="_blank" rel="noopener noreferrer">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* LETÍCIA CARMO */}
                    <articles >
                        <div className="caixa caixa-4">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Leticia} alt="Foto Letícia Carmo." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Letícia Carmo</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/leticia-carmo-/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/liacarmo" target="_blank" rel="noopener noreferrer">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* FRANCIELLE */}
                    <articles >
                        <div className="caixa caixa-5">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Francielle} alt="Foto Francielle." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Francielle</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/silas-medeiros-6b44a0213/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/silasms" target="_blank" rel="noopener noreferrer">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* KATHERINE */}
                    <articles >
                        <div className="caixa caixa-6">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Katherine} alt="Foto Katherine Duarte." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Katherine Duarte</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/thaysgama/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/thaysgama" target="_blank" rel="noopener noreferrer">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>

                </div>

        </section>

    )
}

export default AboutUs;
