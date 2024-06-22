import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

const Article = ({ article, idx }) => {
  console.log(article);
  const { title, urlToImage, description } = article;
  // favorite
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.find((fav) => fav.url === article.url);
  console.log("isFavorite");
  //   favorite func
  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };
  return (
    <tr className="border-b-[#112950]">
      <th>{idx + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={urlToImage} alt="article_img" />
            </div>
          </div>
          <div>
            <div title={title} className="font-bold">
              {title.length > 20 ? title.slice(0, 20) + "..." : title}
            </div>
          </div>
        </div>
      </td>
      <td>
        {description?.length > 20
          ? description.slice(0, 20) + "..."
          : description}
      </td>
      <td>
        <Link
          className="hover:cursor-pointer underline"
          to={`/article/${title}`}
        >
          Read More
        </Link>
        <button onClick={handleFavorite}>
            {
                isFavorite? <MdOutlineFavorite title='remove from favorite' className="text-xl text-red-600" /> : <MdFavoriteBorder
                title='add to favorite'
                className=" text-xl" />
            }
          
        </button>
      </td>
    </tr>
  );
};

export default Article;
