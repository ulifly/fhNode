const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
    {
        id: 3,
        name: 'Jim Doe',
    },
];

const getUserById = ( id ) => {
    const user = users.find( function(user){
        return user.id === id;
    });
    console.log(user);
}