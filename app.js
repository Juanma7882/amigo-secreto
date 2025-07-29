// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const buttonAdd = document.querySelector('.button-add');
const inputName = document.querySelector('.input-name');
const nameList = document.querySelector('.name-list');
const result = document.querySelector('#resultado');
const find = document.querySelector('.button-draw');


const friends = [];

const agregarAmigo = () => {

    const name = inputName.value.trim();
    if (name) {
        friends.push(name);
        inputName.value = '';
        console.log(`Amigo agregado: ${name}`);
        mostrarAmigos();
    } else {
        console.log('Por favor, ingresa un nombre válido.');
    }
}

const mostrarAmigos = () => {
    nameList.innerHTML = '';
    friends.forEach(f => {
        nameList.innerHTML += `<li>${f}</li>`;
    });
};

const findFriend = () => {
    const mount = friends.length;

    if (mount === 0) {
        result.innerHTML = 'No hay amigos en la lista.';
        return;
    }

    const randomIndex = Math.floor(Math.random() * mount);
    const randomFriend = friends[randomIndex];

    result.innerHTML = `Amigo sorteado: ${randomFriend}`;
}


const init = () => {
    agregarAmigo();
    buttonAdd.addEventListener('click', agregarAmigo);
    find.addEventListener('click', findFriend);
};

init();

