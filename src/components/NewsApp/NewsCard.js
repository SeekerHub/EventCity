export default function NewsCard(props){
    const dateStr = new Date("2023-09-15T16:44:03Z").toString();
    return (
        <div className="container">
            <div className="imageContain">
                <img src = "https://s.yimg.com/ny/api/res/1.2/6PF7rJPyg7PdjgRdODIEOA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02OTc-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/9b442a20-70e9-11ed-9fff-40645b7212ab" style={{width : "100%"}}></img>
            </div>
            <div className="bodyInfo">
                <div className="postedOn">{dateStr}</div>
                <div className="title">{"But our featured tech deal of the week comes"}</div>
                <div className="content">{"Apple may have dominated this week's tech news cycle, but our featured tech deal of the week comes courtesy of Valve: The company has discounted its Steam Deck handheld by up to 20 percent, matching the all-time low for what we consider the best portable gami…"}
                <a href=""> 
                <span>{"more"}</span>
                </a>
                </div>
                <div className="authorInfo">{"Jeff Dunn"}</div>
            </div>
        </div>
    )
}