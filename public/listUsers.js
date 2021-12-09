const updateButton = document.querySelector('button#list-users');

let listElement = document.querySelector('div#users-list');

const GENDERS = {
    'H': 'Hombre',
    'M': 'Mujer',
    'X': 'Otro'
}

class UsersList {
    constructor(parent) {
        this.parent = parent;
        this.users = [];
        this.update();
    }

    async fetch() {
        const response = await fetch('/user');
        this.users = (await response.json())['users'];
        console.log(this.users);
        this.update();
    }
    update() {
        this.parent.innerHTML = '';
        if (this.users.length === 0) {
            this.parent.innerHTML = `<div><p class='soft'>No hay usuarios registrados</p></div>`;
        } else {
            this.users.forEach(user => {
                console.log(user);
                let userElement = document.createElement('div');
                userElement.setAttribute('class', 'user-elem');
                userElement.innerHTML = `<p><b>Nombre:</b> ${user.name}</p>
                    <p><b>DNI:</b> ${user.DNI}</p>
                    <p><b>Género:</b> ${GENDERS[user.gender]}</p>
                    <p><b>Fecha de nacimiento:</b> ${user.birth}</p>`;
                this.parent.appendChild(userElement);
            });
        }
    }
}

let usersList = new UsersList(listElement);
updateButton.addEventListener('click', usersList.fetch());
