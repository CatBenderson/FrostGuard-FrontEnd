import { useNavigate } from 'react-router-dom';
import './Camiones.css';
import Camion from './camion.png'

function CamionItem({camion}) {
    const history = useNavigate();


    return (
        <div className="card">
            <h2 className="h5"><strong>{camion.id}</strong></h2>
            <img className='img' src={Camion} alt='Icon camion' />
            <h5 className="h5">{camion.temperatura}</h5>
            <h5 className="h5">{camion.nombreC}</h5>
            <h5 className="h5">{camion.cantidad} {camion.carga}</h5>
            <h5 className="h5">{camion.latitud}, {camion.longitud}</h5>
            <button className="btnC" onClick={()=>history('/camionForm/'+camion.id)}>Actualizar</button>
            <button className="btnC">Eliminar</button>
        </div>
    );
}

export default CamionItem;