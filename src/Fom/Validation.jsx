const Validation  =(InputsValues) =>{

    let errs = {} ;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
     //valid the username 
          if ((InputsValues.username === "") ){
          errs.username = " Enter your username please   "
         }
         else  if(InputsValues.username[0]){
            if(InputsValues.username[0] !== InputsValues.username[0].toUpperCase() )
               errs.username = " must be with capital letter "
         }
         if(InputsValues.username){
            if(InputsValues.username.length > 18)
             errs.username = " must be less than 18 character "
         }

       
         //valid the Email 
        if(InputsValues.email === "" ){
             errs.email ="Enter your email"
           } 
      
         else if(!InputsValues.email.match(validRegex)){
             errs.email = "Enter the correct form  please "
         } 
        
    //valid the password
    
    const   lowerCaseLetters = /[a-z]/g;
    const   upperCaseLetters = /[A-Z]/g;
    const  numbers = /[0-9]/g;
    if(InputsValues.password === "" ){
        errs.password = "Enter the password please "
      } 
     if(!InputsValues.password.match(lowerCaseLetters)){
       errs.password = " must have a lowerCase letter"
     }
     if(!InputsValues.password.match(upperCaseLetters)){
        errs.password = " must have a upperCase Letters"
      }
      if(!InputsValues.password.match(numbers)){
        errs.password = " must have a numbers"
      }
      if(InputsValues.password){
        if(InputsValues.username.length > 20)
         errs.username = " must be less than 20 character "
     }
     //valid the confirm password  

     if(InputsValues.password !== InputsValues.cpassword ){
        errs.cpassword = "verif your password "
      }
      return errs ;
}
export default Validation ;