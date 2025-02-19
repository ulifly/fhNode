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

const getUserById = ( id, callback ) => {
    const user = users.find( (user)=>user.id === id);

    if( !user){
        return callback(`USUArio con id: ${id} no encontrado`);
    }
    return callback(null, user);
}

module.exports = {
    getUserById,
};
