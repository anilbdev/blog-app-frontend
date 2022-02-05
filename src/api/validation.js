function validation_signup(values){
    const errors = {}
    const regex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(!values.username){
        errors.username = "Name is required!!"
    }
    if(!values.email){
        errors.email = "Email is required!!"
    }else if(!regex.test(values.email)){
        errors.email = "Email is Invalid!!"
        
    }if(!values.password){
        errors.password = "Password is Required!!"
        
    }else if(values.password.length <5){
        errors.password = "Password is too short!!"

    }
    return errors
}


function validation_login(values){
    const errors = {}
    const regex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    
    if(!values.email){
        errors.email = "Email is required!!"
    }else if(!regex.test(values.email)){
        errors.email = "Email is Invalid!!"
        
    }if(!values.password){
        errors.password = "Password is Required!!"
        
    }else if(values.password.length <5){
        errors.password = "Password is too short!!"

    }
    return errors
}

export {
    validation_signup,
    validation_login
}