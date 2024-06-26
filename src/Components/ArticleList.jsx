import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews,setPage } from "../redux/newsSlice";
import { RotateLoader } from "react-spinners";
import Article from "./Article";
import Pagination from "./Pagination";

const ArticleList = () => {
  const dispatch = useDispatch();
  //   get data from redux store
  const { articles, status, error, category, page,totalPages,language } = useSelector(
    (state) => state.news
  );

  //   fetch api
  useEffect(() => {
    dispatch(fetchNews({ category, page,language }));
  }, [dispatch, category, page,language]);
  // handle error and loading
  if (status === "loading")
    return (
      <div className="flex justify-center items-center">
        <RotateLoader color="#112950" />
      </div>
    );
    // console.log(totalPages)
  if (status === "failed")
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-center text-red-600">{error}</h2>
      </div>
    );

  //   console.log(articles);
  return (
    <div>
      <div className="overflow-x-auto max-w-6xl mx-auto mt-10">
        <table className="table ">
          {/* head */}
          <thead className="bg-[#112950] text-white">
            <tr className="text-base rounded-md">
              <th>Sl No.</th>
              <th>Image and Title</th>
              <th>Summary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* row 2 */}
            {articles.map((article, idx) => (
              <Article key={idx} article={article} idx={idx}></Article>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={(page) => dispatch(setPage(page))}></Pagination>
    </div>
  );
};

export default ArticleList;
