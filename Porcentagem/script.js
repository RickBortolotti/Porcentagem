function calculate() {
    const value = parseFloat(document.getElementById('value').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    
    if (isNaN(value) || isNaN(percentage)) {
        document.getElementById('resultText').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    
    const result = value + (value * (percentage / 100));
    
    document.getElementById('resultText').textContent = `Valor com ${percentage}% adicionado: R$ ${result.toFixed(2)}`;
}
