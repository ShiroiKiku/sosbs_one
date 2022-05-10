import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords, headTitle }) => {
    return (
        <>
            <Head>
                <meta keywords={"SEO теги" + keywords}></meta>
                <title>{headTitle}</title>
            </Head>
            <div className='navbar'>
                <A href={"/stream/live"} text='Стрим' />
                <A href={"/videochat/conference"} text='Конференция' />
                <A href={"/news"} text='Новости' />
            </div>
            <div>{children}</div>
            <style jsx>
                {`
                    .navbar {
                        background: green;
                        padding: 10px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;
