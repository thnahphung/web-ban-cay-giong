import React from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

const BasicTable = (data) => {
    const orders = data.orders;

    return (
        <MDBTable className={'mt-5'}>
            <MDBTableHead color={'default-color'}>
                <tr>
                    <th>Mã đơn hàng</th>
                    <th>Ngày đặt</th>
                    <th>Trạng thái giao hàng</th>
                    <th>Thanh toán</th>
                    <th>Thành tiền</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {orders.map(order => (
                    <tr>
                        <td>{order.id}</td>
                        <td>{order.updatedAt}</td>
                        <td></td>
                        <td>Chưa thanh toán</td>
                        <td>{order.total}</td>
                    </tr>
                ))}


            </MDBTableBody>
        </MDBTable>
    );
}

export default BasicTable;