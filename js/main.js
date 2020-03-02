//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function () {
    console.log('JS Loaded - Everything OK!');
});


//-------------------- Variable body usada multiples veces en la ejecución de modales
var body = document.getElementsByTagName('body')[0];


//-------------------- Overlay Estudio de crédito
function showModalStudy() {
    document.getElementById('StudyProcess').classList.add('contStudyProcess--isShow');
    body.classList.add('is--scrollLocked');
}


//-------------------- Overlay Modal
function showModal() {
    document.getElementById('modalDefault').classList.add('contModal--isShow');
    body.classList.add('is--scrollLocked');
}

function hideModal() {
    document.getElementById('modalDefault').classList.remove('contModal--isShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Overlay Canguro
function showKangaroo() {
    document.getElementById('contCanguro').classList.add('contCanguroMain--iscanguroShow');
    body.classList.add('is--scrollLocked');
}

function hideKangaroo() {
    document.getElementById('contCanguro').classList.remove('contCanguroMain--iscanguroShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Mostrar Direccion
function chengeAddress() {
    document.getElementById('triggerChangeAddress').style.display = 'none';
    document.getElementById('adressDefault').style.display = 'none';
    document.getElementById('adressAltern').style.display = ''; //vacio para que tome el flex que trae por defecto
}


//-------------------- Mostrar datos ocultos confirmación y resultados
function seeMoreDetails() {
    document.getElementById('result__ConfirToggleOpen').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'block';
    document.getElementById('result__ConfirToggleClose').style.display = '';
}

function seeLessDetails() {
    document.getElementById('result__ConfirToggleClose').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen').style.display = '';
}


// Validacion para iniciar objetivo de inversion screen 9 
var element = document.getElementById('selectDay');
document.getElementById('myFormObjectives').addEventListener('change', window.onload = function () {
    if (element.value === 'dayTwo') {
        console.log("qwertyu");
        document.getElementById('validateObjectives').classList.add('button--primary');
    }
    else if (element.value === 'dayOne') {
        document.getElementById('validateObjectives').classList.add('button--primary');
    }
});

// Validacion terminos y condiciones screen 11
function checkConditions() {
    let checkbox = document.getElementById("conditions");
    if (checkbox.checked == true) {
        console.log("true");
        document.getElementById('validateTermsConditions').classList.add('button--primary');
    }
    else {
        document.getElementById('validateTermsConditions').classList.remove('button--primary');
        console.log("false");
    }
}

//Validacion OTP
function otpValue(){
    var x = document.getElementById("OTP").value;
    if(x.length > 3){
        document.getElementById('validateOtp').classList.add('button--primary');
        document.getElementById("validateOtp").disabled = false;
    }
    else {
        document.getElementById('validateOtp').classList.remove('button--primary');
        document.getElementById("validateOtp").disabled = true;
    
    }
}