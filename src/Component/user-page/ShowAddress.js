import {MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdbreact";

const ShowAddress = (data) => {
    const list = data.list;

    return (<MDBContainer>
        {list.map(item => (
            <MDBRow>
                <MDBCol md={'3'}>
                    {item.name}
                </MDBCol>
                <MDBCol md={'3'}>
                    {item.phone}
                </MDBCol>
                <MDBCol md={'3'}>
                    {item.wards.name}, {item.district.name}, {item.province.name}
                </MDBCol>
                <MDBCol md={'3'}>
                    <MDBBtn>Xoá</MDBBtn>
                </MDBCol>
            </MDBRow>
        ))}

    </MDBContainer>)
}
export default ShowAddress;