const menu = document.querySelector('#mobilemenu');
const menulink = document.querySelector('.navlink');

const farhan = () =>{
    menu.classList.toggle('is_active');
    menulink.classList.toggle('active');
}

menu.addEventListener('click',farhan);