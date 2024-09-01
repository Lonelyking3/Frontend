document.addEventListener("DOMContentLoaded", function() {
    loadBooking();
});

function loadBooking() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    if (bookings.length > 0) {
        const latestBooking = bookings[bookings.length - 1];
        document.getElementById("name").value = latestBooking.Name || '';
        document.getElementById("dep").value = latestBooking.departureCity || '';
        document.getElementById("arr").value = latestBooking.arrivalCity || '';
        document.getElementById("depD").value = latestBooking.departureDate || '';
        document.getElementById("arrD").value = latestBooking.arrivalDate || '';

        document.getElementById('no2').innerHTML =
         `<h4 class="Dep">${latestBooking.departureCity}</h4> 
        <h4 class="Ret">${latestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${latestBooking.departureDate}</h4> 
        <h4 class="Reto">${latestBooking.arrivalDate}</h4> 
        <button onclick="Book()" class="Bookb">Book</button>`;
        
        document.getElementById('no3').innerHTML =
         `<h4 class="Dep">${latestBooking.departureCity}</h4> 
        <h4 class="Ret">${latestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${latestBooking.departureDate}</h4> 
        <h4 class="Reto">${latestBooking.arrivalDate}</h4> 
        <button class="Bookb">Book</button>`;
        
        document.getElementById('no4').innerHTML =
         `<h4 class="Dep">${latestBooking.departureCity}</h4> 
        <h4 class="Ret">${latestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${latestBooking.departureDate}</h4> 
        <h4 class="Reto">${latestBooking.arrivalDate}</h4> 
        <button class="Bookb">Book</button>`;
    }
}

// Updated Data

function UpdateloadBooking() {
    const ticket = JSON.parse(localStorage.getItem('ticket')) || [];

    if (ticket.length > 0) {
        const UlatestBooking = ticket[ticket.length - 1];
        document.getElementById("name").value = UlatestBooking.Name || '';
        document.getElementById("dep").value = UlatestBooking.departureCity || '';
        document.getElementById("arr").value = UlatestBooking.arrivalCity || '';
        document.getElementById("depD").value = UlatestBooking.departureDate || '';
        document.getElementById("arrD").value = UlatestBooking.arrivalDate || '';
    
        document.getElementById('no2').innerHTML = 
        `<h4 class="Dep">${UlatestBooking.departureCity}</h4> 
        <h4 class="Ret">${UlatestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${UlatestBooking.departureDate}</h4> 
        <h4 class="Reto">${UlatestBooking.arrivalDate}</h4>`;
        
        document.getElementById('no3').innerHTML = 
        `<h4 class="Dep">${UlatestBooking.departureCity}</h4> 
        <h4 class="Ret">${UlatestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${UlatestBooking.departureDate}</h4> 
        <h4 class="Reto">${UlatestBooking.arrivalDate}</h4>`;
        
        document.getElementById('no4').innerHTML = 
        `<h4 class="Dep">${UlatestBooking.departureCity}</h4> 
        <h4 class="Ret">${UlatestBooking.arrivalCity}</h4> 
        <h4 class="Frm">${UlatestBooking.departureDate}</h4> 
        <h4 class="Reto">${UlatestBooking.arrivalDate}</h4>`;
    }
}

function updateBooking() {
    const Name = document.getElementById('name').value;
    const departureCity = document.getElementById('dep').value;
    const arrivalCity = document.getElementById('arr').value;
    const departureDate = document.getElementById('depD').value;
    const arrivalDate = document.getElementById('arrD').value;

    if (Name && departureCity && arrivalCity && departureDate && arrivalDate) {
        const updatedBookings = {
            Name,
            departureCity,
            arrivalCity,
            departureDate,
            arrivalDate,
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
}
