import Loading from "./Loading";
import "../style/detail-news.css"

const DetailNews = (data) => {
    const news = data.news;
    if (news === undefined) {
        return (<Loading/>)
    }
    return (<>
        <h2 className={`h1 mb-4`}>{news.title}</h2>
        <div dangerouslySetInnerHTML={{__html: news.detail}}></div>
    </>)

}
export default DetailNews;