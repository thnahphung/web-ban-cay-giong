import {MDBBtn, MDBContainer} from "mdbreact";

const IntroducePage = () => {

    return (
        <MDBContainer>
            <section className="mb-10">
                <h1 className="fw-bold">Chào mừng đến với trang web bán cây giống!</h1>

                <p className="text-uppercase text-danger fw-bold mb-4">
                    <i className="fas fa-fire me-2"></i>Cực xịn
                </p>

                <p>
                    Chúng tôi tự hào giới thiệu đến bạn một trải nghiệm tuyệt vời trong việc mua sắm cây giống trực
                    tuyến. Trang web của chúng tôi cung cấp một loạt các loại cây giống đa dạng và chất lượng, giúp bạn
                    tạo ra một khu vườn xanh tươi, sân trước đẹp hoặc không gian nội thất thú vị.
                </p>

                <p><strong>Cam kết của chúng tôi!</strong></p>

                <p>
                    Với sự kết hợp giữa sự chăm sóc tận tâm và chất lượng sản phẩm, chúng tôi cam kết mang đến cho bạn
                    những cây giống chất lượng cao, khỏe mạnh và đáng tin cậy. Chúng tôi hiểu rằng cây trồng không chỉ
                    là những mảnh xanh thêm vào không gian sống của bạn, mà còn là một phần của cuộc sống và sự thư
                    thái.
                </p>

                <p>
                    Với giao diện trực quan và dễ sử dụng, bạn có thể dễ dàng tìm kiếm và chọn lựa những cây giống phù
                    hợp với nhu cầu của mình. Chúng tôi cung cấp thông tin chi tiết về từng loại cây, cùng với hướng dẫn
                    chăm sóc để bạn có thể nuôi dưỡng và phát triển cây một cách thành công.
                </p>

                <img
                    src="https://mdbootstrap.com/img/new/slides/194.jpg"
                    className="img-fluid shadow-5 rounded-5 mb-4"
                    alt=""
                />
                <p>
                    Hãy để chúng tôi trở thành nguồn cung cấp đáng tin cậy cho việc mua sắm cây giống trực tuyến của
                    bạn. Dưới sự hỗ trợ của đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang đến sự hài lòng
                    và trải nghiệm mua sắm tuyệt vời cho bạn.
                </p>
                <p className="note note-light">
                    <strong>Hãy</strong> khám phá ngay hôm nay và tạo ra không gian xanh tươi, đẹp và thú vị bằng
                    cách mua sắm cây giống tại trang web của chúng tôi.
                </p>
            </section>
        </MDBContainer>

    )

}

export default IntroducePage