import { useState, useEffect } from 'react';
import './App.css';
import BankSwitch from './components/BankSwitch/BankSwitch';
import SoundButton from './components/Button/button';
import PowerSwitch from './components/PowerSwitch/PowerSwitch';

export default function App() {
  const [isOn, setIsOn] = useState(true);
  const [bankOn, setBankOn] = useState(false);
  const [currentSound, setCurrentSound] = useState("");
  const [volume, setVolume] = useState(20); // Inicializa el volumen en 50
  const [lastKeyPressed, setLastKeyPressed] = useState(""); // Estado para la última tecla presionada

  // Registra el evento keydown y actualiza el estado con la última tecla presionada
  useEffect(() => {
    const handleKeyDown = (e) => {
      setLastKeyPressed(e.key.toUpperCase()); // Convierte la tecla en mayúsculas
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lastKeyPressed]);

  // Esta función maneja el cambio del control de volumen
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    setCurrentSound('Volume: ' + e.target.value);

    // Establecer un temporizador para realizar una acción después de 2 segundos
    const timer = setTimeout(() => {
      // Verificar si currentSound no ha cambiado durante 2 segundos
      if (currentSound !== "") {
        // Realizar la acción que deseas aquí
        setCurrentSound("");
      }
    }, 2000);

    // Limpia el temporizador si el volumen cambia antes de 2 segundos
    return () => clearTimeout(timer);
  };

  return (
    <div className="App">
      <div id='drum-machine'>
        <div className='teclado'>
          <SoundButton tecla="Q" url={bankOn ? 'Chord_1' : 'Heater-1'} isOn={isOn} soundName={bankOn ? 'Chord 1' : 'Heater 1'} setCurrentSound={setCurrentSound} volume={volume} />

          <SoundButton tecla="W" url={bankOn ? 'Chord_2' : 'Heater-2'} isOn={isOn} soundName={bankOn ? 'Chord 2' : 'Heater 2'} setCurrentSound={setCurrentSound} volume={volume} />

          <SoundButton tecla="E" url={bankOn ? 'Chord_3' : 'Heater-3'} isOn={isOn} soundName={bankOn ? 'Chord 3' : 'Heater 3'} setCurrentSound={setCurrentSound} volume={volume} />

          <SoundButton tecla="A" url={bankOn ? 'Give_us_a_light' : 'Heater-4_1'} isOn={isOn} soundName={bankOn ? 'Shaker' : 'Heater 4'} setCurrentSound={setCurrentSound} volume={volume} />

          <SoundButton tecla="S" url={bankOn ? 'Dry_Ohh' : 'Heater-6'} isOn={isOn} soundName={bankOn ? 'Open HH' : 'Clap'} setCurrentSound={setCurrentSound} volume={volume} />

          <SoundButton tecla="D" url={bankOn ? 'Bld_H1' : 'Dsc_Oh'} isOn={isOn} soundName={bankOn ? 'Closed HH' : 'Open HH'} setCurrentSound={setCurrentSound} volume={volume} />

          <SoundButton tecla="Z" url={bankOn ? 'punchy_kick_1' : 'Kick_n_Hat'} isOn={isOn} soundName={bankOn ? 'Punchy Kick' : "Kick n' Hat"} setCurrentSound={setCurrentSound} volume={volume} />

          <SoundButton tecla="X" url={bankOn ? 'side_stick_1' : 'RP4_KICK_1'} isOn={isOn} soundName={bankOn ? 'Side Stick' : 'Kick'} setCurrentSound={setCurrentSound} volume={volume} />

          <SoundButton tecla="C" url={bankOn ? 'Brk_Snr' : 'Cev_H2'} isOn={isOn} soundName={bankOn ? 'Snare' : 'Closed HH'} setCurrentSound={setCurrentSound} volume={volume} />

        </div>
        <div className='configuracion'>
          <PowerSwitch isOn={isOn} bankOn={bankOn} setIsOn={setIsOn} setBankOn={setBankOn} setCurrentSound={setCurrentSound} />
          <div>
            <p id='display'>{isOn ? currentSound : ""}</p>
            <div className='volumen'>
              <input
                type='range'
                className='volume-control'
                value={volume}
                onChange={handleVolumeChange}
                disabled={!isOn}
              />
            </div>
          </div>
          <BankSwitch bankOn={bankOn} setBankOn={setBankOn} isOn={isOn} setCurrentSound={setCurrentSound} />
        </div>
      </div>
    </div>
  );
}
