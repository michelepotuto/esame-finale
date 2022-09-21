import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Axios from "axios";
import { counterActions } from "./logic/counter-store";
import AuthContext from "./logic/auth-context";
import { useDispatch } from "react-redux";
import Home from "./components/Home";
import Carrello from "./components/Carrello";

function App() {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);

  const dispatch = useDispatch();
  dispatch({ type: counterActions.START });

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getUser").then((response) => {
      setUser(response.data);
    });
  }, []);

  const usernameChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = user.find((u) => u.Codice === input);
    const obj = { ...userData };

    if (userData) {
      ctx.login(obj);
      navigate("/home");
    } else {
      alert("codice errato");
    }
  };

  return (
    <>
      {!ctx.isLoggedIn ? (
        <div>
          <hr></hr>
          <div className="container-out">
            <div className="h1">〶 BENVENUTO IN TICKET SHOP! 〶</div>
            <div className="h4"> EFFETTUA L' ACCESSO PER CONTINUARE</div>
          </div>
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="m-2">Codice cliente </label>
              <input
                autoComplete="on"
                onChange={usernameChangeHandler}
                type="password"
                name="pass"
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/Carrello" element={<Carrello />} />
            {/* <Route path="/dettaglio" element={<ProdottoDettagliato />} />
            <Route path="/carrello" element={<Carrello />} />
            <Route path="*" element={<App />} /> */}
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
