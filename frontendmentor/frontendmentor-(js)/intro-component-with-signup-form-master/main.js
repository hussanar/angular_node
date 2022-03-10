// /* eslint-disable */ 
// const form = document.getElementById('form');
// const fname = document.getElementById('fname ');
// const lname = document.getElementById('lname');
// const email= document.getElementById(' email');
// const password = document.getElementById('password ');
 

// form.addEventListener('submit',e=>{e.preventDefault()
//     var firstName=fname.Value.trim();
//     var lastName=lname.Value.trim();
//     var emialValue=email.Value.trim();
//     var passwordValue=password.Value.trim();
//     const pattern= /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

//     if (firstName===''){
//         errorFunc(fname,'First name cannot be empty')
//     }
//     else{
//         successFunc(fname)
//     }
    
//     if (lastName===''){
//         errorFunc(lname,'First name cannot be empty')
//     }
//     else{
//         successFunc(lname)
//     }
//     if (emialValue===''){
//         errorFunc(email,'First name cannot be empty')
//     }else if(!emialValue.match(pattern))
//      errorFunc(email,'looks like not a email')
//     else{
//         successFunc(email)
//     }
//     if (passwordValue===''){
//         errorFunc(password,'First name cannot be empty')
//     }
//     else{
//         successFunc(fname)
//     }
// } )
// function errorFunc(req,message){
//     const formControl =req.parentElement;
//     const span =formControl.querySelector('span');
//     span.innerText= message;
//     req.className+='error';
//     span.className+='error-text';

    
// }
// function successFunc(req){
//     req.className+='success';
// }

function checkMail() {
    var fname=document.getElementById('fname').value;
    var fname=fname.value;
     var email=document.getElementById('email').value;
      var mail = email.value;
      
              var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}(com|ca|net|org|fr|us|qc.ca|gouv.qc.ca)$', 'i');
      
      
      
       if(!reg.test(mail) || mail == "")
          {
          alert("Your email address isn't valid!");
      
                return false;
      
              }
       else {
      
                  alert("Email address is okay, let's send the form!");    
      
              }
 if(fname == "")
              {
              alert(" Enter Your name!");
          
                    return false;
          
                  }
      
            }
      
