
import {  Image, Platform, Pressable , StyleSheet, Text, View} from 'react-native'
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import { useNavigate } from 'react-router-native';
import {useState} from 'react'


const useHost = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:5050';
    } else {
      return 'http://localhost:5050';
    }
};

const CrearReserva = ()=>{
    const navigate = useNavigate();
        const handleButtonClick = (enlace) => {
        
        navigate(enlace);
    };
    
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [username, setUsername] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [datosPago, setDatosPago] = useState('');
    const [hidePass, setHidePass] = useState(true);
    /* Diferencia entre fechas debido a que en BD se introduce cómo string */
    const [date, setDate] = useState('');
    

    const [id, setId] = useState('');
    const [idP, setIdP] = useState('');
    const [npersonas, setnpersonas] = useState('');
    const [hora, sethora] = useState('');


    const handleCreateReserva = () => {
        try{
            axios.post(`${useHost()}/crearreserva`, {id,idP,npersonas,hora})
            navigate('/reservas');
        }
        catch(error){
            console.error("Error al crear una reserva: ",error);
            navigate('/mensaje', { state: { mensaje: 'Error en la creación de la reserva', error } });
        } 
    };

    return(
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.image} source={require('../../LogoMcAndCheese.png')} />
                    <Text style={styles.title}>McAndCheese - Práctica 3</Text>
                </View>
            </View>
            <Text style={styles.titleText}>Subsistema de Reservas</Text>
            <Text style={styles.titleText}>Crear una nueva reserva</Text>
            
            <Text style={styles.text}>Número de la mesa:</Text>
            <TextInput style={styles.textInput}
                label="Id Reserva"
                value={id}
                onChangeText={text => setId(text)}
            />
            <Text style={styles.text}>Id Pedido:</Text>
            <TextInput style={styles.textInput}
                label="Id Pedido"
                value={idP}
                onChangeText={text => setIdP(text)}
            />

            <Text style={styles.text}>Número de personas:</Text>
            <TextInput style={styles.textInput}
                label="NumPersonas"
                value={npersonas}
                onChangeText={text => setnpersonas(text)}
            />

            <Text style={styles.text}>Hora de Inicio: </Text>
            <TextInput style={styles.textInput}
                label="HoraIni"
                value={hora}
                onChangeText={text => sethora(text)}
            />           
            
            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={handleCreateReserva}>
                    <Text style={styles.pressableText}>Crear Reserva</Text>
                </Pressable> 
            </View>
            
            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={() => handleButtonClick('/reservas')}>
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

export default CrearReserva