import { DataTable, FAB, IconButton} from 'react-native-paper';
import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-native';
import dayjs from 'dayjs';

const useHost = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:5050/ingrediente';
    } else {
      return 'http://localhost:5050/ingrediente';
    }
  };
  
  const Cabecera = () => {
    return (
      <DataTable.Header>
        <DataTable.Title>ID Ingrediente</DataTable.Title>
        <DataTable.Title>Nombre</DataTable.Title>
        <DataTable.Title>Numero Stock</DataTable.Title>
      </DataTable.Header>
    );
  };

const Ingrediente = () => {
    const [stockData, setStockData] = useState([]);
    const navigate = useNavigate();
    const [filas, setFilas] = useState([]);
    const [pagina, setPagina] = useState(1);
    const host = useHost();
    const [itemsPorPagina] = useState(10); // Ajustar preferencia
    
    const handleAdd = () => { // Función añadir
        navigate('/crearingrediente');
    };

    const handleEdit = (ide) => {
      navigate('/editaringrediente', { state: { id: ide }})
    };

    const handleDelete = async (id) => { // Función borrar
        try{
          // Realizar la solicitud DELETE
          await axios.delete(`http://localhost:5050/borraringrediente/${id}`);
      
          // Volver a cargar los datos después de la eliminación
          const response = await axios.get(host);
          const resultado = response.data[0];
      
          // Aplicar la paginación
          const inicio = (pagina - 1) * itemsPorPagina;
          const fin = inicio + itemsPorPagina;
          const filasPaginadas = resultado.slice(inicio, fin);
          
          setFilas(filasPaginadas);
        }
        catch (error) {
          console.error('Error al eliminar:', error);
        };
      };

    const handlePageChange = (page) => {  
        setPagina(page);
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(host);
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
    
        fetchData();
    }, [host, pagina]);

    useEffect(() => {
        // Llamada a la API al cargar el componente
            const fetchData = async() => {
            try{
                const response = await axios.get('http://172.28.152.110:5050/ver');
                const resultado = response.data[0];
                await setStockData(resultado);
            } catch(error) {
            console.error('Error al realizar la solicitud:', error);
            }
        };
        fetchData();
    }, []);

    const handleButtonClick = (enlace) => {
      navigate(enlace);
    };
  
    return (
        <View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.image} source={require('../../../LogoMcAndCheese.png')} />
            <Text style={styles.title}>McAndCheese - Práctica 3</Text>
          </View>
        </View>
          <Text style={styles.title}>Subsistema de Ingredientes</Text>
          <View style={styles.table}>
          {/* Encabezado de la tabla */}
          <Cabecera />
          {/* Datos de la tabla */}
          <DataTable>
            {filas.map((item) => (
              <DataTable.Row key={item.IdIngrediente}>
                <DataTable.Cell>{item.IdIngrediente}</DataTable.Cell>                
                <DataTable.Cell>{item.Nombre}</DataTable.Cell>
                <DataTable.Cell>{item.NumStock}</DataTable.Cell>
                {/* Botones de las filas */}
                <IconButton icon="pencil" onPress={() => handleEdit(item.IdIngrediente)} />
                <IconButton icon="delete" onPress={() => handleDelete(item.IdIngrediente)} />
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
        </View>
          <Pressable style={[styles.pressableButton, { alignSelf: 'center' }]} onPress={() => handleButtonClick('/menu')}>
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
    table: {
      margin: 10,
      },
      fabStyle: {
        width: 55,
       backgroundColor: '#049CDC',
       alignSelf: 'right',
       justifyContent: 'center',
     }
  });
  
  export default Ingrediente;