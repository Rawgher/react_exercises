import { useState } from 'react';
import BillInput from './components/BillInput';
import Output from './components/Output';
import Reset from './components/Reset';
import SelectPercent from './components/SelectPercent';
import './tipcalculator.styles.css';

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  const tip = bill * ((percent1 + percent2) / 2 / 100);

  function handleReset() {
    setBill('');
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div>
      <h1>Tip Calculator</h1>
      <div className="tip-holder-div">
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercent percentage={percent1} onSetPercentage={setPercent1}>
          How was the service?
        </SelectPercent>
        <SelectPercent percentage={percent2} onSetPercentage={setPercent2}>
          How did your friend feel about the service?
        </SelectPercent>

        {bill > 0 && (
          <>
            <Output bill={bill} tip={tip} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    </div>
  );
}

export default TipCalculator;
