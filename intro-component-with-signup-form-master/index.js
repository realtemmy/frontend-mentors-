form = document.getElementById('form');
inputValue = document.querySelectorAll('input')
button = document.getElementById('btn');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    inputValue.forEach(value =>{
            div = document.createElement('div');
            divText = document.createTextNode(`${value.placeholder} must not be empty`);
            div.appendChild(divText);
            div.className = 'input-div';
            console.log(value.value)

        if (value.value === ''){
            if (value.type === 'text'){
                value.style.borderColor = 'red';
                form.insertBefore(div, errFirst)
            }
            if (value.type === 'search'){
                value.style.borderColor = 'red';
                form.insertBefore(div, errLast)
            }
            if (value.type === 'email'){
                value.style.borderColor = 'red';
                form.insertBefore(div, errEmail)
            }
            if (value.type === 'password'){
                value.style.borderColor = 'red';
                form.insertBefore(div, errPassword)
            }

        }

    });
});