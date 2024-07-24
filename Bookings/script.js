document.addEventListener('DOMContentLoaded', () => {
    const cancelButtons = document.querySelectorAll('.btn-cancel');

    cancelButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const confirmed = confirm('Are you sure you want to cancel this booking?');

            if (confirmed) {
                // Get the booking item element
                const bookingItem = event.target.closest('.booking-item');

                // Remove the booking item from the DOM
                bookingItem.remove();

                // Optionally, you can add AJAX code here to inform the server about the cancellation
                // Example:
                // const bookingId = bookingItem.dataset.bookingId;
                // fetch(`/cancel-booking/${bookingId}`, { method: 'POST' })
                //     .then(response => response.json())
                //     .then(data => {
                //         if (data.success) {
                //             bookingItem.remove();
                //         } else {
                //             alert('Failed to cancel booking');
                //         }
                //     });
            }
        });
    });
});
