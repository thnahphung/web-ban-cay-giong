import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import ListCategoryBar from "../Component/ListCategoryBar";
import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";
import DetailNews from "../Component/DetailNews";
import NewsApi from "../api/NewsApi";

const DetailNewsPage = () => {
    const newsUrl = useLoaderData();
    const [news, setNews] = useState();

    useEffect(() => {
        const fetchNews = async () => {
            const params = {
                urlParam: newsUrl
            }
            const data = await NewsApi.getAll(params);
            setNews(data[0]);
        }
        fetchNews().catch(console.error);
    }, [])

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md={`3`}>
                    <ListCategoryBar/>
                </MDBCol>
                <MDBCol md={`9`}>
                    <DetailNews news={news}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default DetailNewsPage;

export async function loadDetailNewsPage({params}) {
    return params.newsUrl;
}