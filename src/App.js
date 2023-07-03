import FlashCards from './components/FlashCards/FlashCards';
import './App.css';
import DateCounterV2 from './components/DateCounterV2/DateCounterV2';
import DateCounterV1 from './components/DateCounterV1/DateCounterV1';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <FlashCards />
      <div className="linebreak"></div>
      <DateCounterV1 />
      <div className="linebreak"></div>
      <DateCounterV2 />
      <div className="linebreak"></div>
      <Accordion />
    </div>
  );
}

export default App;
