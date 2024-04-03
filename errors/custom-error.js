class CustomApiError extends Error{   // building a custom error class
    constructor(message, statusCode){
        super(message)
        this.statusCode= statusCode
    }
}

const createCustomError = (msg, statusCode) => {  //  building a function which can construct the custom error class.
   return new CustomApiError(msg, statusCode)     
}


module.exports = { createCustomError, CustomApiError}