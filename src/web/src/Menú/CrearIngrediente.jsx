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

const CrearIngrediente = ()=>{
    const navigate = useNavigate();
        const handleButtonClick = (enlace) => {
        
        navigate(enlace);
    };

    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [alergenos, setAlergenos] = useState([]);
    const [selectedAlergenos, setSelectedAlergenos] = useState([]);

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
        getAlergenos();
    }, [])

    const handleSelectedAlergenosChange = (selectedItems) => {
        setSelectedAlergenos(selectedItems);
      };

    const handleCreateIngrediente = () => {

        // Realiza una solicitud POST al servidor backend para crear un alumno
        axios.post(`${useHost()}/crearingrediente`, {
            id,
            nombre,
            alergenos:selectedAlergenos
        })
        .then((response) => {
            // Maneja la respuesta exitosa
            navigate('/ingredientes');
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
            <Text style={styles.titleText}>Crear un Nuevo Ingrediente</Text>
            
            <Text style={styles.text}>ID del ingrediente:</Text>
            <TextInput style={styles.textInput}
                label="ID"
                value={id}
                onChangeText={text => setId(text)}
            />

            <Text style={styles.text}>Nombre del ingrediente:</Text>
            <TextInput style={styles.textInput}
                label="Nombre"
                value={nombre}
                onChangeText={text => setNombre(text)}
            />
            <Text style={styles.text}>Añadir alérgenos del nuevo ingrediente: </Text>
            <MultiSelect style={styles.multiselect}
            items={alergenos.map((alergeno) => ({
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
                <Pressable style={styles.pressableButton} onPress={handleCreateIngrediente}>
                    <Text style={styles.pressableText}>Crear Ingrediente</Text>
                </Pressable> 
            </View>

            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={() => handleButtonClick('/ingredientes')}>
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




export default CrearIngrediente