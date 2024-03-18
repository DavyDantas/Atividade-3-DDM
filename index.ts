type User = {
    id: number;
    name:string;
    age:number;
    status:boolean;
}

const users:User[] = [
    {id:1,name:"João Pedro",age:22,status:true},
    {id:1,name:"João Emanuel",age:50,status:false},
    {id:2,name:"Jane Smith",age:45,status:false},
    {id:3,name:"Davy Eduardo",age:20,status:true},
    {id:4,name:"Damião Teodósio",age:31,status:true}
];

console.log(`usuarios: ${users}`)

const activeUsers = users.filter(user => user.status === true);

console.log(`Usuarios ativos:`)
console.log(activeUsers)

const ageMore25 = users.filter(user=> user.age > 25)

console.log(`Usuários com mais de 25 anos:`)
console.log(ageMore25)

const nameUsers: string[] = users.map( user => user.name)

console.log("nome dos usuários:")
console.log(nameUsers)

const usersMoreOne = users.map( user => ({...user, age: user.age + 1}))
console.log(`usuarios com idade somado 1`)
console.log(usersMoreOne)

console.log("Nome e status dos usuários:")
users.forEach((user) => {
    let active:string

    if (user.status){
        active = "Ativo"
    } else {active = "Inativo"}

    console.log(user.name, active)
})

const TotalAge:number =  users.reduce((total, user) => (total + user.age) , 0 )
console.log(`Soma das idades do usuários: ${TotalAge}`)

const totalActiveUsers = users.reduce( (total, user)=> (total + (user.status?1:0)) ,  0)
console.log(`Quantidade de usuários ativos: ${totalActiveUsers}`)

// const JoaoName = (users as User[]).find((user) => user.name.toLowerCase().includes("João".toLowerCase()))
// console.log(`1º Usuário com nome "João": ${JoaoName.name}`)

// const UsuarioInativo = users.find((user) => user.status === false)
// console.log(`1º Usuário inativo: ${UsuarioInativo.name}`)

