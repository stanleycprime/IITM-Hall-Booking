document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmation');

    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const hall = document.getElementById('hall').value;
        const date = document.getElementById('date').value;
        const participants = document.getElementById('participants').value;

        if (!name) {
            showMessage('Please enter your full name.', 'error');
            return;
        }
        if (!hall) {
            showMessage('Please select a conference hall.', 'error');
            return;
        }
        if (!date) {
            showMessage('Please select a booking date.', 'error');
            return;
        }
        if (participants < 1 || participants > 200) {
            showMessage('Number of participants must be between 1 and 200.', 'error');
            return;
        }

        showMessage(`Booking Confirmed! 
            Hall: ${hall}
            Date: ${date}
            Participants: ${participants}
            Confirmation sent to ${name}`, 'success');

        bookingForm.reset();
    });

    function showMessage(message, type) {
        confirmationMessage.textContent = message;
        confirmationMessage.className = `confirmation-message ${type}`;
    }

    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});