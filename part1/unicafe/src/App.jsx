import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" action={setGood} />
      <Button text="Neutral" action={setNeutral} />
      <Button text="Bad" action={setBad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Button = ({ text, action }) => {
  return (
    <button onClick={() => action((prevState) => (prevState += 1))}>
      {text}
    </button>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / (good + neutral + bad)) * 100;

  return (
    <div>
      <h2>Statics</h2>
      {all <= 0 ? (
        <p>No Feedback Given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive} />
          </tbody>
        </table>
      )}
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

export default App;
