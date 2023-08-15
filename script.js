document.getElementById('calculateBtn').addEventListener('click', function() {
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    
    if (isNaN(hourlyRate) || isNaN(hoursWorked)) {
        document.getElementById('result').textContent = "Por favor, insira valores válidos.";
    } else {
        const totalPayment = hourlyRate * hoursWorked;
        document.getElementById('result').textContent = `Total a receber: R$ ${totalPayment.toFixed(2)}`;
    }
});
