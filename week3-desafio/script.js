const inputName = document.querySelector('#name');
const inputUsername = document.querySelector('#username');
const inputEmail = document.querySelector('#email');
const inputCompany = document.querySelector('#company');
const lista = document.querySelector('#persons');


async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();

    users.forEach((user) => { 
        const userItem = document.createElement('td');
        userItem.innerText = `${user.name} || ${user.phone}`;
        lista.appendChild(userItem);
    })

}

getUsers();
