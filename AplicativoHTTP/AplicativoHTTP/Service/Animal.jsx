import Base from "../Utilitarios/index";

async function Login () {
    const resposta = await fetch ( Base + 'Login',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                usuario: '',
                senha: ''            
            })
    });
    const dados = await resposta.json();
    return dados.token;
}

//  ( Nome, Especie, Peso, Altura).
export async function adicionarAnimal(nome, especie, peso, altura) {

       const token = await Login();

       const resposta = await fetch ( Base + 'adicionarAnimal', {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                nome: nome,
                especie: especie,
                peso: peso,
                altura: altura
            })
        });

        if (!resposta.ok) {
            throw new Error('Erro ao adicionar animal');
        }

        const dados = await resposta.json();
        console.log(dados);

}

export async function getAnimais() {
    const token = await Login();

    const resposta = await fetch(Base + 'animais', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        }
    });
    const dados = await resposta.json();
    return dados;
}

export async function deleteAnimal(id) {
    const token = await Login();

    const resposta = await fetch(Base + `removerAnimal/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!resposta.ok) {
        throw new Error('Erro ao deletar animal');
    }

    const dados = await resposta.json();
    console.log(dados);
}

export async function updateAnimal(id, nome, especie, peso, altura) {
        const token = await Login();

        const resposta = await fetch ( Base + 'alterarAnimal', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                especie: especie,
                peso: peso,
                altura: altura,
                id: id
            })
        });

        if (!resposta.ok) {
            throw new Error('Erro ao atualizar animal');
        }

        const dados = await resposta.json();
        console.log(dados);

 }