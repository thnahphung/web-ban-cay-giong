import {MDBBtn, MDBCol, MDBRow, MDBView} from "mdbreact";
import React from "react";
import {Link} from "react-router-dom";

const CardNews = (data) => {
    const news = data.news;
    return (
        <MDBRow>
            <MDBCol lg="5" xl="4">
                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <Link to={`/tin-tuc/${news.urlParam}`}>
                        <img
                            className="img-fluid"
                            src={news.image}
                            alt=""
                        />
                    </Link>

                </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
                <h3 className="font-weight-bold mb-3 p-0">

                    <Link to={`/tin-tuc/${news.urlParam}`} style={{color: "black"}}>
                        <strong>{news.title}</strong>
                    </Link>
                </h3>
                <p className="dark-grey-text">{news.describe}...</p>
                <p>
                    Tác giả <a href="#!" className="font-weight-bold">{news.author}</a>, {convertDate(news.createdAt)}
                </p>
                <Link to={`/tin-tuc/${news.urlParam}`}>
                    <MDBBtn color="default" rounded size="md">
                        Đọc thêm
                    </MDBBtn>
                </Link>
            </MDBCol>
        </MDBRow>
    )
}
export default CardNews;

function convertDate(numberDate) {
    const date = new Date(numberDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return day + '/' + month + '/' + year;
}