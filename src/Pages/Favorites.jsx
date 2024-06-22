import { useSelector } from "react-redux";
import Article from "../Components/Article";
import { Helmet } from "react-helmet-async";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  console.log("favorite", favorites);
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto mt-16">
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <div>
        <h2 className="text-center text-4xl mb-6 font-bold font-play_write text-[#F56D04]">
          Favorite Article
        </h2>
      </div>
      <table className="table ">
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
          {favorites.map((article, idx) => (
            <Article key={idx} article={article} idx={idx}></Article>
          ))}
        </tbody>
        {/* foot */}
      </table>
      {!favorites || (
        <h2 className="mt-5 text-center text-4xl text-[#F56D04]">
          No article Added yet
        </h2>
      )}
      {/* head */}
    </div>
  );
};

export default Favorites;
