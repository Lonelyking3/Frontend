function book(){
    const Name = document.getElementById('name').value;
    const departureCity = document.getElementById('departure-city').value;
    const arrivalCity = document.getElementById('arrival-city').value;
    const departureDate = document.getElementById('departure-date').value;
    const arrivalDate = document.getElementById('arrival-date').value;


    if (Name && departureCity && arrivalCity && departureDate && arrivalDate) {
        
        const booking = {
            Name,
            departureCity,
            arrivalCity,
          departureDate,
            arrivalDate,
        };

        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        alert('Booking successful!');    
        
        clear();
    } 
    else {
        alert('Please fill in all the fields.');
    }

}

function clear(){
    document.getElementById('name').value = "";
    document.getElementById('departure-city').value = "";
    document.getElementById('arrival-city').value = "";
    document.getElementById('departure-date').value = "";
    document.getElementById('arrival-date').value = "";
}

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior : 'smooth'
    });
}

function back(){
    window.location.href = "project.html";
}