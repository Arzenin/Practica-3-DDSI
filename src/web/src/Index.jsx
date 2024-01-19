import { NativeRouter, Route, Routes } from 'react-router-native';
import { View } from 'react-native'; // Importa View desde 'react-native', no desde 'react'
import App from './App';
import AñadeStock from './AñadeStock';
import RestaStock from './RestaStock';
import VerStock from './VerStock';
import Mensaje from './Mensaje';

const Index = () => {
  return (
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/añade" exact element={<AñadeStock />} />
          <Route path="/resta" exact element={<RestaStock />} />
          <Route path="/ver" exact element={<VerStock />} />
          <Route path="/mensaje" exact element={<Mensaje/>}/>
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default Index;

