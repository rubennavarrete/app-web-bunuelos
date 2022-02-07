import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Inicio from "./components/inicio/Inicio";
import Clientes from "./components/clientes/Clientes";
import Productos from "./components/productos/Productos";
import Ventas from "./components/ventas/Ventas";
import Reportes from "./components/reportes/Reportes";

import InicioState from "./context/Inicio/inicioState";
import ClientesState from "./context/Clientes/clientesState";
import ProductosState from "./context/Productos/productoState";
import VentasState from "./context/ventas/ventaState";
import ReporteState from "./context/Reportes/reportesState";

import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";

function App() {
  return (
    <InicioState>
      <ClientesState>
        <ProductosState>
          <VentasState>
            <ReporteState>
              <AlertaState>
                <AuthState>
                  <Router>
                    <Routes>
                      <Route exact path="/" element={<Login />} />
                      <Route exact path="/inicio" element={<Inicio />} />
                      <Route exact path="/clientes" element={<Clientes />} />
                      <Route exact path="/productos" element={<Productos />} />
                      <Route exact path="/ventas" element={<Ventas />} />
                      <Route exact path="/reportes" element={<Reportes />} />
                    </Routes>
                  </Router>
                </AuthState>
              </AlertaState>
            </ReporteState>
          </VentasState>
        </ProductosState>
      </ClientesState>
    </InicioState>
  );
}

export default App;
