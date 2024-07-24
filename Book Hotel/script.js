document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const hotelName = document.getElementById('hotelName').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;

    fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hotelName,
        checkInDate,
        checkOutDate
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Booking successful!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Booking failed!');
    });
  });