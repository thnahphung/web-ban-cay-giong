import {useEffect} from "react";
import CategoryApi from "../api/CategoryApi";
import {loadCategories} from "../store/Action";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Footer = () => {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCategories = async () => {
            const data = await CategoryApi.getAll();
            dispatch(loadCategories(data))
        }
        fetchCategories().catch(console.error);
    }, [])
    return (
        <footer className="page-footer font-small blue-grey lighten-5 mt-4">

            <div className='default-color'>
                <div className="container">

                    <div className="row py-4 d-flex align-items-center">

                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Kết nối với chúng tôi thông qua mạng xã hội</h6>
                        </div>


                        <div className="col-md-6 col-lg-7 text-center text-md-right">


                            <a className="fb-ic">
                                <i className="fab fa-facebook-f white-text mr-4"> </i>
                            </a>

                            <a className="tw-ic">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>

                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>

                            <a className="li-ic">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>

                            <a className="ins-ic">
                                <i className="fab fa-instagram white-text"> </i>
                            </a>

                        </div>


                    </div>


                </div>
            </div>


            <div className="container text-center text-md-left mt-5">


                <div className="row mt-3 dark-grey-text">


                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4">


                        <h6 className="text-uppercase font-weight-bold">Về công ty</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <p>Chúng tôi tự hào giới thiệu đến bạn một trải nghiệm tuyệt vời trong việc mua sắm cây giống
                            trực tuyến. Trang web của chúng tôi cung cấp một loạt các loại cây giống đa dạng và chất
                            lượng.</p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase font-weight-bold">Sản phẩm</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        {categories.map(category => {
                            return (<p key={category.id}>
                                <Link className="dark-grey-text" href="#"
                                      to={`/${category.urlParam}`}>{category.name}</Link>
                            </p>)
                        })}
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase font-weight-bold">Hữu ích</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <p>
                            <a className="dark-grey-text" href="#">Help</a>
                        </p>

                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                        <h6 className="text-uppercase font-weight-bold">Liên hệ</h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <p>
                            <i className="fas fa-home mr-3"></i> Quận 9, Thủ Đức, Hồ Chí Minh</p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> bancaygiong@gmail.com</p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> + 84 123456</p>


                    </div>

                </div>

            </div>

            <div className="footer-copyright text-center text-black-50 py-3">© 2020 Copyright:
                <a className="dark-grey-text" href="/"> MDBootstrap.com</a>
            </div>


        </footer>


    )
}

export default Footer
