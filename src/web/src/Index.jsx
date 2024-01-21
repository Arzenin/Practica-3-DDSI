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
import Ingrediente from './Menú/Ingrediente/Ingrediente';
import Receta from './Menú/Receta/Receta';
import VerPedidos from './Pedidos/VerPedidos';
import VerPedidosActivos from './Pedidos/VerPedidosActivos';
import VerPedidosInactivos from './Pedidos/VerPedidosInactivos';
import Alergeno from './Menú/Alergeno/Alergeno';
import CrearIngrediente from './Menú/Ingrediente/CrearIngrediente';
import CrearReceta from './Menú/Receta/CrearReceta';
import CrearReserva from './Reservas/CrearReserva';
import CrearTrabajadores from './Trabajadores/CrearTrabajadores';
import CrearAlergeno from './Menú/Alergeno/CrearAlergeno';
import EditarIngrediente from './Menú/Ingrediente/EditarIngrediente';
import EditarAlergeno from './Menú/Alergeno/EditarAlergeno';

const Index = () => {
  return (
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path='/menu' exact element={<Menú />}/>
          <Route path='/clientes' exact element={<Clientes />}/>
          <Route path='/pedidos' exact element={<Pedidos />}/>
          <Route path='/reservas' exact element={<Reservas />}/>
          <Route path='/trabajadores' exact element={<Trabajadores />}/>
          <Route path="/mensaje" exact element={<Mensaje />}/>
          <Route path="/crearcliente" exact element={<CrearCliente />}/>
          <Route path="/editarcliente" exact element={<EditarCliente />}/>
          <Route path="/ingrediente" exact element={<Ingrediente />}/>
          <Route path="/receta" exact element={<Receta />}/>
          <Route path="/verpedidos" exact element={<VerPedidos />}/>
          <Route path="/verpedidosactivos" exact element={<VerPedidosActivos />}/>
          <Route path="/verpedidosinactivos" exact element={<VerPedidosInactivos />}/>
          <Route path="/alergeno" exact element={<Alergeno />}/>
          <Route path="/crearingrediente" exact element={<CrearIngrediente />}/>
          <Route path="/crearreceta" exact element={<CrearReceta />}/>
          <Route path="/crearreserva" exact element={<CrearReserva/>}/>
          <Route path="/creartrabajadores" exact element={<CrearTrabajadores />}/>
          <Route path="/crearalergeno" exact element={<CrearAlergeno />}/>
          <Route path="/editaringrediente" exact element={<EditarIngrediente />}/>
          <Route path="/editaralergeno" exact element={<EditarAlergeno />}/>
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default Index;

