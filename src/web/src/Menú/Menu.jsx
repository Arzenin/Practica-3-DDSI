import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigate } from 'react-router-native';
import axios from 'axios';
import { DataTable, FAB, IconButton} from 'react-native-paper';

const Menú = () => {
  const navigate = useNavigate();
  const [filas, setFilas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [itemsPorPagina] = useState(10);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/recetas`);
      const resultado = response.data[0];
      // Aplicar la paginación
      const inicio = (pagina - 1) * itemsPorPagina;
      const fin = inicio + itemsPorPagina;
      const filasPaginadas = resultado.slice(inicio, fin);
      setFilas(filasPaginadas);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // dependencia para que useEffect se ejecute cuando cambie
  
  const handleButtonClick = (enlace) => {
    navigate(enlace);
  };

  const handlePageChange = (page) => {  
    setPagina(page);
  };

  const handleSee = (ide, nombre) => {
		navigate('/verreceta', { state: { id: ide, nombre:nombre }})
	};
  const handleAdd = () => {
		navigate('/crearreceta');
	};

  const handleDelete = (id) => { // Función borrar
    console.log(id);
    axios.delete(`http://localhost:5050/borrarreceta/${id}`)
    .then((response) => {
        fetchData();
      })
      .catch((error) => console.error('Error al eliminar:', error));
  };


  const Cabecera = () => {
    return (
      <DataTable.Header>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>Nombre</DataTable.Title>
        <DataTable.Title>Precio</DataTable.Title>
        <DataTable.Title>Acciones</DataTable.Title>
      </DataTable.Header>
    );
  };

  return (
    <View>  
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={require('../../LogoMcAndCheese.png')} />
          <Text style={styles.title}>McAndCheese - Práctica 3</Text>
        </View>
      </View>
      <Text style={styles.title}>Subsistema de Menú</Text>
      {/* Encabezado de la tabla */}
      <Cabecera />
      {/* Datos de la tabla */}
      <DataTable>
        {filas.map((item) => (
          <DataTable.Row key={item.IdReceta}>
            <DataTable.Cell>{item.IdReceta}</DataTable.Cell>
            <DataTable.Cell>{item.Nombre}</DataTable.Cell>
            <DataTable.Cell>{item.Precio}</DataTable.Cell>
            {/* Botones de las filas */}
            <IconButton icon="delete" onPress={() => handleDelete(item.IdReceta)} />
            <IconButton icon="eye" onPress={() => handleSee(item.IdReceta, item.Nombre)} />
          </DataTable.Row>
        ))}
        <DataTable.Pagination
        page={pagina} /* Página actual */
        numberOfPages={Math.ceil(filas.length / itemsPorPagina)} /* Paginas = Filas/itemsXPagina */
        onPageChange={handlePageChange}
        label={`${pagina} de ${Math.ceil(filas.length / itemsPorPagina)}`} // Etiqueta
      />
      </DataTable>
      <FAB
        icon="plus"
        style={styles.fabStyle}
        color='white'
        onPress={() => handleAdd()}
      />
      <Pressable style={[styles.pressableButton, { alignSelf: 'center' }]} onPress={() => handleButtonClick('/ingredientes')}>
        <Text style={styles.pressableText}>Ingredientes</Text>
      </Pressable>
      <Pressable style={[styles.pressableButton, { alignSelf: 'center' }]} onPress={() => handleButtonClick('/alergenos')}>
        <Text style={styles.pressableText}>Alérgenos</Text>
      </Pressable>
      <Pressable style={[styles.pressableButton, { alignSelf: 'center' }]} onPress={() => handleButtonClick('/')}>
        <Text style={styles.pressableText}>Volver</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    alignSelf: 'center'
  },
  image: {
    width: 200, // Ajusta el ancho según tus necesidades
    height: 200, // Ajusta la altura según tus necesidades
    borderRadius: 0,
    marginBottom: 20,
  },
  pressableButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#049CDC',  // Un verde fresco, puedes cambiarlo según tus preferencias
    borderRadius: 10,
    elevation: 3, // Sombra para un efecto de elevación
    marginBottom: 15,
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }, pressableText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold', // Texto en negrita
    textAlign: 'center',
  },
  text:{
    marginBottom: 100,
    marginTop: 100,
    fontSize: 14,
    fontWeight: 'bold'
  },
  fabStyle: {
    width: 55,
   backgroundColor: '#049CDC',
   alignSelf: 'right',
   justifyContent: 'center',
 }
});

export default Menú;
