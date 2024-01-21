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

const CrearReceta = ()=>{
    const navigate = useNavigate();
        const handleButtonClick = (enlace) => {
        
        navigate(enlace);
    };

    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const [selectedIngredientes, setSelectedIngredientes] = useState([]);

    const getIngredientes = async () =>{
        axios.get(`${useHost()}/ingredientes`)
      .then((response) => {
        setIngredientes(response.data[0]); // Almacena la lista de estudiantes en el estado
        })
      .catch((error) => {
        console.error('Error al obtener la lista de alergenos:', error);
      });
    }
    useEffect(() => {
        getIngredientes();
    }, [])

    const handleSelectedIngredientesChange = (selectedItems) => {
        setSelectedIngredientes(selectedItems);
      };

    const handleCreateReceta = () => {

        // Realiza una solicitud POST al servidor backend para crear un alumno
        axios.post(`${useHost()}/crearreceta`, {
            id,
            nombre,
            precio,
            ingredientes:selectedIngredientes
        })
        .then((response) => {
            // Maneja la respuesta exitosa
            navigate('/menu');
        })
        .catch((error) => {
            // Maneja los errores
            console.error("Error al crear alergeno: ",error);
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
            <Text style={styles.titleText}>Subsistema de Menú</Text>
            <Text style={styles.titleText}>Crear una Nueva Receta</Text>
            
            <Text style={styles.text}>ID de la receta:</Text>
            <TextInput style={styles.textInput}
                label="ID"
                value={id}
                onChangeText={text => setId(text)}
            />

            <Text style={styles.text}>Nombre de la receta:</Text>
            <TextInput style={styles.textInput}
                label="Nombre"
                value={nombre}
                onChangeText={text => setNombre(text)}
            />
            <Text style={styles.text}>Precio de la receta (en €):</Text>
            <TextInput style={styles.textInput}
                label="Precio"
                value={precio}
                onChangeText={text => setPrecio(text)}
            />
            <Text style={styles.text}>Añadir ingredientes a la receta: </Text>
            <MultiSelect style={styles.multiselect}
            items={ingredientes.map((ingrediente) => ({
                id: ingrediente.IdIngrediente,
                name: ingrediente.Nombre,
            }))}
            uniqueKey="id"
            onSelectedItemsChange={handleSelectedIngredientesChange}
            selectedItems={selectedIngredientes}
            selectText="Selecciona ingredientes a añadir"
            searchInputPlaceholderText="Buscar ingredientes..."
            hideSubmitButton
            />

            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={handleCreateReceta}>
                    <Text style={styles.pressableText}>Crear Receta</Text>
                </Pressable> 
            </View>

            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={() => handleButtonClick('/menu')}>
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




export default CrearReceta