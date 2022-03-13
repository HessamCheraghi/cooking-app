import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

//styles
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();

  const url = `http://localhost:8000/recipes/${id}`;

  const { data: recipe, isPending, error } = useFetch(url);

  const redirect = useNavigate();

  const { mode } = useTheme();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        redirect("/");
      }, 3000);
    }
  }, [error, redirect]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p className="loading">Loading ...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}> {ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
