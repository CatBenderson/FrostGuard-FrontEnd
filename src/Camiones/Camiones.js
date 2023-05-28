import { useState } from 'react';
import './Camiones.css';
import CamionesList from './CamionesList';

function Camiones() {
  const [camion, setCamion] = useState({ chofer: "", temperatura: 0, objeto: "", cantidad: 0, latitud: 0, longitud: 0 });

  const handleInputChange = (e) => {
    setCamion({ ...camion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(camion)
  }

    return (
      <div className="general">
        <h1>Administración de camiones</h1>
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <div className='divB'>
              <label className='label'>Camion</label>
              <input name='chofer' className="input" placeholder="Nombre chofer" onChange={handleInputChange} ></input>
              <input name='temperatura' className="input" type="number" step="any" placeholder="Temperatura" onChange={handleInputChange} ></input>
            </div>
            <div className='divB'>
              <label className='label'>Carga</label>
              <input name='objeto' className="input" placeholder="Carga" onChange={handleInputChange} ></input>
              <input name='cantidad' type='number' className="input" placeholder="Cantidad" onChange={handleInputChange} ></input>
            </div>
            <div className='divB'>
              <label className='label'>Ubicación</label>
              <input name='latitud' className="input" type="number" step="any" placeholder="Latitud" onChange={handleInputChange} ></input>
              <input name='longitud' className="input" type="number" step="any" placeholder="Longitud" onChange={handleInputChange} ></input>
            </div>
            <button type='submit' className='btn'>Agregar</button>
          </form>
          <div>
            <label>{camion.chofer}</label>
            <label>{camion.temperatura}</label>
            <label>{camion.cantidad}</label>
            <label>{camion.objeto}</label>
            <label>{camion.latitud}</label>
            <label>{camion.longitud}</label>
          </div>
        </div>
        <div className="divCard">
          {/* <div className="card">
          <h2 className="h5"><strong>1</strong></h2>
          <img className='img' src={Camion} />
          <h5 className="h5">Ame Huerta Mendoza</h5>
          <h5 className="h5">250 Manzanas</h5>
          <h5 className="h5">-19.2345666,  19.823456</h5>
          <button className="btnC">Actualizar</button>
          <button className="btnC">Eliminar</button>
        </div> */}
          <CamionesList />
        </div>
      </div>
    );
  }

  export default Camiones;