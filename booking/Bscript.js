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
    }
}


function UpdateloadBooking() {
    const ticket = JSON.parse(localStorage.getItem('ticket')) || [];

    if (ticket.length > 0) {
        const UlatestBooking = ticket[ticket.length - 1];
        document.getElementById("name").value = UlatestBooking.Name || '';
        document.getElementById("dep").value = UlatestBooking.departureCity || '';
        document.getElementById("arr").value = UlatestBooking.arrivalCity || '';
        document.getElementById("depD").value = UlatestBooking.departureDate || '';
        document.getElementById("arrD").value = UlatestBooking.arrivalDate || '';
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

        alert('Booking updated successfully!');
        UpdateloadBooking();
    } else {
        alert('Please fill in all the fields.');
    }
    
    window.location.href = "../Admin/ManagementPage.html";
}