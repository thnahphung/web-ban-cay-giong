import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdbreact";
import Select from "./Select";
import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import axios from "axios";
import Loading from "./Loading";


const FormInputInfoUser = forwardRef((prop, ref) => {
    const isLoading = prop.loading || false;

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [provinceSelected, setProvinceSelected] = useState({code: 0});
    const [districtsSelected, setDistrictsSelected] = useState({code: 0});
    const [wardsSelected, setWardsSelected] = useState({code: 0});

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    const [isNameValid, setIsNameValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);


    useEffect(() => {
        if (districts.length === 0) {
            setWards([]);
            return;
        }
        axios.get('https://provinces.open-api.vn/api/d/' + districtsSelected.code + '?depth=2')
            .then(function (response) {
                setWards(response.data.wards)
            })
            .catch(function (error) {
            });
    }, [districtsSelected])

    useEffect(() => {
        if (provinceSelected.code === 0)
            return;
        axios.get('https://provinces.open-api.vn/api/p/' + provinceSelected.code + '?depth=2')
            .then(function (response) {
                setDistricts(response.data.districts)
            })
            .catch(function (error) {
            });
    }, [provinceSelected])

    useEffect(() => {
        axios.get('https://provinces.open-api.vn/api/')
            .then(function (response) {
                setProvinces(response.data);
                setDistricts([]);
                setWards([]);
            })
            .catch(function (error) {
            });
    }, [])


    useImperativeHandle(ref, () => ({

        validateForm() {
            setIsNameValid(name.value !== '');
            setIsPhoneValid(phone.value !== '');
            return name.value !== '' && phone.value !== '';
        },
        getInfo() {
            return {
                "name": name.value,
                "email": email.value,
                "phone": phone.value,
                "province": provinceSelected,
                "district": districtsSelected,
                "wards": wardsSelected
            }
        }
    }));

    if (isLoading) {
        return (<div style={{height: "300px"}} className='d-flex justify-content-center align-items-center'>
            <Loading/>
        </div>)
    }


    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol size="6"><MDBInput inputRef={setName} labelClass={isNameValid ? '' : 'text-danger'}
                                           label="Họ và tên *"/>
                </MDBCol>
                <MDBCol size="6"><MDBInput inputRef={setPhone} labelClass={isPhoneValid ? '' : 'text-danger'}
                                           label="Số điện thoại *"/></MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol sm="6"><MDBInput inputRef={setEmail} label="Email"/></MDBCol>
                <MDBCol sm="6">
                    <Select passData={setProvinceSelected}
                            value={provinces}
                            checked={provinceSelected.code}
                            label={'Tỉnh/Thành Phố *'}/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="6">
                    <Select passData={setDistrictsSelected}
                            value={districts}
                            checked={districtsSelected.code}
                            label={'Quận/Huyện *'}/>
                </MDBCol>
                <MDBCol md="6">
                    <Select passData={setWardsSelected}
                            value={wards}
                            checked={wardsSelected.code}
                            label={'Phường/Xã *'}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
});
export default FormInputInfoUser;