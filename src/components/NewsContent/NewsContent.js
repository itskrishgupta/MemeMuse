import React, { useState } from "react";
// import { Button } from "@material-ui/core/styles";
const NewsContent = ({ newsArray }) => {
  const [load, loding] = useState(15)

  const loadMore = () =>{
    loding(load+15)
  }
  return (<>    <div className="app-content">
      <div className="download-text" style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',}}>
        <p>

          Shortly we are launching our App.  
        For the best Experience</p> 
        
       
      </div>
      {newsArray
        .filter((item, newsItem) => newsItem < load)
        .map((props) => {
          const {
            author,
            title,
            publishedAt,
            description,
            urlToImage,
            url,
            source: { name },
          } = props;

          return (
            <div className="newsCard">
              <img
                className="newsImage"
                src={
                  urlToImage
                    ? urlToImage
                    : "https://www.unityhighschool.org/wp-content/uploads/2014/08/default-placeholder.png"
                }
                alt="News"
              />
              <div className="newsText">
                {" "}
                <span className="title">
                  {title}
                  <br />
                  <span className="author">
                    <a href={url} target="_blank" rel="noreferrer">
                      <b>Muse</b>{" "}
                    </a>
                    <span className="muted">
                      by {author ? author : "unknown"} on{" "}
                      <span className="publishedAt">{publishedAt}</span>
                    </span>
                  </span>
                  <div className="lowerNewsText">
                    <div className="description">
                      <p>{description}</p>
                    </div>
                  </div>
                </span>
                <div>
                  <span className="readmore">
                    {" "}
                    <a href={url} target="_blank" rel="noreferrer">
                      read more at{" "}
                      <span style={{ color: "black" }}>
                        {" "}
                        <b>{name}</b>{" "}
                      </span>{" "}
                    </a>
                  </span>
                </div>
              </div>
              <div>
</div>

            </div>
          );
        })}
       
    </div> <div  >
        <button   style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  cursor: "pointer",
marginLeft: 550,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  marginRight: 450,
// alignItems:'flex-start',
  height: 48,
  padding: '0 30px',}}onClick={loadMore}>  <span  className="app-content" style={{ fontWeight: "bold"}}>Load More</span></button>
        </div>
    </>
    
  );
};

export default NewsContent;
