import { DataTable, FAB, IconButton} from 'react-native-paper';
import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-native';
import dayjs from 'dayjs';

const Cabecera = () => {
    return (
      <DataTable.Header>
        <DataTable.Title style={styles.idColumnTitle}>Email (ID)</DataTable.Title>
        <DataTable.Title style={styles.nombreColumnTitle}>Nombre</DataTable.Title>
        <DataTable.Title style={styles.tareasColumnTitle}>Alergenos</DataTable.Title>
        <DataTable.Title style={styles.accionesColumnTitle}>Cambiar alergenos</DataTable.Title>
      </DataTable.Header>
    );
  };
  
  const useHost = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:5050';
    } else {
      return 'http://localhost:5050';
    }
  };
  
  const AlergenosClientes = () => {
  
    const [filas, setFilas] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [itemsPorPagina] = useState(10); // Ajustar preferencia
    const host = useHost();
    const navigate = useNavigate();
  
    const getAlergenosCliente = async (IdCliente) => {
      try {
        const response = await axios.get(`${useHost()}/alergenos/clienteId/${IdCliente}`);
        const tareas = response.data; // No asumas que es un array
        if (tareas && tareas.length > 0) {
          // El alumno tiene tareas asignadas, devolver la lista de nombres unidos por comas
          return tareas.map((tarea) => tarea.Nombre).join(', ');
        } else {
          // El alumno no tiene tareas asignadas
          return 'NINGUNA';
        }
      } catch (error) {
        console.error('Error al obtener tareas del alumno:', error);
        // Manejar errores de la solicitud
        throw error;
      }
    };
    
  
      const handleEdit = (IdCliente, nombre) => {
          navigate('/clientes/moficicaralergenos', { state: { IdCliente, nombre}})
      };
      
      const handleButtonClick = (enlace) => {
        navigate(enlace);
      };
    
    const handlePageChange = (page) => {  
      setPagina(page);
    };
  
    const getClientes = async () => {
      try {
        const response = await axios.get(`${useHost()}/clientes`);
        const resultado = response.data[0];
        
        const alumnosConTareas = await Promise.all(
          resultado.map(async (cliente) => {
            const alergenos = await getAlergenosCliente(cliente.IdCliente);
            return {
              ...cliente,
              alergenos,
            };
          })
        );
  
        // Aplicar la paginación
        const inicio = (pagina - 1) * itemsPorPagina;
        const fin = inicio + itemsPorPagina;
        const filasPaginadas = alumnosConTareas.slice(inicio, fin);
        setFilas(filasPaginadas);
      } catch (error) {
        console.error('Error en la solicitud GET:', error);
      }
    };
    
    useEffect(() => {
      getClientes();
    }, [host, pagina]); // dependencia para que useEffect se ejecute cuando cambie
  
    return (
        <View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.image} source={require('../../LogoMcAndCheese.png')} />
            <Text style={styles.title}>McAndCheese - Práctica 3</Text>
          </View>
        </View>
          <Text style={styles.title}>Subsistema de Clientes</Text>
          <Text style={styles.title}>Alérgenos de los clientes</Text>
      <View style={styles.table}>
        {/* Encabezado de la tabla */}
        <Cabecera />
        {/* Datos de la tabla */}
        <DataTable>
          {filas.map((item) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell style={styles.idColumnTitle}>{item.IdCliente}</DataTable.Cell>
              <DataTable.Cell style={styles.nombreColumnTitle}>{item.Nombre}</DataTable.Cell>
              <DataTable.Cell style={styles.tareasColumnTitle}>{item.alergenos}</DataTable.Cell>
              {/* Botones de las filas */}
              <View style={styles.accionesColumnTitle}>
                  <IconButton icon="pencil" onPress={() => handleEdit(item.IdCliente, item.Nombre)} style={styles.accionesColumnTitle}/>
              </View>
            </DataTable.Row>
          ))}
          <DataTable.Pagination
          page={pagina} /* Página actual */
          numberOfPages={Math.ceil(filas.length / itemsPorPagina)} /* Paginas = Filas/itemsXPagina */
          onPageChange={handlePageChange}
          label={`${pagina} de ${Math.ceil(filas.length / itemsPorPagina)}`} // Etiqueta
        />
        </DataTable>
      </View>
      <Pressable style={[styles.pressableButton, { alignSelf: 'center' }]} onPress={() => handleButtonClick('/clientes')}>
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
export default AlergenosClientes;