import './style.css';


function component() {


    const element = document.createElement('ul');
    const element2 = document.createElement('li');
    element2.innerHTML = 'Helloooooooo';
    element.appendChild(element2);
    console.log(element);
    document.getElementById('containerDiv').appendChild(element);
    
    return element;
}

component();

const element = document.createElement('ul');
element.id='helooyyvhjdbvljafvabjd';
document.getElementById('containerDiv').appendChild(element);