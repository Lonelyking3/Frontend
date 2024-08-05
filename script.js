         function custlogin(){
            document.getElementById('cust-login').classList.remove('hidden');    
            document.getElementById('mana-button').classList.add('hidden');
            document.getElementById('cust-button').classList.add('hidden');
        }

        function Back(){
            document.getElementById('cust-login').classList.add('hidden');
            document.getElementById('Manage-Login').classList.add('hidden');
            document.getElementById('mana-button').classList.remove('hidden');
            document.getElementById('cust-button').classList.remove('hidden');

        }

        function manageLogin(){
            document.getElementById('Manage-Login').classList.remove('hidden');    
            document.getElementById('mana-button').classList.add('hidden');
            document.getElementById('cust-button').classList.add('hidden');
        }

        function CustSubmit(){
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if(username === 'customer' && password === 'cust123'){
                window.location.href = "CustomerPage.html";
            
            }
            else{
                alert('Enter a valid info!');
            }
        }

        function manaSubmit(){
           const user = document.getElementById('Musername').value;
           const pass = document.getElementById('Mpassword').value;
           if(user === 'management' && pass === 'mana123'){
                window.location.href="ManagementPage.html";
           }
           else{
            alert('Enter valid info!');
           }
        }

        function hiddenpass() {
            var x = document.getElementById("password");
            var y = document.getElementById("Mpassword");
            
            if (x.type === "password") {
              x.type = "text";
            } else {
              x.type = "password";
            }

            if (y.type === "password") {
                y.type = "text";
              } else {
                y.type = "password";
              }
          } 