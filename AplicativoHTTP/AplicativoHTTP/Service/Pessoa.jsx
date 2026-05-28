import Base from "../Utilitarios/index";

async function Login () {
    const resposta = await fetch ( Base + 'Login',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                usuario: 'gilson',
                senha: 'matrix@0101'            
            })
    });
    const dados = await resposta.json();
    return dados.token;
}

export async function adicionarPessoa(nome, dtanascimento, cpf) {

       const token = await Login();

       const resposta = await fetch ( Base + 'adicionarCliente', {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                nome: nome,
                dtanascimento: dtanascimento,
                cpf: cpf
            })
        });

        if (!resposta.ok) {
            throw new Error('Erro ao adicionar pessoa');
        }

        const dados = await resposta.json();
        console.log(dados);

}


export async function getPessoas() {
    const token = await Login();

    const resposta = await fetch(Base + 'clientes', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        }
    });
    const dados = await resposta.json();
    return dados;
}

export async function deletePessoa(id) {
    const token = await Login();

    const resposta = await fetch(Base + `removerCliente/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!resposta.ok) {
        throw new Error('Erro ao deletar pessoa');
    }

    const dados = await resposta.json();
    console.log(dados);
}

export async function updatePessoa(id, nome, dtanascimento, cpf) {
        const token = await Login();

        const resposta = await fetch ( Base + 'alterarCliente', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                dtanascimento: dtanascimento,
                cpf: cpf,
                idcliente: id
            })
        });

        if (!resposta.ok) {
            throw new Error('Erro ao atualizar pessoa');
        }

        const dados = await resposta.json();
        console.log(dados);

 }











  