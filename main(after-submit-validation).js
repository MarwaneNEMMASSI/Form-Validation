document.getElementById("submit").addEventListener('click', function ValidateForm() {

    let familyname = document.formulaire.FamilyName.value
    let name = document.formulaire.Name.value
    let checkName = /^[a-z]{1,30}$/
    let email = document.formulaire.Email.value
    let checkEmail = /\w\.\w+(@ofppt\.ma$)/
    let phoneNumber = document.formulaire.Téléphone.value
    let checkNumber = /(^05|^06|^07)\d{8}$/
    let clubSelection = []
    let clubListe = document.getElementById("Liste")
    let a = true

    
    if(!checkName.test(familyname))
        {
            document.getElementById("infoFamilyname").style.borderColor = "red";
            document.getElementById("familynameErrorMessage").innerHTML = "Le nom doit être entre 1 et 30 caractères"
            a = false
        }
        else
        {
            document.getElementById("familynameErrorMessage").innerHTML = ""
            document.getElementById("infoFamilyname").style.borderColor = "green";
        }
    if(!checkName.test(name))
        {
            document.getElementById("infoName").style.borderColor = "red";
            document.getElementById("nameErrorMessage").innerHTML = "Le prénom doit être entre 1 et 30 caractères"
            a = false
        }
        else
        {
            document.getElementById("infoName").style.borderColor = "green";
            document.getElementById("nameErrorMessage").innerHTML = ""

        }

    if(!checkEmail.test(email))
        {
            document.getElementById("infoEmail").style.borderColor = "red";
            document.getElementById("emailErrorMessage").innerHTML = "L'email doit être valide (Ex : prénom.nom@ofppt.ma)"

            a = false
        }
        else
        {
            document.getElementById("infoEmail").style.borderColor = "green";
            document.getElementById("emailErrorMessage").innerHTML = ""
        }

    if(!checkNumber.test(phoneNumber))
        {

            document.getElementById("infoPhonenumber").style.borderColor = "red";
            document.getElementById("PhonenumberErrorMessage").innerHTML = "Rentrez un numéro valide"

            a = false
        }
        else
        {
            document.getElementById("infoPhonenumber").style.borderColor = "green";
            document.getElementById("PhonenumberErrorMessage").innerHTML = ""

        }
    if (document.getElementById("masculin").checked == false && document.getElementById("feminin").checked == false) 
        {
            document.getElementById("ErrorMessage").innerHTML = "Choisissez une option"
            a = false
        }
        else
        {
            document.getElementById("ErrorMessage").innerHTML = ""
        }
    if (document.getElementById("groupe1").checked == false && document.getElementById("groupe2").checked == false && document.getElementById("groupe3").checked == false && document.getElementById("groupe4").checked == false && document.getElementById("groupe5").checked == false) 
        {
            document.getElementById("GroupErrorMessage").innerHTML = "Choisissez une option"
            a = false
        }
        else
        {
            document.getElementById("GroupErrorMessage").innerHTML = ""
        }

        for (let i = 0; i < clubListe.options.length; i++)
            {
                if(clubListe.options[i].selected)
                    {
                        clubSelection.push(clubListe.options[i])
                    }
            }
        if(clubSelection.length < 1)
         {
            document.getElementById("resultatclubselection").innerHTML = "Choisissez au moins un club"
            a = false
         }
            else if(clubSelection.length > 3)
                {
                    document.getElementById("resultatclubselection").innerHTML = "Vous avez le droit de vous inscrire a un maximum de 3 clubs"
                    a = false
                }
                else
                {
                    document.getElementById("resultatclubselection").innerHTML = ""
                }

        if( a == true)
        {
            window.location.href = "confirmationpage.html"
        }

    })