import { View, Image, TouchableOpacity, Text,  Linking, Platform } from "react-native";
import Estilo  from '../Estilo/index';

export default function Home(props) {

    const AbrirPessoa= () => {
        props.navigation.navigate('Pessoa');
    }

    const maps = () => {
         openMap(-30.057126, -51.168598 , "Fundatec");
    }

    const AbrirAnimal = () => {
        props.navigation.navigate('Animal');
    }

    function openMap(lat, lng, label = "Destino") {
        const scheme = Platform.select({
            ios: "maps:0,0?q=",
            android: "geo:0,0?q="
        });

        const latLng = `${lat},${lng}`;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });

        Linking.openURL(url);
    }

    const abrirRota = () => {
        const origem = "Current+Location";
        const destinoLat = -31.057126;
        const destinoLng = -52.168598;

        const googleMapsURL = `comgooglemaps://?saddr=${origem}&daddr=${destinoLat},${destinoLng}&directionsmode=driving`;
        const fallbackURL = `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${destinoLat},${destinoLng}`;

        Linking.canOpenURL(googleMapsURL)
            .then((supported) => {
            if (supported) {
                Linking.openURL(googleMapsURL);
            } else {
                Linking.openURL(fallbackURL);
            }
            });
};

    return(
        <View style={Estilo.container}>
            <Image 
               style={Estilo.imagem}
               source={require('../assets/logo.png')}
            />
            <TouchableOpacity  
                style={Estilo.button}           
                activeOpacity={0.7} 
                onPress={AbrirPessoa}>
                <Text  style={Estilo.text}>Cadastrar Pessoa HTTP</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Estilo.button}
                activeOpacity={0.7} 
                onPress={maps}  >
                <Text style={Estilo.text}>Abrir Mapas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Estilo.button}
                activeOpacity={0.7}
                onPress={abrirRota}>
                <Text style={Estilo.text}>Ver rota até a Fundatec</Text>
            </TouchableOpacity>

        </View>
    )



}