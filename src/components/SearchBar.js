import { useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "./SearchBar.css";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    redirect(`/search?search_query=${term}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
