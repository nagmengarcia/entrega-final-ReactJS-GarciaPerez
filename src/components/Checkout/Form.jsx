const Form = ({
  formData,
  handleChangeInput,
  handleSubmitForm,
  mailCoincidenceChecker,
  showFormButton,
}) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="name">Nombre y Apellido: </label>
      <input
        placeholder="Maximo Cosetti"
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChangeInput}
      />
      <label htmlFor="telefono">Telefono: </label>
      <input
        placeholder="0123 456789"
        type="text"
        name="telefono"
        value={formData.telefono}
        onChange={handleChangeInput}
      />
      <label htmlFor="mail">Mail: </label>
      <input
        placeholder="mcosetti@ejemplo.com"
        type="text"
        name="mail"
        value={formData.mail}
        onChange={handleChangeInput}
      />
      <label htmlFor="mailConfirmation">Confirmar mail: </label>
      <input
        placeholder="mcosetti@ejemplo.com"
        type="text"
        name="mailConfirmation"
        value={formData.mailConfirmation}
        onChange={handleChangeInput}
      />
      {showFormButton() ? (
        <button className="submit-form" type="submit">
          Confirmar pedido
        </button>
      ) : (
        <div className="submit-form-inactive">Confirmar pedido</div>
      )}
    </form>
  );
};

export default Form;
