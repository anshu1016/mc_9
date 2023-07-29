import React from 'react'
import "./category.css";
import { useData } from '../../context/DataContext';
import CategoryCard from '../../features/categoryCard/CategoryCard';
const Category = () => {
    const {state:{categories}} = useData();
   
  return (
    <div className='mainCategory'> <h1>Category</h1>
      <div className="categoryContainer">
       
    {
        categories.map((category)=><div className='cardsContainer' key={category.id}>
            <CategoryCard category={category} key={category.id}/>
        </div>)
    }
      </div>
    </div>
  )
}

export default Category
