const Form = ({ formData, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <label>Nombre: </label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChangeInput}
      />
      <label>Telefono: </label>
      <input
        type="text"
        name="telefono"
        value={formData.telefono}
        onChange={handleChangeInput}
      />
      <label>Mail: </label>
      <input
        type="text"
        name="mail"
        value={formData.mail}
        onChange={handleChangeInput}
      />
      <button type="submit">Enviar orden</button>
    </form>
  );
};

export default Form;
