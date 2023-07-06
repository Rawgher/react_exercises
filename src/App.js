import FlashCards from './components/FlashCards/FlashCards';
import './App.css';
import DateCounterV2 from './components/DateCounterV2/DateCounterV2';
import DateCounterV1 from './components/DateCounterV1/DateCounterV1';
import Accordion from './components/Accordion/Accordion';
import AccordionV2 from './components/AccordionV2/AccordionV2';
import TipCalculator from './components/TipCalculator/TipCalculator';

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
      <div className="linebreak"></div>
      <AccordionV2 />
      <div className="linebreak"></div>
      <TipCalculator />
    </div>
  );
}

export default App;
