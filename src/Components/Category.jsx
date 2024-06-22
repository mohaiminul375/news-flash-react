import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/newsSlice";
const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.news.category);
  const categories = [
    "general",
    "business",
    "technology",
    "entertainment",
    "health",
    "science",
    "sports",
  ];
//   console.log("filter", category);
  return (
    <div className="my-5 flex justify-center">
      <select
        defaultValue={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="select select-bordered w-full max-w-xs"
      >
        <option value='all categories'>All categories</option>
       {
        categories.map((category,idx)=><option key={idx}>
            {category}
        </option>)
       }
      </select>
    </div>
  );
};

export default Category;
