"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUserData(id) {
    let data;
    if (id === 1) {
        data = {
            name: "Aziz",
            age: 25,
            email: "azizXon12@gmail.com"
        };
    }
    else {
        data = "User not found";
    }
    return data;
}
let user = getUserData(1);
console.log(user.name);
user = getUserData(2);
console.log(user.toUpperCase());
//# sourceMappingURL=main.js.map