/* var form = document.getElementById("myForm")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    var name = document.getElementById("username").value
    console.log(name)
}) */

document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const button = document.getElementById("button");

    button.addEventListener("click", (e) => {
        e.preventDefault();
        const data = {
            username: username.value,
            password: password.value,
        };
        console.log(data);
        fetch("http://localhost:3000/api/user", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json)
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
    });
});