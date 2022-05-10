import React, { useState } from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const News = () => {
    const [news, setNews] = useState([
        { id: 1, title: "Новость 1 " },
        { id: 2, title: "Новость 2" },
        { id: 3, title: "Новость 3" },
    ]);
    return (
        <MainContainer>
            <div>
                <h1>Новости</h1>
                <ul>
                    {news.map((newid) => (
                        <li key={newid.id}>
                            <Link href={`/news/${newid.id}`}>
                                <a>{newid.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </MainContainer>
    );
};

export default News;
