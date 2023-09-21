import "./BankSwitch.css";

export default function BankSwitch({ bankOn, setBankOn, isOn, setCurrentSound }) {
  
  const handleClick = () => {
    setBankOn(!bankOn);
    setCurrentSound(!bankOn ? 'Smooth Piano Kit' : 'Heater Kit');
  }
  return (
    <div className="bank-btn">
      <p>Bank</p>
      <div className="bank-switch">
        <button
          className={bankOn && isOn ? "active" : "disabled"}
          disabled={!isOn}
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
}
