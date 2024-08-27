    //Login(customer):-
    function cust_log(event){
        event.preventDefault(); 
        const user = document.getElementById('cname').value;
        const pass = document.getElementById('cpassword').value;
        if(user === 'customer' && pass === 'cust123'){
            window.location.href = "index.html";
            clr();
        }
        else{
            alert('Invalid Details');
            clr();
        }
        }
    
        //Login(Admin):-
        function mana_log(event){
        event.preventDefault(); 
        const user = document.getElementById('name').value;
        const pass = document.getElementById('password').value;
        if(user === 'management' && pass === 'mana123'){
            window.location.href = "ManagementPage.html";
            clr();
        }
        else{
            alert('Invalid Details');
            clr();
        }
        }
    
        function clr(){
            document.getElementById('cname').value = "";
            document.getElementById('cpassword').value = "";
            document.getElementById('name').value = "";
            document.getElementById('password').value = "";
            
        }

        