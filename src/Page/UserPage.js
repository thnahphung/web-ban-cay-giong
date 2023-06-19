import SideNav from "../Component/user-page/SideNav";
import OrderHistory from "../Component/user-page/OrderHistory";
import React, {Fragment, useEffect, useState} from "react";
import {MDBBadge, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import UserInfor from "../Component/user-page/UserInfor";
import CategoryApi from "../api/CategoryApi";
import {loadCategories} from "../store/Action";
import OrderApi from "../api/OrderApi";


const UserPage = () => {
    sessionStorage.setItem("user", JSON.stringify({
        "id": 1,
        "name": "Phú",
        "email": "th@gmail.com",
        "phone": "123123",
        "informations": [],
        "cart": [],
        "updatedAt": 1686997405751,
        "createdAt": 1616346753759,
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-bdnSJ-NkU6gscunAOsrKDHDnmAeqWXA4YrQHa5yMg&s=10"
    }));
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [orders, setOrder] = useState([]);

    // const orders = useSelector(state => state.orders);

    useEffect(() => {
        const fetchOrders = async () => {
            const param = {
                phone: user.phone
            }
            const data = await OrderApi.getAll();
            setOrder(data)

        }
        fetchOrders().catch(console.error);
    }, [])


    return (

        <MDBContainer>
            <div className={`mb-5`} style={{borderBottom: "1px solid #DCDCDC"}}>
                <h1 className={`d-flex justify-content-center mb-5 mt-5`}><strong>Tài
                    khoản của bạn </strong></h1>
                <div className="mx-auto mb-4" style={{
                    width: '100px',
                    height: '3px',
                    borderRadius: '20px',
                    justifyContent: "center",
                    backgroundColor: 'black'
                }}>
                </div>
            </div>
            <MDBRow className={`d-md-flex justify-content-between`}>
                <MDBCol md={3}>
                    <SideNav/>
                </MDBCol>
                <MDBCol md={9}>
                    <UserInfor user={user}/>
                    <OrderHistory orders={orders}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}


export default UserPage;