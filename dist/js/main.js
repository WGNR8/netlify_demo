const getHello = async () => {
    const res = await fetch('/getword');
    const hello = await res.text();

    document.getElementById('random-hello').innerText = hello;
}

getHello();