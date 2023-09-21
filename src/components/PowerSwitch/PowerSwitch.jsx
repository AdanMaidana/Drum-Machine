import "./PowerSwitch.css";

export default function PowerSwitch({ isOn, setIsOn, setCurrentSound, bankOn , setBankOn}) {
  const handleClick = () => {
    setIsOn(!isOn);
    setCurrentSound("");
    if (bankOn) { 
    setBankOn(!bankOn);
    } 
  }

  return (
    <div className="power-btn">
      <p>Power</p>
      <div className="power-switch" >
        <button className={isOn ? 'on' : 'off'} onClick={handleClick}></button>
      </div>
    </div>
  );
}
