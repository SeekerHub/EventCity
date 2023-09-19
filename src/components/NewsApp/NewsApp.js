import NewsCard from "./NewsCard"
import "./news.css"
export default function NewsApp(){
    return (
        <div className="container-cards">
            <div className="cards">
            <NewsCard />
            <NewsCard />
            </div>
        </div>
    )    
}