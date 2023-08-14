import { useState } from 'react';
import './Formulario.css';
import Campo from '../Campo/Campo.js';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton';

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState('');

    const [titulo, actualizarTitulo] = useState('');
    const [color, actualizarColor] = useState('');

    const { registrarColaborador, crearEquipo } = props;

    const controlarEnvio = (e) => {
      e.preventDefault();
      console.log('controla el envio')
      let datosEnviar = {
        nombre: nombre, //cuando la llave y valor son de mismo nombre se coloca uno solo ej. (nombre: nombre) seria igual a nombre
        puesto: puesto,
        foto: foto,
        equipo: equipo
      }
      registrarColaborador(datosEnviar);
    };
    const controlarEquipo = (e) => {
      e.preventDefault();
      crearEquipo({titulo, colorPrimario: color});

    }

    return (
      <section className="formulario">
        <form onSubmit={controlarEnvio}>
          <h2>Completa el formulario para crear el colaborador.</h2>
          <Campo
            titulo="Nombre"
            placeholder="Ingrese su nombre"
            valor={nombre}
            actualizarValor={actualizarNombre}
            required
          />
          <Campo
            titulo="Puesto"
            placeholder="Ingrese el puesto"
            valor={puesto}
            actualizarValor={actualizarPuesto}
            required
          />
          <Campo
            titulo="Foto"
            placeholder="Ingrese enlace de foto"
            required
            valor={foto}
            actualizarValor={actualizarFoto}
          />
          <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
          />
          <Boton>Crear</Boton>
        </form>
        <form onSubmit={controlarEquipo}>
          <h2>Completa el formulario para crear el equipo.</h2>
          <Campo
            titulo="Titulo"
            placeholder="Ingrese su titulo"
            valor={titulo}
            actualizarValor={actualizarTitulo}
            required
          />
          <Campo
            titulo="Color"
            placeholder="Ingrese el color en Hex"
            valor={color}
            actualizarValor={actualizarColor}
            required
            type="color"
          />
          <Boton>Registrar Equipo</Boton>
        </form>
      </section>
    );
}

export default Formulario;