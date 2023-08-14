import './ListaOpciones.css';

const ListaOpciones = (props) => {
    const manejarCambio = (e) => {
      console.log('cambio', e.target.value)
      props.actualizarEquipo(e.target.value);
    }
    return (
      <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
          <option value='' disabled defaultValue='' hidden>Seleccione un equipo</option>
            { props.equipos.map( (equipo, i) => <option key={i} value={equipo}>{equipo}</option>)}
        </select>
      </div>
    );
}

export default ListaOpciones;