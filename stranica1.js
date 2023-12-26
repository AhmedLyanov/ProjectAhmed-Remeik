
// function login() {
//     let enteredUsername = document.getElementById('username').value;
//     let enteredPassword = document.getElementById('Password').value;
    
    
//     let users = [
//       { username: 'Ахмед', password: '123456789'}
//     ];
  
//     for (let i = 0; i < users.length; i++) {
//       if (enteredUsername === users[i].username && enteredPassword === users[i].password) {
//         alert('Подождите, идет перенаправление');
//         window.location.href = `./stranica2.html`;
//         return; 
       
//       }
//     }
  
//         alert('Неправильное имя пользователя или пароль.');
//   }

 

  function loginAndRedirect() {
    let enteredUsername = document.getElementById('username').value;
    let enteredPassword = document.getElementById('password').value;
    
  
    if (enteredUsername === 'Ahmed' && enteredPassword === '12345') {
      alert('Успешный вход. Перенаправление...');
      window.location.href = 'page2.html'; 
    } else {
      alert('Неправильное имя пользователя или пароль.');
    }
  }










  