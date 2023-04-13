import './scss/main.scss'
function get_creator_name(name) {
    const element = document.createElement('p');
    let str='This template is created by '+name;
    element.textContent = str;
    return element;
}
document.body.prepend(get_creator_name('Yulian Bohomol'));