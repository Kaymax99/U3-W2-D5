import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Search } from "./components/Search";
import { SelectedCity } from "./components/SelectedCity";
import { Favourites } from "./components/Favourites";
import { NotFound } from "./components/NotFound";
import { CustomNavbar } from "./components/CustomNavbar";
import { Home } from "./components/Home";
import { CustomFooter } from "./components/CustomFooter";

function App() {
  const fetchFunction = async (baseUrl, searchType, query, setResult) => {
    try {
      const res = await fetch(
        `${baseUrl}${searchType}?&units=metric&limit=5&appid=6f7b75831402626eb36d5abd608f5d51&` +
          query
      );
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
  const timeImgFunction = (
    dependecy,
    timeValue,
    setTimeFunction,
    setImgFunction
  ) => {
    if (dependecy) {
      /* console.log(dependecy); */
      const date = new Date();
      const hours = date.getHours();
      const mins = date.getMinutes().toString();
      if (hours < 10) {
        if (mins < 10) {
          setTimeFunction("0" + hours.toString() + ":0" + mins);
        } else {
          setTimeFunction("0" + hours.toString() + ":" + mins);
        }
      } else {
        if (mins < 10) {
          setTimeFunction(hours.toString() + ":0" + mins);
        } else {
          setTimeFunction(hours.toString() + ":" + mins);
        }
      }
      /* console.log(fullTime); */

      // Function to switch the first card's BG based on local time. Day bg between 7am to 6 pm, night in other cases
      switch (true) {
        case timeValue >= 18:
          setImgFunction(
            `"https://media.istockphoto.com/photos/deep-space-background-picture-id178149253?b=1&k=20&m=178149253&s=612x612&w=0&h=jSfVvSlCbTGZSWrso8tcllsuCSO5A_YpPLFAPEByh0w="`
          );
          break;
        case timeValue >= 7:
          setImgFunction(
            `"https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="`
          );
          break;

        default:
          setImgFunction(
            `"https://media.istockphoto.com/photos/deep-space-background-picture-id178149253?b=1&k=20&m=178149253&s=612x612&w=0&h=jSfVvSlCbTGZSWrso8tcllsuCSO5A_YpPLFAPEByh0w="`
          );
          break;
      }
    }
  };

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fetchFunction={fetchFunction}
              timeImgFunction={timeImgFunction}
            />
          }
        />
        <Route
          path="/search"
          element={<Search fetchFunction={fetchFunction} />}
        />
        <Route path="/favourites" element={<Favourites />} />
        <Route
          path="/details/:cityCoords"
          element={
            <SelectedCity
              fetchFunction={fetchFunction}
              timeImgFunction={timeImgFunction}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
