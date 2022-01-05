import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Inicio from "./components/inicio/Inicio";
import Clientes from "./components/clientes/Clientes";
import Productos from "./components/productos/Productos";
import Ventas from "./components/ventas/Ventas";
import Reportes from "./components/reportes/Reportes";
import Links from "./components/layout/Links";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <Router>
      <div className="contenedor-app">
        <Sidebar />

        <div className="seccion-principal">
          <nav>
            <Links />
          </nav>
          <main>
            <div className="contenedor-tareas">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/inicio" element={<Inicio />} />
                <Route exact path="/clientes" element={<Clientes />} />
                <Route exact path="/productos" element={<Productos />} />
                <Route exact path="/ventas" element={<Ventas />} />
                <Route exact path="/reportes" element={<Reportes />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
