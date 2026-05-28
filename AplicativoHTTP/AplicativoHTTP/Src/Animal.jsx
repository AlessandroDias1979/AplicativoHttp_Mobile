//  ( Nome, Especie, Peso, Altura).

import { View, TouchableOpacity , Text, FlatList, TextInput, Alert, Platform} from "react-native";
import { useState, useEffect } from "react";
import { MaskedTextInput } from "react-native-mask-text";
import DateTimePicker from "@react-native-community/datetimepicker";
import Estilo from "../Estilo/index";
import Base from "../Utilitarios/index";
import { getPessoas, deletePessoa , updatePessoa, adicionarPessoa} from "../Service/Pessoa";

export default function Animal(props) {

    useEffect(() => {
        ListarPessoas();
    }, []);

    const [idanimal, setIdanimal] = useState(null); 
    const [nome, setNome] = useState(animais?.nome || "");
    const [especie, setEspecie] = useState(animais?.especie || "");
    const [peso, setPeso] = useState(animais?.peso || "");
    const [altura, setAltura] = useState(animais?.altura || "");

    const ListarPessoas = async() => {
        setPessoas(await getPessoas());
    }

     const setPessoa = async() => {
        const resposta = await fetch ( Base + 'adicionarAnimal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: 'teste',
                especie: 'teste',
                peso: '10',
                altura: '50'
            })
        });

        if (!resposta.ok) {
            throw new Error('Erro ao adicionar animal');
        }

        const dados = await resposta.json();
        console.log(dados);
    }
    
    const editarAnimal = (item) => {
        setIdanimal(item.idanimal);
        setNome(item.nome);
        setEspecie(item.especie);
        setPeso(item.peso);
        setAltura(item.altura);
    }

    const salvar = () => {
        if (idanimal) {
            updateAnimal(idanimal, nome, especie, peso, altura);
             Alert.alert(
                    "Sucesso",
                    "O animal editado com sucesso!",
                    [{ text: "OK" }]
            );
            limparCampos();
            ListarPessoas();
        }
        else {
            adicionarAnimal(nome, especie, peso, altura);
            Alert.alert(
                    "Sucesso",
                    "O animal cadastrado com sucesso!",
                    [{ text: "OK" }]
            );
            limparCampos();
            ListarAnimai();
        }

    }

    const limparCampos = () => {
        setIdanimal(null);
        setNome("");
        setEspecie("");
        setPeso("");
        setAltura("");
    }

    const cancelar = () => {
        limparCampos();
    }

    const excluirAnimal = async(id) => {
       await deleteAnimal(id);
        Alert.alert(
            "Sucesso",
            "O animal foi excluído com sucesso!",
            [{ text: "OK" }]
        );
       ListarAnimais();
    }

     return(
            <View style= {Estilo.container}>
                <View style={Estilo.formContainer}>
                    <View style={Estilo.formGroup}>
                        <Text style={Estilo.label}>Nome:</Text>
                        <TextInput
                            style={Estilo.input}        
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>
                    <View style={Estilo.formGroup}>     
                        <Text style={Estilo.label}>Especie:</Text>
                        <TextInput
                            style={Estilo.input}        
                            value={especie}
                            onChangeText={setEspecie}
                        />
                    </View>
                    <View style={Estilo.formGroup}>     
                        <Text style={Estilo.label}>Peso:</Text>
                        <TextInput
                            style={Estilo.input}        
                            value={peso}
                            onChangeText={setPeso}
                        />
                    </View>
                    <View style={Estilo.formGroup}>     
                        <Text style={Estilo.label}>Altura:</Text>
                        <TextInput
                            style={Estilo.input}        
                            value={altura}
                            onChangeText={setAltura}
                        />
                    </View>
                    <View style={Estilo.buttonContainer}>
                        <TouchableOpacity style={Estilo.button} onPress={salvar}>
                            <Text style={Estilo.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Estilo.button} onPress={cancelar}>
                            <Text style={Estilo.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


     )
}