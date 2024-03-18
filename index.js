var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var users = [
    { id: 1, name: "João Pedro", age: 22, status: true },
    { id: 1, name: "João Emanuel", age: 50, status: false },
    { id: 2, name: "Jane Smith", age: 45, status: false },
    { id: 3, name: "Davy Eduardo", age: 20, status: true },
    { id: 4, name: "Damião Teodósio", age: 31, status: true }
];
console.log("usuarios: ".concat(users));
var activeUsers = users.filter(function (user) { return user.status === true; });
console.log("Usuarios ativos:");
console.log(activeUsers);
var ageMore25 = users.filter(function (user) { return user.age > 25; });
console.log("Usu\u00E1rios com mais de 25 anos:");
console.log(ageMore25);
var nameUsers = users.map(function (user) { return user.name; });
console.log("nome dos usuários:");
console.log(nameUsers);
var usersMoreOne = users.map(function (user) { return (__assign(__assign({}, user), { age: user.age + 1 })); });
console.log("usuarios com idade somado 1");
console.log(usersMoreOne);
console.log("Nome e status dos usuários:");
users.forEach(function (user) {
    var active;
    if (user.status) {
        active = "Ativo";
    }
    else {
        active = "Inativo";
    }
    console.log(user.name, active);
});
var TotalAge = users.reduce(function (total, user) { return (total + user.age); }, 0);
console.log("Soma das idades do usu\u00E1rios: ".concat(TotalAge));

var totalActiveUsers = users.reduce(function (total, user) { return (total + (user.status ? 1 : 0)); }, 0);
console.log("Quantidade de usu\u00E1rios ativos: ".concat(totalActiveUsers));

const JoaoName = users.find((user) => user.name.toLowerCase().includes("João".toLowerCase()))
console.log(`1º Usuário com nome "João": ${JoaoName.name}`)

const UsuarioInativo = users.find((user) => user.status === false)
console.log(`1º Usuário inativo: ${UsuarioInativo.name}`)
