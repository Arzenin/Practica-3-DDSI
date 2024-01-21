import {  Image, Platform, Pressable , StyleSheet, Text, View} from 'react-native'
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import { useNavigate } from 'react-router-native';
import {useState, useEffect} from 'react'
import MultiSelect from 'react-native-multiple-select';

const useHost = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:5050';
    } else {
      return 'http://localhost:5050';
    }
};

const CrearPedido = ()=>{
    const navigate = useNavigate();
        const handleButtonClick = (enlace) => {
        
        navigate(enlace);
    };

    const [tipoPago, setTipoPago] = useState('');
    const [id, setId] = useState('');
    const [clientes, setClientes] = useState([]);
    const [selectedClientes, setSelectedClientes] = useState([]);
    const [recetas, setRecetas]= useState([]);
    const [selectedRecetas, setSelectedRecetas] = useState([]);

    const getClientes = async () =>{
        axios.get(`${useHost()}/clientes`)
      .then((response) => {
        setClientes(response.data[0]); // Almacena la lista de estudiantes en el estado
        })
      .catch((error) => {
        console.error('Error al obtener la lista de clientes:', error);
      });
    }
    const getRecetas = async () =>{
        axios.get(`${useHost()}/recetas`)
      .then((response) => {
        setRecetas(response.data[0]); // Almacena la lista de estudiantes en el estado
        })
      .catch((error) => {
        console.error('Error al obtener la lista de recetas:', error);
      });
    }
    useEffect(() => {
        getClientes();
        getRecetas();
    }, [])

    const handleSelectedClientesChange = (selectedItems) => {
        setSelectedClientes(selectedItems);
      };

      const handleSelectedRecetasChange = (selectedItems) => {
        setSelectedRecetas(selectedItems);
      };

    const handleCreatePedido = () => {

        // Realiza una solicitud POST al servidor backend para crear un alumno
        axios.post(`${useHost()}/crearpedido`, {
            id,
            tipoPago,
            clientes:selectedClientes,
            recetas:selectedRecetas
        })
        .then((response) => {
            // Maneja la respuesta exitosa
            navigate('/pedidos');
        })
        .catch((error) => {
            // Maneja los errores
            console.error("Error al crear pedido: ",error);
            navigate('/mensaje', { state: { mensaje: 'Error en la creación del alergeno',error } });
        });
        
    };

    return(
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.image} source={require('../../LogoMcAndCheese.png')} />
                    <Text style={styles.title}>McAndCheese - Práctica 3</Text>
                </View>
            </View>
            <Text style={styles.titleText}>Subsistema de Pedidos</Text>
            <Text style={styles.titleText}>Crear un Nuevo Pedido</Text>
            <Text style={styles.text}>Primero, introduzca el ID del pedido:</Text>
            <TextInput style={styles.textInput}
                label="ID del pedido"
                value={id}
                onChangeText={text => setId(text)}
            />
            <Text style={styles.text}>A continuación, debe seleccionar quien es: </Text>
            <MultiSelect style={styles.multiselect}
            items={clientes.map((cliente) => ({
                id: cliente.IdCliente,
                name: cliente.Nombre,
            }))}
            uniqueKey="id"
            onSelectedItemsChange={handleSelectedClientesChange}
            selectedItems={selectedClientes}
            selectText="Seleccione el cliente"
            searchInputPlaceholderText="Buscar clientes..."
            hideSubmitButton
            />

            <Text style={styles.text}>Selecciones las recetas que desea pedir: </Text>
            <MultiSelect style={styles.multiselect}
            items={recetas.map((receta) => ({
                id: receta.IdReceta,
                name: receta.Nombre,
            }))}
            uniqueKey="id"
            onSelectedItemsChange={handleSelectedRecetasChange}
            selectedItems={selectedRecetas}
            selectText="Seleccion las recetas"
            searchInputPlaceholderText="Buscar recetas..."
            hideSubmitButton
            />

            <Text style={styles.text}>Por último, selecciones el tipo de pago ('Tarjeta' o 'Puntos'):</Text>
            <TextInput style={styles.textInput}
                label="Tipo de Pago"
                value={tipoPago}
                onChangeText={text => setTipoPago(text)}
            />
            

            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={handleCreatePedido}>
                    <Text style={styles.pressableText}>Crear Pedido</Text>
                </Pressable> 
            </View>

            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={() => handleButtonClick('/pedidos')}>
                    <Text style={styles.pressableText}>Volver atrás</Text>
                </Pressable> 
            </View>
            
        </View>
        
    )
}

const styles=StyleSheet.create({
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
        marginTop: 10,
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
    textInput:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 5,
        marginBottom: 5,
        width: 500,
        justifyContent: 'center',
        alignSelf: 'center',
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
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
      }
})




export default CrearPedido