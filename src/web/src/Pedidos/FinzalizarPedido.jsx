import {  Image, Platform, Pressable , StyleSheet, Text, View} from 'react-native'
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-native';
import {useState, useEffect} from 'react'
import MultiSelect from 'react-native-multiple-select';

const useHost = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:5050';
    } else {
      return 'http://localhost:5050';
    }
};

const FinalizarPedido = ()=>{
    const navigate = useNavigate();
        const handleButtonClick = (enlace) => {
        
        navigate(enlace);
    };

    const { state } = useLocation();
    const [valoracion, setValoracion] = useState('');
    const id = state ? state.id : '';
    const [trabajadores, setTrabajadores] = useState([]);
    const [selectedTrabajadores, setSelectedTrabajadores] = useState([]);


    const getTrabajadores = async () =>{
        axios.get(`${useHost()}/trabajadores`)
      .then((response) => {
        setTrabajadores(response.data[0]); // Almacena la lista de estudiantes en el estado
        })
      .catch((error) => {
        console.error('Error al obtener la lista de trabajadores:', error);
      });
    }

    useEffect(() => {
        getTrabajadores();
    }, [])

    const handleSelectedTrabajadoresChange = (selectedItems) => {
        setSelectedTrabajadores(selectedItems);
      };


    const handleFinalizarPedido = () => {

        // Realiza una solicitud POST al servidor backend para crear un alumno
        axios.post(`${useHost()}/finalizarpedido`, {
            id,
            valoracion, 
            trabajadores:selectedTrabajadores
        })
        .then((response) => {
            // Maneja la respuesta exitosa
            navigate('/verpedidosinactivos');
        })
        .catch((error) => {
            // Maneja los errores
            console.error("Error al finalizar pedido: ",error);
            navigate('/mensaje', { state: { mensaje: 'Error en la finalización del pedido',error } });
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
            <Text style={styles.titleText}>Finalizar Pedido {id}</Text>
            <Text style={styles.text}>Primero, debe seleccionar el/los trabajadores implicados en el pedido: </Text>
            <MultiSelect style={styles.multiselect}
            items={trabajadores.map((trabajador) => ({
                id: trabajador.IdTrabajador,
                name: trabajador.Nombre,
            }))}
            uniqueKey="id"
            onSelectedItemsChange={handleSelectedTrabajadoresChange}
            selectedItems={selectedTrabajadores}
            selectText="Seleccione trabajador/es"
            searchInputPlaceholderText="Buscar trabajadores..."
            hideSubmitButton
            />
            <Text style={styles.text}>A continuación, valore el pedido del 0 (muy malo) al 10 (excelente):</Text>
            <TextInput style={styles.textInput}
                label="Valoración"
                value={valoracion}
                onChangeText={text => setValoracion(text)}
            />          

            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={handleFinalizarPedido}>
                    <Text style={styles.pressableText}>Finalizar Pedido</Text>
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




export default FinalizarPedido