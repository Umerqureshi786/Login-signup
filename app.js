const usersArray = [{
    email: "admin@gmail.com",
    password: "123456",
    name: "admin"

},
{
    email: "umar@gmail.com",
    password: "74256",
    name: "Umar"

}];


// console.log(usersArray[1], usersArray[0]);

// function login() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     // console.log(email.value, password.value); .....Remove this because of above .value


//     for (let i = 0; i < usersArray.length; i++) {
//         const user = usersArray[i];
//         const isLastIndex = i == usersArray.length - 1;
//         // console.log(usersArray[i]);....remove
//         if (email == user.email && password == user.password) {
//             alert("Login Successfully");
//             break;
//         }
//         if (isLastIndex) {
//             alert("User not found");
//         }

//     }

// }
// login()


function CreateUser(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}

new Date()


function Signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value

    const newUser = new CreateUser(name,email,password);
    users.push(newUser);
    console.log(newUser);
    
}