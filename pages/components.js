import React from 'react';

import Button from "../components/Buttons";

const Components = () =>{
    return (
        <div>
            <Button
            label="Continuar"
            className="bg-blue-200"
            />
        </div>
    )
}
/*
const Components = () => {
    return (
        <div>
            <Header label="Marca"/>
            <Button
            label="Continuar"
            size="medium"
            primary={true}
            />
            <Button
            label="Ir a la tienda para registrarme"
            size="medium"
            primary={true}
            icon="maps"
            />
            <Button
            label="Cancelar"
            primary={false}
            size="medium"
            />
            <Button
            label="Entendido"
            primary={false}
            size="small"
            backgroundColor="#d45353"
            colorContrast="#ffffff"
            />
            <Input type="text" label="Nombre completo" placeholder="Escriba su nombre" id="userName"/>
            <Input type="password" label="Contraseña" placeholder="Escriba su contraseña" id="Password"/>
            <Input type="select" label="Identidad" values={["CC", "NIT"]} id="tipoDocuemnto"/>
            <div className="bg-black p-1 flex">
                <Input type="number" placeholder="Mes" id="Password" dark={true}/>
                <Input type="number" placeholder="Año" id="Password" dark={true}/>
            </div>
            <Input type="checkbox"
            label="*Acepto los Términos y condiciones de la promoción Poker 4X5 y deseo recibir información acerca de Poker en mo correo electrónico."
            id="selectCheck"/>
            <CodeVerify lenght={5} />
            <Footer/>
        </div>
    )
};*/

export default Components;