import React, { useState } from "react";
import CamionItem from "./CamionItem";

const CamionesList = () => {
    const [camiones, setCamiones] = useState([{
        id: 0,
        nombreC: "Ameyalli Huerta Mendoza",
        temperatura: 24.1,
        carga: "Manzanas",
        cantidad: 250,
        latitud: -19.2345666,
        longitud: 19.823456
    },{
        id: 1,
        nombreC: "Ameyalli Huerta Mendoza",
        temperatura: 24.1,
        carga: "Manzanas",
        cantidad: 250,
        latitud: -19.2345666,
        longitud: 19.823456
    },{
        id: 2,
        nombreC: "Ameyalli Huerta Mendoza",
        temperatura: 24.1,
        carga: "Manzanas",
        cantidad: 250,
        latitud: -19.2345666,
        longitud: 19.823456
    },{
        id: 3,
        nombreC: "Ameyalli Huerta Mendoza",
        temperatura: 24.1,
        carga: "Manzanas",
        cantidad: 250,
        latitud: -19.2345666,
        longitud: 19.823456
    }])
    // const [camiones,setCamiones]=useState([{id:0, nombreC:"",temperatura:0.0,carga:"",cantidad:0,latitud:0.0,longitud:0.0}])

    return (
        <>
            {camiones.map((camion) => (
                <CamionItem camion={camion} />
            ))}
        </>
    );
};

export default CamionesList;