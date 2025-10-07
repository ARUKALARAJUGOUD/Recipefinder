
import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import "./Favorites.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <div className="favorites-container">
      <h1>❤️ Your Favorite Recipes</h1>
      <div className="recipe-grid">
        {favorites.length > 0 ? (
          favorites.map((r) => <RecipeCard key={r.idMeal} recipe={r} />)
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
}
