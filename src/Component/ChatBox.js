import React, {Component, useState} from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBAvatar,
    MDBBadge,
    MDBIcon,
    MDBBtn,
    MDBScrollbar, MDBView,
} from "mdbreact";
import "../style/ChatPage.css"
import logo from '../images/logo.png'

const ChatBox = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const [isDisplay, setIsDisplay] = useState(false);
    const messages = [
        {
            author: "Seeds Sprout",
            avatar: logo,
            when: "16 phút trước",
            message:
                "Bạn có thắc mắc gì bên mình sẽ giải đáp.",
        },
        {
            author: user.name,
            avatar: user.avatar,
            when: "17 phút trước",
            message:
                "Chào shop, bên shop có bán mít giống không ạ",
        },
        {
            author: "Seeds Sprout",
            avatar: logo,
            when: "16 phút trước",
            message:
                "Bên mình có bán mít giống bạn nha, giá hiện tại là 90.000đ",
        },
        {
            author: user.name,
            avatar: user.avatar,
            when: "15 phút trước",
            message:
                "Bên mình có bán các loại hoa nào nhỉ.",
        },
        {
            author: "Seeds Sprout",
            avatar: logo,
            when: "14 phút trước",
            message:
                "Bên mình có các loại như: hoa cúc, hoa anh đào, hoa đào bạch ạ.",
        },
        {
            author: user.name,
            avatar: user.avatar,
            when: "13 phút trước",
            message:
                "OK shop, vậy giờ mình sẽ đặt hàng, cảm ơn shop",
        },
        {
            author: "Seeds Sprout",
            avatar: logo,
            when: "12 phút trước",
            message:
                "Cảm ơn bạn đã tin tưởng shop.",
        }
    ]

    function handelChangeDisplay() {
        setIsDisplay(!isDisplay);
    }

    if (isDisplay === false) {
        return (<div style={{position: 'fixed', bottom: '10px', right: '10px', zIndex: '2000'}}>
            <MDBView waves
                     onClick={handelChangeDisplay}>
                <img
                    style={{height: '60px', borderRadius: '50%'}}

                    src={logo}
                    alt="avatar"
                    className="img-fluid"
                />
            </MDBView>
        </div>)
    }

    return (
        <div style={{width: '400px', position: 'fixed', bottom: '0', right: '75px', zIndex: '1000'}}>
            <MDBCard className="grey lighten-3 chat-room">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol>
                            <div className="scrollable-chat">
                                <MDBScrollbar>
                                    <MDBListGroup className="list-unstyled pl-3 pr-3">
                                        {messages.map((message) => (
                                            <ChatMessage
                                                key={message.author + message.when}
                                                message={message}
                                            />
                                        ))}
                                    </MDBListGroup>
                                </MDBScrollbar>
                            </div>
                            <div className="form-group basic-textarea">
                <textarea
                    className="form-control pl-2 my-0"
                    id="exampleFormControlTextarea2"
                    rows="3"
                    placeholder="Nhập tin nhắn..."/>
                                <MDBBtn
                                    color="info"
                                    rounded
                                    size="sm"
                                    className="float-right mt-4"
                                >
                                    Gửi
                                </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <div style={{position: 'fixed', bottom: '10px', right: '10px', zIndex: '2000'}}>
                <MDBView waves
                         onClick={handelChangeDisplay}>
                    <img
                        style={{height: '60px', borderRadius: '50%'}}

                        src={logo}
                        alt="avatar"
                        className="img-fluid"
                    />
                </MDBView>
            </div>
        </div>
    )

}

const ChatMessage = ({message: {author, avatar, when, message}}) => (
    <li className="chat-message d-flex justify-content-between mb-4">
        <MDBAvatar
            tag="img"
            src={avatar}
            alt="avatar"
            circle
            className="mx-2 z-depth-1"
        />
        <MDBCard>
            <MDBCardBody>
                <div>
                    <strong className="primary-font">{author}</strong>
                    <small className="pull-right text-muted">
                        <i className="far fa-clock"/> {when}
                    </small>
                </div>
                <hr/>
                <p className="mb-0">{message}</p>
            </MDBCardBody>
        </MDBCard>
    </li>
);

export default ChatBox;