import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { EjemploConsola, SubiendoEstados, CarroCompra } from '../..';
import ComponentesFuncionales from '../04-ComponentesFuncionales/ComponentesFuncionales';


export const LazyLayoutClases = () => {
  return (
    <div className="container-fluid p-5">
      <h1>Ejemplos Pedro Araya Gálvez</h1>
      {/* Rutas hijas iran aquí */}

      <ul className="nav nav-pills ">

        <li className="nav-item">
          <NavLink to="ejemplo-clases" className="nav-link">01 - Ejemplo Clases</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="subiendo-estados" className="nav-link">02 - Subiendo Estados</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="carro-compras" className="nav-link">03 - Carro Compra</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="componentes-funcionales" className="nav-link">04 - Componentes Funcionales</NavLink>
        </li>

      </ul>

      <Routes>
        <Route path="ejemplo-clases"           element={<EjemploConsola />} />
        <Route path="subiendo-estados"         element={<SubiendoEstados />} />
        <Route path="carro-compras"            element={<CarroCompra />} />
        <Route path="componentes-funcionales"  element={<ComponentesFuncionales />} />
        <Route path="*"                        element={<Navigate to="ejemplo-clases" replace />} />
      </Routes>


    </div>
  );
};

export default LazyLayoutClases;
