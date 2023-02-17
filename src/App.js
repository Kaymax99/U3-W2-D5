import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Search } from "./components/Search";
import { SelectedCity } from "./components/SelectedCity";
import { Favourites } from "./components/Favourites";
import { NotFound } from "./components/NotFound";
import { CustomNavbar } from "./components/CustomNavbar";
import { Home } from "./components/Home";

function App() {
  const fetchFunction = async (url, query, setResult) => {
    try {
      const res = await fetch(url + query);
      if (res.ok) {
        const data = await res.json();
        setResult(data);
      } else {
        alert("Error trying to find cities");
      }
    } catch (error) {
      alert(
        "There was an error trying to contact the server, if the problem persists, contact our support team and reference this error: ",
        error
      );
    }
  };

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home fetchFunction={fetchFunction} />} />
        <Route
          path="/search"
          element={<Search fetchFunction={fetchFunction} />}
        />
        <Route path="/favourites" element={<Favourites />} />
        <Route
          path="/details/:cityCoords"
          element={<SelectedCity fetchFunction={fetchFunction} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
