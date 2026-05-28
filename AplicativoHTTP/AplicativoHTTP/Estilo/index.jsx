import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        width: "90%",
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 12,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        alignSelf: "center",
        marginTop: 20
    },
    imagem : {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        margin: 30
    },
    button : {
        width: '80%',
        margin: 30,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#154360'
    },    
    text : {
        fontFamily: 'Arial',
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff'
    },
    formGroup: {
        marginBottom: 15
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5,
        color: "#333"
    },

    input: {
        backgroundColor: "#F2F3F4",
        padding: 12,
        borderRadius: 8,
        fontSize: 16
    },

    inputDisabled: {
        backgroundColor: "#154360",
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        color: "#777"
    },
    btnSalvar: {
        backgroundColor: "#154360",
        padding: 15,
        borderRadius: 10,
        marginTop: 10
    },

    btnCancelar: {
        backgroundColor: "#154360",
        padding: 15,
        borderRadius: 10,
        marginTop: 10
    },

    containerLista: {
        flex: 1,
        width: '90%',
        marginTop: 20,
        backgroundColor: '#ffffff',
    },
    card: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        marginVertical: 8,
        borderRadius: 12,
        elevation: 4, // Android
        shadowColor: "#000", // iOS
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    cardText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
        marginBottom: 12,
    },
     btnEditar: {
        backgroundColor: "#4A90E2",
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 8,
        marginRight: 10,
    },

    btnExcluir: {
        backgroundColor: "#4A90E2",
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 8,
    },
    text2: {
        color: "#FFF",
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center",
    },

});

export default styles;

