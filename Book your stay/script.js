document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const checkIn = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;

  if (!name || !email || !checkIn || !checkOut) {
    alert('Please fill out all fields');
  } else {
    // Process booking (send data to server)
    alert('Booking successful!');
    document.getElementById('booking-form').reset();
  }
});
