import {  Image, Platform, Pressable , StyleSheet, Text, View} from 'react-native'
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-native';
import { useEffect, useState} from 'react'
import dayjs from 'dayjs';


const useHost = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:5050';
    } else {
      return 'http://localhost:5050';
    }
};

const EditarReserva = ()=>{
    const navigate = useNavigate();
        const handleButtonClick = (enlace) => {
        
        navigate(enlace);
    };

    const [idReserva, setIdReserva] = useState('');
    const [IdPedido, setIdPedido] = useState('');
    const [numPersonas, setNumPersonas] = useState('');
    const [horaIni, setHoraIni] = useState('');
   
    const { state } = useLocation();
    const id = state ? state.id : '';
    


    const getDatosReserva = () => {
        axios.get(`${useHost()}/reservas/${id}`)
            .then((response) => {
                const resultado = response.data[0];
                if (resultado && resultado.length > 0 && Array.isArray(resultado)) {
                    resultado.forEach((reserva) => {
                        setIdReserva(reserva.IdReserva);
                        setIdPedido(reserva.IdPedido);
                        setNumPersonas(reserva.NumPersonas);
                        setHoraIni(reserva.HoraIni);
                    });
                }
            })
            .catch((error) => {
                // Manejar los errores
                console.error('Error en la solicitud GET:', error);
            });
    };

    useEffect(() => {
        getDatosReserva();
    }, [])

    const handleEditarReserva = () => {
       // Realiza una solicitud POST al servidor backend para crear un alumno
       axios.put(`${useHost()}/editarreserva`, {idReserva,numPersonas, horaIni})
       .then((response) => {
           // Maneja la respuesta exitosa
           navigate('/reservas');
       })
       .catch((error) => {
           // Maneja los errores
           console.error("Error al editar reserva: ",error);
           navigate('/mensaje', { state: { mensaje: 'Error al editar reserva',error } });
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
            <Text style={styles.titleText}>Subsistema de Reservas</Text>
            <Text style={styles.titleText}>Editar número de conmensales</Text>
            
            <Text style={styles.text}>Número de mesa:</Text>
            <Text style={styles.text}>{idReserva}</Text>
            <Text style={styles.text}>Hora de Inicio:</Text>
            <Text style={styles.text}>{horaIni}</Text>
            
            <Text style={styles.text}>Nuevo número de conmensales:</Text>
            <TextInput style={styles.textInput}
                value={numPersonas}
                onChangeText={text => setNumPersonas(text)}
            />

            <View style={styles.button}>
                <Pressable style={styles.pressableButton} onPress={handleEditarReserva}>
                    <Text style={styles.pressableText}>Editar número de conmensales</Text>
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

export default EditarReserva