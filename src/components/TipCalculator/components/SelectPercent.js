export default function SelectPercent({ percentage, onSetPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSetPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Service was okay (5%)</option>
        <option value="10">Service was good (10%)</option>
        <option value="15">Service was great (15%)</option>
        <option value="20">Service was amazing (20%)</option>
      </select>
    </div>
  );
}
