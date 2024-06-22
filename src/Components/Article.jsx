import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

const Article = ({ article, idx }) => {
  // console.log(article);
  const { title, urlToImage, description } = article;
  // favorite
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.find((fav) => fav.url === article.url);
  
  //   favorite func
  const handleFavorite = () => {
    if (isFavorite) {
        toast.success('deleted succeed')
      dispatch(removeFavorite(article));
    } else {
        toast.success('add to favorite succeed')
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
        {description?  (description?.length > 20
          ? description.slice(0, 20) + "..."
          : description):'description not found'}
          
      </td>
      <td className="flex items-center gap-5">
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
      <Toaster position="top-center"/>
    </tr>
  );
};
Article.propTypes ={
article:PropTypes.object,
idx:PropTypes.number
}
export default Article;
