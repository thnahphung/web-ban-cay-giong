import Loading from "./Loading";
import "../style/detail-news.css"
import React from "react";

const DetailNews = (data) => {
    const news = data.news;
    if (news === undefined) {
        return (<div style={{height: "600px"}} className='d-flex justify-content-center align-items-center'>
            <Loading/>
        </div>)
    }
    return (<>
        <h2 className={`h1 mb-4`}>{news.title}</h2>
        <div dangerouslySetInnerHTML={{__html: news.detail}}></div>
    </>)

}
export default DetailNews;