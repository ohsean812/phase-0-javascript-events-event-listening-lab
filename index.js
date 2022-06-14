function addingEventListener() {

    const input = document.getElementById('button');
    
    function click() {
        alert('I was clicked!');
    }
    
    input.addEventListener('click', click);
}

addingEventListener;