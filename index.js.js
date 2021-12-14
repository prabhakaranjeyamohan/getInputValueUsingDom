
var form = document.getElementById('form');
form.addEventListener('submit',function(event){
    event.preventDefault()

    var firstName = document.getElementById('fname').value;
    console.log(firstName);

    var lastName = document.getElementById('lname').value;
    console.log(lastName);

    var middleName = document.getElementById('mname').value;
    console.log(middleName)

    var email = document.getElementById('email').value;
    console.log(email);
})
