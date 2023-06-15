import React, {useEffect} from "react";
import CardNews from "./CardNews";
import {useDispatch, useSelector} from "react-redux";
import {loadListNews} from "../store/Action";
import NewsApi from "../api/NewsApi";

const ListNews = () => {
    const listNews = useSelector(state => state.listNews);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchNews = async () => {
            const data = await NewsApi.getAll();
            dispatch(loadListNews(data))
        }
        fetchNews().catch(console.error);
    }, [])

    // if (listNews.length === 0) {
    //     return (<div>loading...</div>)
    // }

    return (
        <>
            {listNews.map(news => (
                <>
                    <CardNews news={news} key={news.id}/>
                    <hr className="my-3"/>
                </>
            ))}
        </>
    )

}
export default ListNews;