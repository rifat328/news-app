import React from "react";

const NewsCard = ({
  title,
  description,
  image,
  category,
  source,
  date,
  url,
}) => {
  const badge = {};
  function handleNavigation(url) {
    window.open(url, "_blank", "noopener", "noreferrer");
  }
  return (
    <section
      className="news-card"
      aria-label={`News: ${title}`}
      style={{ cursor: "pointer" }}
      onClick={() => handleNavigation(url)}
    >
      <img src={image} alt="" role="presentation" />
      <div className="content">
        <span aria-label={`News category: ${category}`} className="badge">
          {category}
        </span>
        <h2>{title}</h2>
        <p>{description}</p>
        <footer>
          <cite>Source: {source}</cite>
          <time datetime={date}>{date}</time>
        </footer>
      </div>
    </section>
  );
};

export default NewsCard;

// !The news card will need to have the following information displaying:
// Cover image
// Title
// Small description of the post
// News Category badge
// News channel name
// And the card be linked to the news source page ( url)
// Date Created
