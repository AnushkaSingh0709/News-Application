import image from '../assets/image.jpg'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3">
      
        <img
          src={src?src:image}
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
          className="card-img-top"
          
        />

      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title Available"}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "News is information about current events that is reported through various media"}
        </p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
