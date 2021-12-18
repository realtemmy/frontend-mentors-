form = document.getElementById('form');
inputValue = document.querySelectorAll('input')
button = document.getElementById('btn');

form.addEventListener('submit', (e)=>{
    e.preventDefault();


    inputValue.forEach(value =>{
        
        if (value.value === ''){
            if (value.type === 'text'){
                value.style.borderColor = 'red';
                const firstName = document.getElementById('errFirst');
                firstName.innerText = `First Name cannot be empty`;
                firstName.className = 'errstyle';
            }
            if (value.type === 'search'){
                value.style.borderColor = 'red';
                const lastName = document.getElementById('errLast');
                lastName.innerText = `Last Name cannot be empty`;
                lastName.className = 'errstyle';
            }
            if (value.type === 'email'){
                value.style.borderColor = 'red';
                const email = document.getElementById('errEmail');
                email.innerText = `Email cannot be empty`;
                email.className = 'errstyle';
            }
            if (value.type === 'password'){
                value.style.borderColor = 'red';
                const password = document.getElementById('errPassword');
                password.innerText = `Password cannot be empty`;
                password.className = 'errstyle';
            }

        }
        else{
            alert('No input is empty')
            // if(value.type === 'email'){
            //     if (value.value.contains('@gmail.com')) {
            //         console.log('yhhhhh!')
            //     }else{
            //         console.log('nahh!')
            //     }
            // }
        }

    });
});
