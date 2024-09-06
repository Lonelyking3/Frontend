// Dropdown content

function select(){
    Adult = document.getElementById('adult').value;
    Child = document.getElementById('child').value;
    Infant = document.getElementById('infant').value;

    let passangerText = `${Adult} Adult`;
    if(Adult > 1){
        passangerText = `${Adult} Adults`;
    }

    if(Child > 0){
        if(Child == 1){
            passangerText += `, ${Child} Child`;
        }
        else{
            passangerText += `, ${Child} Children`;
        }
    }
    
    if(Infant > 0){
        if(Infant == 1){
            passangerText += `, ${Infant} Infant`;
        }
        else{
            passangerText += `, ${Infant} Infants`;
        }
    }


    document.querySelector(".passangers").value = passangerText;
    
}

document.addEventListener("DOMContentLoaded",function(){
    select();
});

//Main Content

document.addEventListener("DOMContentLoaded", function() {
    loadBooking();
});

function loadBooking() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    if (bookings.length > 0) {
        const latestBooking = bookings[bookings.length - 1];
        document.getElementById("dep").value = latestBooking.departureCity || '';
        document.getElementById("arr").value = latestBooking.arrivalCity || '';
        document.getElementById("depD").value = latestBooking.departureDate || '';
        document.getElementById("arrD").value = latestBooking.arrivalDate || '';

        document.getElementById('no2').innerHTML =
        `<h4 class="Dep">${latestBooking.departureCity}</h4> 
        <span class="aro"><i class="fa fa-arrows-h"></i></span>
        <h4 class="Ret">${latestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${latestBooking.departureDate}</h4> 
        <h4 class="Reto">${latestBooking.arrivalDate}</h4> 
        <button onclick="Book()" class="Bookb">Book</button>`;
       
        
        document.getElementById('no3').innerHTML =
        `<h4 class="Dep">${latestBooking.departureCity}</h4> 
        <span class="aro"><i class="fa fa-arrows-h"></i></span>
        <h4 class="Ret">${latestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${latestBooking.departureDate}</h4> 
        <h4 class="Reto">${latestBooking.arrivalDate}</h4> 
        <button onclick="Book()" class="Bookb">Book</button>`;

        document.getElementById('no4').innerHTML =
        `<h4 class="Dep">${latestBooking.departureCity}</h4> 
        <span class="aro"><i class="fa-solid fa-arrows-left-right"></i></span>
        <h4 class="Ret">${latestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${latestBooking.departureDate}</h4> 
        <h4 class="Reto">${latestBooking.arrivalDate}</h4> 
        <button onclick="Book()" class="Bookb">Book</button>`;
    }
}

// Updated Data

function UpdateloadBooking() {
    const ticket = JSON.parse(localStorage.getItem('ticket')) || [];

    if (ticket.length > 0) {
        const UlatestBooking = ticket[ticket.length - 1];
        document.getElementById("dep").value = UlatestBooking.departureCity || '';
        document.getElementById("arr").value = UlatestBooking.arrivalCity || '';
        document.getElementById("depD").value = UlatestBooking.departureDate || '';
        document.getElementById("arrD").value = UlatestBooking.arrivalDate || '';
    
        document.getElementById('no2').innerHTML = 
        `<h4 class="Dep">${UlatestBooking.departureCity}</h4> <span class = "aro"><i class="fa fa-arrows-h"></i></span> 
        <h4 class="Ret">${UlatestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${UlatestBooking.departureDate}</h4> 
        <h4 class="Reto">${UlatestBooking.arrivalDate}</h4>
        <button onclick="Book()" class="Bookb">Book</button>`;
        
        document.getElementById('no3').innerHTML = 
        `<h4 class="Dep">${UlatestBooking.departureCity}</h4> <span class = "aro"><i class="fa fa-arrows-h"></i></span>
        <h4 class="Ret">${UlatestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${UlatestBooking.departureDate}</h4> 
        <h4 class="Reto">${UlatestBooking.arrivalDate}</h4>
        <button onclick="Book()" class="Bookb">Book</button>`;
        
        document.getElementById('no4').innerHTML = 
        `<h4 class="Dep">${UlatestBooking.departureCity}</h4> <span class = "aro"><i class="fa fa-arrows-h"></i></span>
        <h4 class="Ret">${UlatestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${UlatestBooking.departureDate}</h4> 
        <h4 class="Reto">${UlatestBooking.arrivalDate}</h4>
        <button onclick="Book()" class="Bookb">Book</button>`;
    }
}

function updateBooking() {
    const departureCity = document.getElementById('dep').value;
    const arrivalCity = document.getElementById('arr').value;
    const departureDate = document.getElementById('depD').value;
    const arrivalDate = document.getElementById('arrD').value;
    const passangers = document.getElementById('passan').value;

    if (departureCity && arrivalCity && departureDate && arrivalDate && passangers) {
        const updatedBookings = {
            departureCity,
            arrivalCity,
            departureDate,
            arrivalDate,
            passangers
        };

        let ticket = JSON.parse(localStorage.getItem('ticket')) || [];
        ticket = [updatedBookings];  // Keep only the latest booking
        localStorage.setItem('ticket', JSON.stringify(ticket));

        alert('Create a booked successfull page!');
        UpdateloadBooking();
    } else {
        alert('Please fill in all the fields.');
    }
}

function Book() {
    updateBooking();
    window.location.href = "../Admin/ManagementPage.html";
}
