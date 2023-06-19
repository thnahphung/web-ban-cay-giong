import SideNav from "../Component/user-page/SideNav";
import OrderHistory from "../Component/user-page/OrderHistory";
import React, {Fragment, useEffect, useState} from "react";
import {MDBBadge, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import UserInfor from "../Component/user-page/UserInfor";
import CategoryApi from "../api/CategoryApi";
import {loadCategories} from "../store/Action";
import OrderApi from "../api/OrderApi";
import {useLoaderData} from "react-router-dom";
import ShowAddress from "../Component/user-page/ShowAddress";


const UserPage = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [orders, setOrder] = useState([]);
    const param = useLoaderData();

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

    function createTable() {
        if (param === 'don-hang') {
            return (<OrderHistory orders={orders}/>)
        } else if (param === 'dia-chi') {
            console.log(user)
            return (<ShowAddress list={user.informations}/>)
        }
    }

    function createInfo() {
        if (param === 'don-hang') {
            return <UserInfor user={user}/>
        }
    }

    return (

        <MDBContainer>
            <div className={`mb-5`} style={{borderBottom: "1px solid #DCDCDC"}}>
                <h1 className={`d-flex justify-content-center mb-5 mt-5`}>
                    <strong>Tài
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
                    <SideNav param={param}/>
                </MDBCol>
                <MDBCol md={9}>
                    {createInfo()}

                    {createTable()}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}


export default UserPage;

export async function loadUserPage({
                                       params
                                   }) {
    return params.param;
}