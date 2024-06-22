import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { title } = useParams();
  console.log(title);
  const article = useSelector((state) => state.news.articles);
  const details = article.find((art) => art.title === title);
  // console.log(article)
  console.log(details);
  const { source, title: n_title, author, publishedAt, urlToImage,description } = details;
  return (
    <div className="border-2 border-[#112950] rounded-md md:max-w-5xl mx-auto mt-10 p-5">
      <div>
        <h2 className="text-xl font-bold">{n_title}</h2>
        <p className="font-bold">
          Source: {source?.name ? source.name : "Not Found"}
        </p>
        <p className="font-bold">Author: {author}</p>
        <p className="font-bold">
          Published: {new Date(publishedAt).toDateString()}
        </p>
        <hr className="my-5 border-5 border-[#112950]" />
        <img src={urlToImage} alt='article img' />
        <hr className="my-5 border-5 border-[#112950]" />
        <p>
          {description? description: 'description not found'}
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;
