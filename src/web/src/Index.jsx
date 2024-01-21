import { NativeRouter, Route, Routes } from 'react-router-native';
import { View } from 'react-native'; // Importa View desde 'react-native', no desde 'react'
import App from './App';
import Menú from './Menú/Menu';
import Clientes from './Clientes/Clientes';
import Pedidos from './Pedidos/Pedidos';
import Reservas from './Reservas/Reservas';
import Trabajadores from './Trabajadores/Trabajadores';
import Mensaje from './Mensaje';
import CrearCliente from './Clientes/CrearCliente';
import EditarCliente from './Clientes/EditarCliente';
import Alergenos from './Menú/Alérgenos';
import CrearAlergeno from './Menú/CrearAlérgenos';
import AlergenosClientes from './Clientes/AlergenosClientes';
import ModificarAlergenosCliente from './Clientes/ModificarAlergenosClientes';
import Ingredientes from './Menú/Ingredientes';
import CrearIngrediente from './Menú/CrearIngrediente';
import CrearTrabajador from './Trabajadores/CrearTrabajador';
import EditarTrabajador from './Trabajadores/EditarTrabajador';
import CrearReceta from './Menú/CrearReceta';
import VerReceta from './Menú/VerReceta';
import VerPedidosActivos from './Pedidos/VerPedidosActivos';
import VerPedidosInactivos from'./Pedidos/VerPedidosInactivos';
import CrearPedido from './Pedidos/CrearPedido';
import FinalizarPedido from './Pedidos/FinzalizarPedido'
import CrearReserva from './Reservas/CrearReserva';
import EditarReserva from './Reservas/EditarReserva';
import Mesas from './Reservas/Mesas';
import CrearMesa from './Reservas/CrearMesa';
import EditarMesa from './Reservas/EditarMesa';
import InfoPedido from './Reservas/InfoPedido';

const Index = () => {
  return (
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path='/menu' exact element={<Menú/>}/>
          <Route path='/clientes' exact element={<Clientes/>}/>
          <Route path='/pedidos' exact element={<Pedidos/>}/>
          <Route path='/reservas' exact element={<Reservas/>}/>
          <Route path='/trabajadores' exact element={<Trabajadores/>}/>
          <Route path="/mensaje" exact element={<Mensaje/>}/>
          <Route path="/crearcliente" exact element={<CrearCliente/>}/>
          <Route path="/editarcliente" exact element={<EditarCliente/>}/>
          <Route path="/alergenos" exact element={<Alergenos/>}/>
          <Route path="/crearalergeno" exact element={<CrearAlergeno/>}/>
          <Route path="/alergenosclientes" exact element={<AlergenosClientes/>}/>
          <Route path="/clientes/moficicaralergenos" exact element={<ModificarAlergenosCliente/>}/>
          <Route path="/ingredientes" exact element={<Ingredientes/>}/>
          <Route path="/crearingrediente" exact element={<CrearIngrediente/>}/>
          <Route path="/creartrabajador" exact element={<CrearTrabajador/>}/>
          <Route path="/editartrabajador" exact element={<EditarTrabajador/>}/>
          <Route path="/crearreceta" exact element={<CrearReceta/>}/>
          <Route path="/verreceta" exact element={<VerReceta/>}/>
          <Route path="/verpedidosactivos" exact element={<VerPedidosActivos />}/>
          <Route path="/verpedidosinactivos" exact element={<VerPedidosInactivos />}/>
          <Route path="/crearpedido" exact element={<CrearPedido/>}/>
          <Route path="/finalizarpedido" exact element={<FinalizarPedido/>}/>
          <Route path="/crearreserva" exact element={<CrearReserva/>}/>
          <Route path="/editarreserva" exact element={<EditarReserva/>}/>
          <Route path='/mesas' exact element={<Mesas/>}/>
          <Route path="/crearmesa" exact element={<CrearMesa/>}/>
          <Route path="/editarmesa" exact element={<EditarMesa/>}/>
          <Route path="/infopedido" exact element={<InfoPedido/>}/>
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default Index;

