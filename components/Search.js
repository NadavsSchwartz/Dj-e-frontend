import { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Events"
          className="rounded-lg"
        />
        <input
          type="submit"
          className="text-white bg-blueGray-800 ml-2 px-1 py-4 uppercase font-bold text-xs"
        />
      </form>
    </div>
  );
};
export default Search;
