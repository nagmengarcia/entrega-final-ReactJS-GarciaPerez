const Formulario = () => {
  return (
    <div>
      <div>
        <form>
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={datosForm.nombre}
            onChange={handleChangeInput}
          />
          <label>Telefono: </label>
          <input
            type="text"
            name="telefono"
            value={datosForm.telefono}
            onChange={handleChangeInput}
          />
          <label>Mail: </label>
          <input
            type="text"
            name="mail"
            value={datosForm.mail}
            onChange={handleChangeInput}
          />
          <button type="submit">Enviar orden</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
