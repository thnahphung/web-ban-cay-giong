import {MDBBtn, MDBCard, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import {useState} from "react";
import OrderApi from "../api/OrderApi";
import {resetCart} from "../store/Action";
import {getStatus} from "../store/SupportFuntion";
import TableProducts from "../Component/TableProducts";

const SearchOrderPage = () => {
    const [phone, setPhone] = useState();
    const [orderId, setOrderId] = useState();
    const [order, setOrder] = useState();

    function handleSearchOrder() {
        const fetchOrders = async () => {
            const params = {
                phone: phone.value,
                id: orderId.value
            }
            const data = await OrderApi.getAll(params);
            setOrder(data[0]);
        }
        fetchOrders().catch(console.error);
    }

    return (
        <MDBContainer style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <MDBCard>
                <div style={{
                    width: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '20px 40px'
                }}>
                    <MDBInput inputRef={setPhone} label="Số điện thoại" type="text"/>
                    <MDBInput inputRef={setOrderId} label="Mã đơn hàng (123)" type="text"/>
                    <MDBBtn rounded onClick={handleSearchOrder}>Tìm kiếm</MDBBtn>
                </div>
            </MDBCard>
            <div className={'mt-5'} style={{width: '600px'}}>
                {order === undefined ? <></> :
                    <>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol><h3 style={{textAlign: 'center', marginBottom: '40px'}}><strong>Thông tin đơn
                                    hàng</strong></h3></MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md={'4'}>Mã đơn hàng</MDBCol>
                                <MDBCol md={'8'}>#{order.id}</MDBCol>
                            </MDBRow>
                            <hr/>
                            <MDBRow>
                                <MDBCol md={'4'}>Tên người nhận</MDBCol>
                                <MDBCol md={'8'}>{order.information.name}</MDBCol>
                            </MDBRow>
                            <hr/>
                            <MDBRow>
                                <MDBCol md={'4'}>Số điện thoại</MDBCol>
                                <MDBCol md={'8'}>{order.information.phone}</MDBCol>
                            </MDBRow>
                            <hr/>
                            <MDBRow>
                                <MDBCol md={'4'}>Địa chỉ</MDBCol>
                                <MDBCol
                                    md={'8'}>{order.information.wards.name}, {order.information.district.name}, {order.information.province.name}</MDBCol>
                            </MDBRow>
                            <hr/>
                            <MDBRow>
                                <MDBCol md={'4'}>Trạng thái</MDBCol>
                                <MDBCol
                                    md={'8'}>{getStatus(order.status)}</MDBCol>
                            </MDBRow>
                            <hr/>
                        </MDBContainer>
                        <h3 style={{textAlign: 'center', marginBottom: '40px'}}><strong>Thông tin sản phẩm</strong></h3>
                        <TableProducts items={order.items} total={order.total}/>
                    </>}
            </div>
        </MDBContainer>
    )
}
export default SearchOrderPage;