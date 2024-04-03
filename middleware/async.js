const asyncWrapper = (fn) => {  // fn is the route handler function
return async(req, res, next ) =>{  // next is the next middleware function provided by the express stack.
    try{
        await fn(req, res, next)
    }
    catch(error){
        next(error)/// sends to the next middleware
    }
  }
}

module.exports = asyncWrapper