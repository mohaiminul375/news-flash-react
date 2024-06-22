import { useSelector } from "react-redux";
import Article from "../Components/Article";

const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    console.log('favorite', favorites)
    return (
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
            {favorites.map((article, idx) => (
              <Article key={idx} article={article} idx={idx}></Article>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    );
};

export default Favorites;