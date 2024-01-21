import {  Image, Platform, Pressable , StyleSheet, Text, View} from 'react-native'
import { useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-native';
import axios from 'axios';
import MultiSelect from 'react-native-multiple-select';


const useHost = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:5050';
    } else {
      return 'http://localhost:5050';
    }
};

const ModificarAlergenosCliente = ()=>{
    const navigate = useNavigate();
    
    const handleButtonClick = (enlace, id,) => {
        navigate(enlace, { state: { id:id }});
    };


    const { state } = useLocation();
    const IdCliente = state ? state.IdCliente : '';
    const nombre= state ? state.nombre : '';
    const [alergenos, setAlergenos] = useState([]);
    const [alergenosCliente, setAlergenosCliente] = useState([]);
    const [selectedAlergenos, setSelectedAlergenos] = useState([]);


    const getAlergenosCliente = async (IdCliente) => {
          axios.get(`${useHost()}/alergenos/clienteId/${IdCliente}`)
          .then((response) =>{
            console.log(response.data);
            setAlergenosCliente(response.data);        
            }) 
        .catch ((error) => {
          console.error('Error al obtener alergenos del cliente:', error);
        });
    }

    
    const getAlergenos = async () =>{
        axios.get(`${useHost()}/alergenos`)
      .then((response) => {
        setAlergenos(response.data[0]); // Almacena la lista de estudiantes en el estado
        })
      .catch((error) => {
        console.error('Error al obtener la lista de alergenos:', error);
      });
    }
    useEffect(() => {
        getAlergenosCliente(IdCliente);
        getAlergenos();
    }, [])

    const handleQuitarAlergeno = () =>{
        
            axios.post(`${useHost()}/clientes/quitaralergenos`, {
              IdCliente,
              alergenos: selectedAlergenos
            })
              .then((response) => {
                // Maneja la respuesta exitosa
                navigate('/alergenosclientes' );
              })
              .catch((error) => {
                // Maneja los errores
                navigate('/confirmaciones', { state: { mensaje: 'Error al quitar las tareas al estudiante', error,  ruta: '/claseprofesor', id: idProfesor } } );
              });
    };
    const handleAñadirAlergeno= () =>{
      
          axios.post(`${useHost()}/clientes/aniadealergenos`, {
            IdCliente,
            alergenos: selectedAlergenos
          })
            .then((response) => {
              // Maneja la respuesta exitosa
              navigate('/alergenosclientes' );
            })
            .catch((error) => {
              // Maneja los errores
              navigate('/mensajes', { state: { mensaje: 'Error al añadir los alérgenos al cliente', error}});
            });
    }

    const handleSelectedAlergenosChange = (selectedItems) => {
        setSelectedAlergenos(selectedItems);
      };

      const alergenosDisponibles = alergenos.filter((alergeno) => {
        // Filtrar estudiantes que no están en la clase
        return !alergenosCliente.some((e) => e.IdAlergeno === alergeno.IdAlergeno);
      });

    return(
        <View>
                <View style={styles.header}>
                    <Image style={styles.image} source={require('../../LogoMcAndCheese.png')} />
                    <Text style={styles.title}>McAndCheese - Práctica 3</Text>
                </View>
                <Text style={styles.title}>Subsistema de clientes</Text>
            <Text style={styles.title}>Editar los alergenos del cliente {nombre}  (ID: {IdCliente})</Text>

            <Text style={styles.text}>Alergenos de {nombre}:</Text>
      <MultiSelect style={styles.multiselect}
        items={alergenosCliente && Array.isArray(alergenosCliente)
            ? alergenosCliente.map((alergeno) => ({
                id: alergeno.IdAlergeno,
                name: alergeno.Nombre,
              }))
            : []
          }
        uniqueKey="id"
        onSelectedItemsChange={handleSelectedAlergenosChange}
        selectedItems={selectedAlergenos}
        selectText="Selecciona alergenos a quitar"
        searchInputPlaceholderText="Buscar alergenos..."
        hideSubmitButton
      />
    <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={handleQuitarAlergeno}>
                    <Text style={styles.pressableText}>Quitar Alérgenos</Text>
                </Pressable> 
    </View>

    <Text style={styles.text}>Otros Alérgenos:</Text>
    <MultiSelect style={styles.multiselect}
      items={alergenosDisponibles.map((alergeno) => ({
        id: alergeno.IdAlergeno,
        name: alergeno.Nombre,
      }))}
      uniqueKey="id"
      onSelectedItemsChange={handleSelectedAlergenosChange}
      selectedItems={selectedAlergenos}
      selectText="Selecciona alegernos a añadir"
      searchInputPlaceholderText="Buscar alergenos..."
      hideSubmitButton
    />
      

      <View style={styles.button}>
          <Pressable style={styles.pressableButton} onPress={handleAñadirAlergeno}>
              <Text style={styles.pressableText}>Añadir Alergeno</Text>
          </Pressable> 
       </View>

            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={() => handleButtonClick('/alergenosclientes')}>
                    <Text style={styles.pressableText}>Volver atrás</Text>
                </Pressable> 
            </View>
            
        </View>
        
    )
}
const styles=StyleSheet.create({
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
        alignSelf: 'center',
        marginTop: 20
      },
      image: {
        width: 200, // Ajusta el ancho según tus necesidades
        height: 200, // Ajusta la altura según tus necesidades
        borderRadius: 0,
        marginBottom: 20,
      },
      multiselect: {
        width: 200, // Ajusta el ancho según tus necesidades
        height: 200, // Ajusta la altura según tus necesidades
        borderRadius: 0,
        marginBottom: 20,
      }, 
    text:{
        flex: 1,
        justifyContent: 'center', // Centra horizontalmente
        textAlign: 'center', 
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    titleText:{
        flex: 1,
        justifyContent: 'center', // Centra horizontalmente
        textAlign: 'center', 
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    mensajeError: {
        fontSize: 16,
        color: 'red', // Puedes cambiar el color a tu preferencia
        textAlign: 'center',
        marginTop: 10,
    },mensajeExito: {
        fontSize: 16,
        color: 'black', // Puedes cambiar el color a tu preferencia
        textAlign: 'center',
        marginTop: 10,
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
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',  // Un tono de gris oscuro, puedes ajustarlo según tus preferencias
        marginTop: 20,
        marginBottom: 10,
    },
    pressableText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold', // Texto en negrita
        textAlign: 'center',
    },  
})

export default ModificarAlergenosCliente