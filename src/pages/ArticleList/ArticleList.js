import React, { useState } from "react";
import getArticleList from "../../service/getArticleList";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit() {
    getArticleList(searchTerm)
      .then((data) => {
        setArticles(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }

  return (
    <div>
      <div>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter article name"
        />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div>
        {articles.length !== 0
          ? articles.result[0].artikli.map((article, index) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  flexDirection: "row",
                  columnGap: "40px",
                }}
              >
                <p style={{ width: "100px" }} key={index}>
                  {article.id}
                </p>
                <p style={{ width: "100px" }} key={index}>
                  {article.artikl_uid}
                </p>
                <p key={index}>{article.naziv}</p>
              </div>
            ))
          : "Lista je prazna!"}
      </div>
    </div>
  );
};

export default ArticleList;
