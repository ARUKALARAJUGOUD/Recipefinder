

// import React, { useState, useEffect } from "react";
// import "./RecipeCard.css";

// export default function RecipeCard({ recipe }) {
//   const [isFav, setIsFav] = useState(false);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("favorites")) || [];
//     setIsFav(saved.some((r) => r.idMeal === recipe.idMeal));
//   }, [recipe.idMeal]);

//   const toggleFavorite = () => {
//     let saved = JSON.parse(localStorage.getItem("favorites")) || [];
//     if (isFav) {
//       saved = saved.filter((r) => r.idMeal !== recipe.idMeal);
//     } else {
//       saved.push(recipe);
//     }
//     localStorage.setItem("favorites", JSON.stringify(saved));
//     setIsFav(!isFav);
//   };

//   return (

//     <div className="recipe-card-container">
//         <div className="recipe-card">
//           <img src={recipe.strMealThumb} alt={recipe.strMeal} />
//           <div className="recipe-info">
//             <h3>{recipe.strMeal}</h3>
//             <button onClick={toggleFavorite} className="fav-btn">
//               {isFav ? "❤️" : "🤍"}
//             </button>
//           </div>
//         </div>
//     </div>

//   );
// }

import React, { useState, useEffect } from "react";
import RecipeModal from "./RecipeModal";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
  const [isFav, setIsFav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(saved.some((r) => r.idMeal === recipe.idMeal));
  }, [recipe.idMeal]);

  const toggleFavorite = () => {
    let saved = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFav) {
      saved = saved.filter((r) => r.idMeal !== recipe.idMeal);
    } else {
      saved.push(recipe);
    }
    localStorage.setItem("favorites", JSON.stringify(saved));
    setIsFav(!isFav);
  };

  return (
    <div className="recipe-card-container">
      <div className="recipe-card" onClick={() => setShowModal(true)}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <div className="recipe-info">
          <h3>{recipe.strMeal}</h3>
          <button
            className="fav-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal open when clicking heart
              toggleFavorite();
            }}
          >
            {isFav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>

      {showModal && (
        <RecipeModal recipe={recipe} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
