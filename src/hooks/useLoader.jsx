import { useState } from "react";
import { SyncLoader } from "react-spinners";

const useLoader = () => {
  const [cargando, setCargando] = useState(false);
  const mostrarLoader = () => setCargando(true);
  const ocultarLoader = () => setCargando(false);
  const pantallaCarga = (
    <div className="loader-container">
      <SyncLoader color="#2462E9" />
    </div>
  );

  return { cargando, mostrarLoader, ocultarLoader, pantallaCarga };
};

export default useLoader;
