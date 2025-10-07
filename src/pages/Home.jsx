

import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import "./Home.css";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    async function fetchRecipes() {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
      if (category) url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      if (area) url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;

      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []);
    }
    fetchRecipes();
  }, [search, category, area]);

  return (
    <div className="home-container">
      <h1>Find Delicious Recipes 🍲</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Beef">Beef</option>
          <option value="Seafood">Seafood</option>
          <option value="Dessert">Dessert</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>

        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">All Areas</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="American">American</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>

      <div className="recipe-grid">
        {recipes.length > 0 ? (
          recipes.map((r) => <RecipeCard key={r.idMeal} recipe={r} />)
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}
