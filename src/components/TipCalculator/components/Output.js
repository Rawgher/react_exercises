export default function Output({ bill, tip }) {
  return (
    <h3>
      You will pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
