import { useState} from "react";
import "./style.css";
import { currencies } from "../currencies";
import Result from "./Result";

const Form = ({ result, calculateResult }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__fieldset">
        <h1 className="form__heading">Kalkulator walut</h1>
        <p>
          <label className="form__labelText">Kwota w zł:</label>
          <input
            value={amount}
            onChange={({target}) => setAmount(target.value)}
            placeholder="Wpisz kwotę w zł"
            className="form__field"
            required
            step="0.01"
            type="number"
          />
        </p>
        <p>
          <label className="form__labelText">Waluta:</label>
          <select
            value={currency}
            className="form__field"
            onChange={({target}) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </select>
        </p>
      </div>
      <p>
      <button className="form__button">Przelicz!</button>
      </p>
      <p className="form__comment">Kursy NBP z dnia 21.04.2023 r.</p>

      <Result result={result} />
    </form>
  );
};

export default Form;
