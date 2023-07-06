export default function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>What was the total bill?</label>
      <input type="text" placeholder="Bill Total" value={bill} onChange={(e) => onSetBill(Number(e.target.value))} />
    </div>
  );
}
