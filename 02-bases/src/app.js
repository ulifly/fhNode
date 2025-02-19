

const { getUserById } = require("./js-foundation/04-arrow");

// console.log(emailTemplate);

const id = 2;

getUserById(id, (error, user) => {
    if(error ){
        throw new Error(error);  
    }
    console.log("Usuario encontrado: ", user);
});