function clearErrors()
{ 
document.getElementById('errors-content').innerHTML
 = "" ;

document.getElementById('errors').classList.remove('d-block');

document.getElementById('errors').classList.add('d-none');

}



function validateForm()
{
    clearErrors();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    date = document.getElementById('date').value;
    var pasSword = document.getElementById('pasSword').value;
  

    var errors = "";

    if(isEmpty(firstName) ||
        isEmpty(lastName) ||
        isEmpty(email)   ||
        isEmpty(date)   ||
        isEmpty(pasSword))
            {
                errors += "<li>Please fill in all field.</li>";
            }

    if(errors != "")
    {
        document.getElementById('errors-content').innerHTML = 
        "<ul class='errors-list'>"+errors+"</ul>";

document.getElementById('errors').classList.remove('d-none');
document.getElementById('errors').classList.add('d-block');

	return false;

}
    else { 
    return true;
    }

}

function isEmpty(field)
{
    if(field == "")
    {
        return true;
    }
    else
    {
        return false;
    }
}