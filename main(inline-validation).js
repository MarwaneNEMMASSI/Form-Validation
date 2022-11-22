let familyname = document.formulaire.FamilyName.value
                let name = document.formulaire.Name.value
                let checkName = /^[a-z]{1,30}$/
                let email = document.formulaire.Email.value
                let checkEmail = /\w\.\w+(@ofppt\.ma)/
                let phoneNumber = document.formulaire.Téléphone.value
                let checkNumber = /(^05|^06|^07)\d{8}/
                let clubSelection = []
                let clubListe = document.getElementById("Liste")

            document.getElementById("infoFamilyname").addEventListener('input', CheckFamilyName())   
                function CheckFamilyName ()
                {
                    let familyname = document.formulaire.FamilyName.value
                    if(!checkName.test(familyname))
                    {
                        infoFamilyname.classList.add('invalid');
                        infoFamilyname.classList.remove('valid')
                        document.getElementById("familynameErrorMessage").innerHTML = "Le nom doit faire entre 1 et 30 caractères de long"
                    }
                        else
                        {
                            infoFamilyname.classList.add('valid');
                            infoFamilyname.classList.remove('invalid')
                            document.getElementById("familynameErrorMessage").innerHTML = ""
                        }
  
                }

            document.getElementById("infoName").addEventListener('input', CheckName())
            function CheckName()
                {
                    let name = document.formulaire.Name.value

                    if(!checkName.test(name))
                    {
                        infoName.classList.add('invalid')
                        infoName.classList.remove('valid')
                        document.getElementById("nameErrorMessage").innerHTML = "Le prénom doit faire entre 1 et 30 caractères de long"
                    }
                        else
                        {
                            infoName.classList.add('valid')
                            infoName.classList.remove('invalid')
                            document.getElementById("nameErrorMessage").innerHTML = ""
                        }      
                }

            document.getElementById("infoEmail").addEventListener('input', CheckEmail())
            function CheckEmail()
                {
                    let email = document.formulaire.Email.value
                    let checkEmail = /\w\.\w+(@ofppt\.ma$)/

                    if(!checkEmail.test(email))
                    {
                        infoEmail.classList.add('invalid')
                        infoEmail.classList.remove('valid')
                        document.getElementById("emailErrorMessage").innerHTML = "L'email doit être valide (Ex : prénom.nom@ofppt.ma)"
                    }
                        else
                        {
                            infoEmail.classList.add('valid')
                            infoEmail.classList.remove('invalid')
                            document.getElementById("emailErrorMessage").innerHTML = ""
                        }
                }

            document.getElementById("infoPhonenumber").addEventListener('input', CheckPhoneNumber())
            function CheckPhoneNumber()
                {
                    let phoneNumber = document.formulaire.Téléphone.value
                    let checkNumber = /(^05|^06|^07)\d{8}$/
                    
                    if(!checkNumber.test(phoneNumber))
                    {
                        infoPhonenumber.classList.add('invalid')
                        infoPhonenumber.classList.remove('valid')
                        document.getElementById("PhoneErrorMessage").innerHTML = "Rentrez un numéro valide"
                    }
                        else
                        {
                            infoPhonenumber.classList.add('valid')
                            infoPhonenumber.classList.remove('invalid')
                            document.getElementById("PhoneErrorMessage").innerHTML = ""
                        }
                }

                document.getElementById("submit").addEventListener('click', function ValidateForm() {

                    let a = true

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

                    if (infoPhonenumber.classList == 'valid' && infoName.classList == 'valid' && infoEmail.classList == 'valid' && infoFamilyname.classList == 'valid' && a == true)
                        {
                            window.location.href = "confirmationpage.html"
                        }
                        })               