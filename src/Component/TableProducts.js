import React from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

const BasicTable = (data) => {
    const items = data.items;
    const total = data.total;

    function createRow() {
        let rows = [];
        for (let i = 0; i < items.length; i++) {
            rows.push(
                <tr>
                    <td>{i + 1}</td>
                    <td>{items[i].product.name}</td>
                    <td>{items[i].product.salePrice}</td>
                    <td>{items[i].amount}</td>
                    <td>{items[i].product.salePrice * items[i].amount}</td>
                </tr>
            )
        }
        return rows;
    }

    return (
        <MDBTable>
            <MDBTableHead color="default-color" textWhite>
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {createRow()}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{total}</td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}

export default BasicTable;