const getHello = async () => {
    const res = await fetch('/getword');
    const hello = await res.text();

    document.getElementById('random-hello').innerText = hello;
}

const getUsers = async () => {
    const res = await fetch('/api/users');
    const users = await res.json();

    users.forEach(user => {
        const li = document.createElement('li');
        const item = user.name + ' : [' + user.email + ']';
        const text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById('users').appendChild(li);
    });
}

getHello();
getUsers();