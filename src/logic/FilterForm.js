import { useState } from "react";

const courseTypes = ["Torino", "Milano", "Roma", "Pisa", "Trieste", "Napoli"];

const FilterForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onFilter(filterCity, filterBand, filterCode);
  };

  const [filterCity, setFilterCity] = useState("");
  const cityChangeHandler = (event) => {
    setFilterCity(event.target.value);
  };

  const [filterBand, setFilterBand] = useState("");
  const bandChangeHandler = (event) => {
    setFilterBand(event.target.value);
  };

  const [filterCode, setFilterCode] = useState("");
  const codeChangeHandler = (event) => {
    setFilterCode(event.target.value);
  };

  return (
    <>
      <form className="menu-form" onSubmit={submitHandler}>
        <div className="form-row">
          <div className="form-block">
            <label htmlFor="course">Seleziona città</label>
            <select name="course" onChange={cityChangeHandler}>
              <option value="">(Nessuna selezione)</option>
              {courseTypes.map((ct) => (
                <option key={ct} value={ct}>
                  {ct}
                </option>
              ))}
            </select>
          </div>

          <div className="form-block">
            <label htmlFor="name"> Nome band</label>
            <input type="text" name="name" onChange={bandChangeHandler} />
          </div>

          <div className="form-block">
            <label htmlFor="name">Codice spettacolo</label>
            <input type="text" name="code" onChange={codeChangeHandler} />
          </div>

          <div className="form-block">
            <button type="submit">Filtra</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FilterForm;
