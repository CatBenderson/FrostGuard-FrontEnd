import { useState } from 'react';
import CamionI from './camion.png'
import Atras from './atras.png'
import './Camiones.css';
import { useNavigate } from 'react-router-dom';

function CamionForm() {
    const history = useNavigate();
    const [camion, setCamion] = useState({ chofer: "", temperatura: 0, objeto: "", cantidad: 0, latitud: 0, longitud: 0 });

    const handleInputChange = (e) => {
        setCamion({ ...camion, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(camion)
    }


    return (
        <>
            <div className="generalForm">
                <div>
                    <img className='imgR' style={{float:'left'}} src={Atras} alt='Icon camion' onClick={()=>history("/")}/>
                    <img className='img' src={CamionI} alt='Icon camion' />
                </div>
                <h1>Administración de camiones</h1>
                <div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className='divB'>
                            <label className='label'>Camion</label>
                            <input name='chofer' className="input" placeholder="Nombre chofer" onChange={handleInputChange} value={camion.chofer}></input>
                            <input name='temperatura' className="input" type="number" step="any" placeholder="Temperatura" onChange={handleInputChange} value={camion.temperatura}></input>
                        </div>
                        <div className='divB'>
                            <label className='label'>Carga</label>
                            <input name='objeto' className="input" placeholder="Carga" onChange={handleInputChange} value={camion.objeto}></input>
                            <input name='cantidad' type='number' className="input" placeholder="Cantidad" onChange={handleInputChange} value={camion.cantidad}></input>
                        </div>
                        <div className='divB'>
                            <label className='label'>Ubicación</label>
                            <input name='latitud' className="input" type="number" step="any" placeholder="Latitud" onChange={handleInputChange} value={camion.latitud} ></input>
                            <input name='longitud' className="input" type="number" step="any" placeholder="Longitud" onChange={handleInputChange} value={camion.longitud} ></input>
                        </div>
                        <button type='submit' className='btn'>Actualizar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CamionForm;