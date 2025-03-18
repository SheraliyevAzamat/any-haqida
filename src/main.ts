function getUserData(id: number): any {
    let data: any;

    if (id === 1) {
        data = {
            name: "Aziz",
            age: 25,
            email: "azizXon12@gmail.com"
        };
    } else {
        data = "User not found";
    }

    return data;
}

let user = getUserData(1);
console.log(user.name); 

user = getUserData(2);
console.log(user.toUpperCase()); 
