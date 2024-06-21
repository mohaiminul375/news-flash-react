import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/newsSlice";

const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector(state=>state.news);
useEffect(()=>{
dispatch(fetchNews({category,page}))
},[dispatch,category,page])

  console.log(articles)
  return (<div>

  </div>);
};

export default ArticleList;
