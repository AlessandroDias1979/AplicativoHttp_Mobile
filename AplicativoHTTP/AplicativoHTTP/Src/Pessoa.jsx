import { View, TouchableOpacity , Text, FlatList, TextInput, Alert, Platform} from "react-native";
import { useState, useEffect } from "react";
import { MaskedTextInput } from "react-native-mask-text";
import DateTimePicker from "@react-native-community/datetimepicker";
import Estilo from "../Estilo/index";
import Base from "../Utilitarios/index";
import { getPessoas, deletePessoa , updatePessoa, adicionarPessoa} from "../Service/Pessoa";

export default function Pessoa(props)
{

    useEffect(() => {
        ListarPessoas();
    }, []);

    const [idcliente, setIdcliente] = useState(null);
    const [pessoas, setPessoas] = useState([]);
    const [nome, setNome] = useState(pessoas?.nome || "");
    const [cpf, setCpf] = useState(pessoas?.cpf || "");
    const [dtanascimento, setDtanascimento] = useState(
        pessoas?.dtanascimento 
            ? new Date(pessoas.dtanascimento)
            : new Date()
    );
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) setDtanascimento(selectedDate);
    };


    const ListarPessoas = async() => {
        setPessoas(await getPessoas());
    }


    const setPessoa = async() => {
        const resposta = await fetch ( Base + 'adicionarCliente', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: 'teste',
                dtanascimento: '2000-01-01',
                cpf: '2324353'
            })
        });

        if (!resposta.ok) {
            throw new Error('Erro ao adicionar pessoa');
        }

        const dados = await resposta.json();
        console.log(dados);
    }

    const editarPessoa = (item) => {
        setIdcliente(item.idcliente);
        setNome(item.nome);
        setCpf(item.cpf);
        setDtanascimento(new Date(item.dtanascimento));
    }

    const salvar = () => {
        if (idcliente) {
            updatePessoa(idcliente, nome, dtanascimento, cpf);
             Alert.alert(
                    "Sucesso",
                    "A pessoa editada com sucesso!",
                    [{ text: "OK" }]
            );
            limparCampos();
            ListarPessoas();
        }
        else {
            adicionarPessoa(nome, dtanascimento, cpf);
            Alert.alert(
                    "Sucesso",
                    "A pessoa cadastrada com sucesso!",
                    [{ text: "OK" }]
            );
            limparCampos();
            ListarPessoas();
        }

    }

    const limparCampos = () => {
        setIdcliente(null);
        setNome("");
        setCpf("");
        setDtanascimento(new Date());
    }

    const cancelar = () => {
        limparCampos();
    }

    const excluirPessoa = async(id) => {
       await deletePessoa(id);
        Alert.alert(
            "Sucesso",
            "A pessoa foi excluída com sucesso!",
            [{ text: "OK" }]
        );
       ListarPessoas();
    }

    return(
        <View style= {Estilo.container}>

            <View style={Estilo.formContainer}>

                <View style={Estilo.formGroup}>
                    <Text style={Estilo.label}>Nome</Text>
                    <TextInput
                        style={Estilo.input}
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Digite o nome"
                    />
                </View>

                <View style={Estilo.formGroup}>
                    <Text style={Estilo.label}>CPF</Text>
                    <MaskedTextInput
                        mask="999.999.999-99"
                        style={Estilo.input}
                        value={cpf}
                        onChangeText={setCpf}
                        keyboardType="numeric"
                        placeholder="000.000.000-00"
                    />
                </View>

                <View style={Estilo.formGroup}>
                        <Text style={Estilo.label}>Data de Nascimento</Text>

                        <TouchableOpacity
                            style={Estilo.input}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text>
                                {dtanascimento.toLocaleDateString("pt-BR")}
                            </Text>
                        </TouchableOpacity>

                        {showDatePicker && (
                            <DateTimePicker
                                value={dtanascimento}
                                mode="date"
                                display={Platform.OS === "ios" ? "spinner" : "default"}
                                onChange={onChangeDate}
                            />
                        )}
                    </View>

                     <TouchableOpacity
                            style={Estilo.btnSalvar}
                            onPress={salvar}
                        >
                        <Text style={Estilo.text}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={Estilo.btnCancelar}
                            onPress={cancelar}
                        >
                            <Text style={Estilo.text}>Cancelar</Text>
                    </TouchableOpacity>


                
            </View>



            <FlatList
                style={Estilo.containerLista}
                data={pessoas}
                keyExtractor={(item) => item.idcliente.toString()}
                renderItem={({ item }) => (
                    <View style={Estilo.card}>
                        <Text style={Estilo.cardText}>
                           Nome : {item.nome} -  Cpf: {item.cpf}
                        </Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={Estilo.btnEditar}
                                onPress={() => editarPessoa(item)}
                            >
                                <Text style={Estilo.text}>Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={Estilo.btnExcluir}
                                onPress={() => excluirPessoa(item.idcliente)}
                            >
                                <Text style={Estilo.text2}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />




        </View>
    )


}