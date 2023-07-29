import React from "react";
import "./categoryCard.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";

const CategoryCard = ({ category }) => {
 
  const { dispatch } = useData();
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    dispatch({ type: "GET_PARTICULAR_CATEGORY", payload: category });
    console.log(category.category, "navigate");
    navigate(`/categories/${category.category}`);
  };

  return (
    <div className="categoryCardContainer">
      <div className="Wholecard" onClick={handleCategoryClick}>
        <div className="img">
          <img src={category.thumbnail} alt="thumbnail" />
        </div>
        <div className="content">{category.category}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
