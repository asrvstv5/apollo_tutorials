import logo from './logo.svg';
import './App.css';
import {
  useQuery,
  gql
} from "@apollo/client";


const EXCHANGE_RATES = gql`
query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
  }
}
`;

function ExchangeRates() {
const { loading, error, data } = useQuery(EXCHANGE_RATES);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

return data.rates.map(({ currency, rate }) => (
  <div key={currency}>
    <p>
      {currency}: {rate}
    </p>
  </div>
));
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Apollo Tutorial for Mesh
        </p>
        <ExchangeRates />
      </header>
    </div>
  );
}

export default App;
