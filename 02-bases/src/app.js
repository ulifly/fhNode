

const { getUserById } = require("./js-foundation/03-callbacks");

// console.log(emailTemplate);

const id = 4;

getUserById(id, (error, user) => {
    if(error ){
        throw new Error(error);  
    }
    console.log("Usuario encontrado: ", user);
});