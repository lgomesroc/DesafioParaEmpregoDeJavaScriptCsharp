//Desafio 1 ---------------------------------------

const validateInput = () => {
    const name = $("#Nome").val();
    const email = $("#email").val();
    const send = $("#send").val();
    const salary = $("#salary").val();
    //Desafio 3 ---------------------------------------
 // OBS: Optei por realizar o terceiro teste aqui para não ser necessário chamar duas funções
   

    if(name === "") {
        $('#Nome').css('border', '2px solid red');
    } 

    if(email === "") {
        $('#email').css('border', '2px solid red');
    }

    if(salary === "") {
        $('#salary').css('border', '2px solid red');
    }
    
    else {

   
    console.log("Desafio 1:");
    console.log(name);
    console.log(email);
    console.log(send);
    console.log("----------------------------------");
    }

    
}

//Desafio 2 ---------------------------------------

const verifyCheckbox = () => {
   const checkbox = $('#alert');

   if(checkbox.is(":checked")) {
     console.log("O usuário deve ser alertado!")
   } else {
    console.log("O usuário não deseja ser alertado!")
   }
}


//Desafio 4 ---------------------------------------
const send = $("#send");
const salary = $("#salary").val();

$(document).ready(function() {
    send.attr('disabled', 'disabled');
 
    $('input[type=text]').on('input', function() {
        if ($(this).val() !== '') {
            send.removeAttr("disabled");
        }
        else {
            send.attr('disabled', 'disabled');
        }
    });
});


//Desafio 5 ---------------------------------------
$(function(){
    $('#salary').maskMoney({
      prefix:'R$ ',
      allowNegative: true,
      thousands:'.', decimal:',',
      affixesStay: true});
})