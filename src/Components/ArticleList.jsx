import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/newsSlice";
import { RotateLoader } from "react-spinners";
import Article from "./Article";

const ArticleList = () => {
  const dispatch = useDispatch();
  //   get data from redux store
  const { articles, status, error, category, page } = useSelector(
    (state) => state.news
  );
  //   fetch api
  useEffect(() => {
    dispatch(fetchNews({ category, page }));
  }, [dispatch, category, page]);
  // handle error and loading
  if (status === "loading")
    return (
      <div className="flex justify-center items-center">
        <RotateLoader color="#112950" />
      </div>
    );
  if (status === "failed")
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-center text-red-600">{error}</h2>
      </div>
    );

//   console.log(articles);
  return (<div>{articles.map((article,idx)=><Article key={idx}
  article={article}
  ></Article>)}</div>);
};

export default ArticleList;
