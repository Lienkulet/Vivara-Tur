const menuBtn = document.getElementById('collapseBtnId');
const menu = document.getElementById('navMenuItemsId');
const main_services1 = document.getElementById('main-services1');
const main_services2 = document.getElementById('main-services2');

const startup = document.getElementById('STARTUP');
const moldova_italy = document.getElementById('moldova-italy');
const home = document.getElementById('home');
const btnNav = document.getElementById('btnNav');

const transport_at_order = document.getElementById('transport-at-order');

const optionsMobile = document.getElementById('optionsMobile');
const optionsPC = document.getElementById('optionsPC');

const screen = window.matchMedia('(min-width: 901px)')

const rezerveBtn = document.getElementById('btn-rezerveBtn');
const reverseBtn = document.getElementById('btn-reserve');
const cardContainer = document.getElementById('card-container');

const phone = document.getElementById('phone');
const phoneMessage = document.getElementById('phoneMessage');
const data_plecare = document.getElementById('data-plecare');
const data_plecareMessage = document.getElementById('data_plecareMessage');
const orasSosire = document.getElementById('orasSosire');
const orasSosireMessage = document.getElementById('orasSosireMessage');
const orasPlecare = document.getElementById('orasPlecare');
const orasPlecareMessage = document.getElementById('orasPlecareMessage');
const rezerveBtnMessage = document.getElementById('rezerveBtnMessage');

const pass = 'D53AC6395D1CE874B3CA3E6A185ADA60A443'

let phoneOk = 0;
let data_plecareOk = 0;
let orasSosireOk = 0;
let orasPlecareOk = 0;

orasPlecare.addEventListener('input', () => {
    let value = orasPlecare.value;
    let regex = /^[A-Z][a-z]*(\s+[A-Z][a-z]*)*(\s+\([A-Z][a-z]*(\s+[A-Z][a-z]*)*\))?$/;

    if (regex.test(value)) {
        console.log("Plecare is ok");
        orasPlecareOk = 1;
        orasPlecareMessage.textContent = '';
        orasPlecare.style.border = '3px solid green';
    } else {
        orasPlecareMessage.textContent = 'Nume Oras invalid';
        orasPlecare.style.border = '3px solid red';
    }
});

orasSosire.addEventListener('input', () => {
    let value = orasSosire.value;
    let regex = /^[A-Z][a-z]*(\s+[A-Z][a-z]*)*(\s+\([A-Z][a-z]*(\s+[A-Z][a-z]*)*\))?$/;

    if (regex.test(value)) {
        console.log("Sosire is ok");
        orasSosireOk = 1;
        orasSosireMessage.textContent = '';
        orasSosire.style.border = '3px solid green';
    } else {
        orasSosireMessage.textContent = 'Nume Oras invalid';
        orasSosire.style.border = '3px solid red';
    }
});

data_plecare.addEventListener('input', () => {
    let value = data_plecare.value;
    let regex = /^(0[1-9]|[1-2][0-9]|3[0-1])([/\.-])(0[1-9]|1[0-2])\2(202[3-9]|203\d)$/;

    if (regex.test(value)) {
        console.log("Data is ok");
        data_plecareOk = 1;
        data_plecareMessage.textContent = '';
        data_plecare.style.border = '3px solid green';
    } else {
        data_plecareMessage.textContent = 'Data invalidă';
        data_plecare.style.border = '3px solid red';
    }
});

phone.addEventListener('input', () => {
    let value = phone.value;
    let regex = /^\+(373)[0-9]{8}/g;

    if (regex.test(value)) {
        console.log("Phone is ok");
        phoneOk = 1;
        phoneMessage.textContent = '';
        phone.style.border = '3px solid green';
    } else {
        phoneMessage.textContent = 'Telefonul nu corespunde';
        phone.style.border = '3px solid red';
    }
});

reverseBtn.addEventListener('click', () => {
     phoneOk = 0;
     data_plecareOk = 0;
     orasSosireOk = 0;
     orasPlecareOk = 0;

     phone.value = '';
     data_plecare.value = '';
     orasPlecare.value = '';
     orasSosire.value = '';

     phone.style.border = '1px solid gray';
     data_plecare.style.border = '1px solid gray';
     orasPlecare.style.border = '1px solid gray';
     orasSosire.style.border = '1px solid gray';


    cardContainer.classList.toggle('rotate');
});


function checkNavbar(){
   if(startup.classList.contains('close')){

    if(moldova_italy.classList.contains('open')){
        moldova_italy.classList.remove('open');
        moldova_italy.classList.add('close');
    } 
    else{
        transport_at_order.classList.remove('open');
        transport_at_order.classList.add('close');
    }

    startup.classList.remove('close');
    startup.classList.add('open');
   }
};

main_services1.addEventListener('click', () => {
    startup.classList.add('close');
 
 

    moldova_italy.classList.remove('close');
    moldova_italy.classList.add('open');
});

main_services2.addEventListener('click', () => {
    startup.classList.add('close');

  

    transport_at_order.classList.remove('close');
    transport_at_order.classList.add('open');
});

home.addEventListener('click', () => {
    moldova_italy.classList.add('close');
    moldova_italy.classList.remove('open');

    startup.classList.remove('close');
    startup.classList.add('open');

   
});


menuBtn.onclick = () => {
    menu.classList.toggle('open');
}


function sendEmail(e) {
    e.preventDefault();

    if (phoneOk && data_plecareOk && orasSosireOk && orasPlecareOk) {
        cardContainer.classList.toggle('rotate');
        rezerveBtnMessage.textContent = '';
        rezerveBtn.style.backgroundColor = '#61ce70';
        let rezerveMessage = orasPlecare.value + ' -->' + orasSosire.value + '\n Data: ' + data_plecare.value + "\n NR TEL: " + phone.value;
        
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "clocicovalexandru@gmail.com",
            Password: pass,
            To: 'clocicovalexandru@gmail.com',
            From: "clocicovalexandru@gmail.com",
            Subject: "O noua Rezervare",
            Body: rezerveMessage
        });
    }
    else {
        rezerveBtnMessage.textContent = 'Nu sunt completate toate campurile!';
        rezerveBtn.style.backgroundColor = 'red';
    }
}