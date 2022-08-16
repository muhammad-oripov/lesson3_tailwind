import './App.css';
import Header from './Components/Header';
import Boxes from './Components/Boxes';


let arr = [
  {
    id: 1,
    product: 'Robinhood is limiting purchases of stocks: AMC, Blackberry, Nokia and GameStop',
    by: 'By Miner49er',
    date: '10 Dec 2017'
  },
  {
    id: 2,
    product: 'Show HN: A reto video game comsole live been working on in my free time',
    by: 'By pkiller',
    date: '13 Mar 2019'
  },
  {
    id: 3,
    product: 'Show HN: Airmash - Multiplayer Missile Warfare HTML5 Game',
    by: 'By fivesigma',
    date: '10 Dec 2017'
  },
  {
    id: 4,
    product: 'Lee Sedol Beats AplhaGo in Game 4',
    by: 'By jswt001',
    date: '13 Dec 2016'
  },
  {
    id: 5,
    product: 'CityBound - An open source city simulation game in Rust',
    by: 'By Miner49er',
    date: '11 May 2021'
  },
  {
    id: 6,
    product: 'Lee Sedol Beats AplhaGo in Game 4',
    by: 'Game 10',
    date: '8 Feb 2022'
  }
]

function App() {
  return (
    <div className="App">
      <Header/>

    <div className='box'>
      {
        arr.map((item, index) => <Boxes key={index} item={item} />)
      }
    </div>
      </div>
  );
}

export default App;


// {
//   arr.map((item, index) => <Boxes key={index} item={item} />)
// }