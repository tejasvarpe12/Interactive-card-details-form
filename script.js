document.getElementById('card-form').addEventListener('input', function() {
    document.querySelector('.card-number').textContent = document.getElementById('card-number').value || '0000 0000 0000 0000';
    document.querySelector('.card-name').textContent = document.getElementById('cardholder-name').value || 'Tejas Varpe';
    document.querySelector('.card-expiry').textContent = (document.getElementById('exp-month').value || '00') + '/' + (document.getElementById('exp-year').value || '00');
    document.querySelector('.card-cvv').textContent = document.getElementById('cvv').value || '000';
});

document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const cardNumber = document.getElementById('card-number').value;
    const expMonth = document.getElementById('exp-month').value;
    const expYear = document.getElementById('exp-year').value;
    const cvv = document.getElementById('cvv').value;

    
    if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
        isValid = false;
        alert('Card number format is invalid');
    }
    if (!/^\d{2}$/.test(expMonth) || !/^\d{2}$/.test(expYear)) {
        isValid = false;
        alert('Expiry date format is invalid');
    }
    if (!/^\d{3}$/.test(cvv)) {
        isValid = false;
        alert('CVV format is invalid');
    }

    if (isValid) {
        document.querySelector('form').classList.add('hidden');
        document.getElementById('success-message').classList.remove('hidden');
    }
});

document.getElementById('continue-button').addEventListener('click', function() {
    document.getElementById('success-message').classList.add('hidden');
    document.querySelector('form').classList.remove('hidden');
    document.getElementById('card-form').reset();
    document.querySelector('.card-number').textContent = '0000 0000 0000 0000';
    document.querySelector('.card-name').textContent = 'Tejas Varpe';
    document.querySelector('.card-expiry').textContent = '00/00';
    document.querySelector('.card-cvv').textContent = '000';
});
