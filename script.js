let receitas = [
    {titulo: 'Bolo de laranja', ingrediente: '5 laranjas, 3 colheres de manteiga, 1cx de leite, açúcar, 3 ovos, farinha, fermento biológico', preparo: 'Bata tudo na batedeira por 5 minutos, manter forno pré aquecido por 2 minutos, preparar colda no fogão e reservar'},
    {titulo: 'Bolo de cenoura', ingrediente: '5 cenouras, 3 colheres de manteiga, 0/5 óleo, 1cx de leite, açúcar, 3 ovos, farinha, fermento biológico', preparo: 'Bata tudo no liquidificador por 5 minutos, manter forno pré aquecido por 2 minutos, preparar a calda de chocolate no fogão e reservar'},
    {titulo: 'Bolo de milho', ingrediente: '3 colheres de manteiga, 1cx de leite, açúcar, 3 ovos, farinha, fermento biológico, milho', preparo: 'Bata tudo na batedeira por 5 minutos, manter forno pré aquecido por 2 minutos.'}
]

function adicionarNovaReceita(){

    const nomeReceita = document.querySelector('#nomeReceita').value
    const nomeIngrediente = document.querySelector('#nomeIngrediente').value
    const nomePreparo = document.querySelector('#nomePreparo').value

    let titulo = nomeReceita
    let ingrediente = nomeIngrediente
    let preparo = nomePreparo


    
    const novaReceita = {
        titulo: titulo,
        ingrediente: ingrediente,
        preparo: preparo
    }

    let novoNomeReceita = document.querySelector('.titulo-receita')
    novoNomeReceita.innerHTML = titulo

    let novoIngredienteReceita = document.querySelector('.resumo-ingrediente-receita')
    novoIngredienteReceita.innerHTML = ingrediente

    let novoPreparoReceita = document.querySelector('.resumo-preparo-receita')
    novoPreparoReceita.innerHTML = preparo

    receitas.push(novaReceita)
    renderizarMenu()
}

renderizarMenu()
function renderizarMenu(){

    const ulReceitas = document.querySelector('.ulRreceitas')
    ulReceitas.innerHTML = ''
    for(let i = 0; i < receitas.length; i++){
        ulReceitas.innerHTML += 

        `
        <li>
            <ion-icon name="pizza-outline"></ion-icon>
            <div class="receita">${receitas[i].titulo}</div>
        </li>
        `
    }
}

function verReceitas(){
    const telaRegistroReceitas = document.querySelector('.registro-receitas')
    telaRegistroReceitas.classList.add('escondido')

    const telaRegistroReceitas2 = document.querySelector('.registro-receitas2')
    telaRegistroReceitas2.classList.remove('escondido')
}

function fecharReceitas(){
    const telaRegistroReceitas = document.querySelector('.registro-receitas')
    telaRegistroReceitas.classList.remove('escondido')

    const telaRegistroReceitas2 = document.querySelector('.registro-receitas2')
    telaRegistroReceitas2.classList.add('escondido')
}

