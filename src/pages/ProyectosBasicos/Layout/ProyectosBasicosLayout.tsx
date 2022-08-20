import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { SimpleCrud, CounterApp, HooksReact, CallBackExamples } from '../..';


export const LazyLayout = () => {
  return (
    <div className="container-fluid p-5">
      <h1>Ejemplos Pedro Araya Gálvez</h1>
      {/* Rutas hijas iran aquí */}

      <ul className="nav nav-pills ">
        <li className="nav-item">
          <NavLink to="simple-crud" className="nav-link">01 - Simple Crud</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="counter-app" className="nav-link">02 - CounterApp</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="hooks-react" className="nav-link">03 - Hooks React</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="callback-examples" className="nav-link">04 - Callback</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="simple-crud" element={<SimpleCrud />} />
        <Route path="counter-app" element={<CounterApp value={10} />} />
        <Route path="hooks-react" element={<HooksReact />} />
        <Route path="callback-examples" element={<CallBackExamples />} />

        <Route path="*" element={<Navigate to="simple-crud" replace />} />
      </Routes>


    </div>
  );
};

export default LazyLayout;
