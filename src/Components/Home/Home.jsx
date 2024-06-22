import { Helmet } from "react-helmet-async";
import ArticleList from "../ArticleList";
import Category from "../Category";


const Home = () => {
    return (
        <div className="">
            <Helmet>
             <title>Home</title>
            </Helmet>
            <Category></Category>
            <ArticleList></ArticleList>
        </div>
    );
};

export default Home;