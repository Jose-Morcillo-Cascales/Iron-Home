import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {

    const style = { background: '#217cb7', color: 'white', textAlign: 'center', fontSize: '.9em', bottom: 0, padding: 15, width: '100%' }

    return (
        <>
            <footer className="footer">
                <div className="container bottom_border">
                    <div className="row">
                        <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                            <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p><i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
                            <p><i className="fa fa-phone"></i>  +91-9999878398  </p>
                            <p><i className="fa fa fa-envelope"></i> info@example.com  </p>


                        </div>


                        <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                            <ul className="footer_ul_amrc">
                                <li><a href="http://webenlance.com">Image Rectoucing</a></li>
                                <li><a href="http://webenlance.com">Clipping Path</a></li>
                                <li><a href="http://webenlance.com">Hollow Man Montage</a></li>
                                <li><a href="http://webenlance.com">Ebay & Amazon</a></li>
                                <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                                <li><a href="http://webenlance.com">Image Cropping</a></li>
                            </ul>
                        </div>


                        <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                            <ul className="footer_ul_amrc">
                                <li><a href="http://webenlance.com">Remove Background</a></li>
                                <li><a href="http://webenlance.com">Shadows & Mirror Reflection</a></li>
                                <li><a href="http://webenlance.com">Logo Design</a></li>
                                <li><a href="http://webenlance.com">Vectorization</a></li>
                                <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                                <li><a href="http://webenlance.com">Image Cropping</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <Container>
                    <p className="text-center">Desarrollo por:<strong> Pepe & Lali </strong>|| © Todos los derechos reservados</p>

                    <ul className="social_footer_ul">
                        <li><a href="http://webenlance.com"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="http://webenlance.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="http://webenlance.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="http://webenlance.com"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </Container>

            </footer>
        </>
    )
}

export default Footer