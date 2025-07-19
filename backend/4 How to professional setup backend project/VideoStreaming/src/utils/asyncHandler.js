            // using promises

const asyncHandler = (requestHandler) =>{
    (req , res , next ) => {
        Promise.resolve(requestHandler(req , res, next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}


        // try and catch methods 


// easy explanatin of how we have created that larger code , these three lines are just break down of it 
// const asyncHandler = () => {}
// const asyncHandler = (func) =>  () => {}
// const asyncHandler = (func) => async () => {}





            // this is a try catch method


// const asyncHandler = (fn) => async (req, res, next ) =>{

//     try{
//         await fn(req, res, next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success : false,
//             message : err.message
//         })
//     }

// }