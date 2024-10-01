document.getElementById('addProduto').addEventListener('click', function() {
    const produtoInput = document.getElementById('produto');
    const produtoValor = parseFloat(produtoInput.value);
    
    // Verifica se o valor é válido e maior que 0
    if (!isNaN(produtoValor) && produtoValor > 0) {
        const listaProdutos = document.getElementById('listaProdutos');
        const li = document.createElement('li');
        li.textContent = `R$ ${produtoValor.toFixed(2)}`;

        const removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';
        removerBtn.addEventListener('click', function() {
            listaProdutos.removeChild(li);
            calcularTotal(); // Atualiza o total após remover
        });

        const precoComPorcentagem = document.createElement('span');
        precoComPorcentagem.classList.add('preco-com-porcentagem');
        precoComPorcentagem.textContent = `R$ ${produtoValor.toFixed(2)}`;

        li.appendChild(precoComPorcentagem);
        li.appendChild(removerBtn);
        listaProdutos.appendChild(li);
        produtoInput.value = ''; // Limpa o campo de entrada

        calcularTotal(); // Atualiza o total sempre que um novo produto é adicionado
    } else {
        alert('Por favor, insira um valor válido para o produto (maior que 0).');
    }
});

document.getElementById('calcular').addEventListener('click', calcularTotal);

function calcularTotal() {
    const listaProdutos = document.querySelectorAll('#listaProdutos li');
    const porcentagem = parseFloat(document.getElementById('porcentagem').value) / 100;
    let total = 0;

    listaProdutos.forEach(li => {
        const valor = parseFloat(li.textContent.replace('R$ ', '').replace('Remover', '').trim());
        total += valor;

        // Atualiza o preço com porcentagem
        const precoComPorcentagem = valor + (valor * porcentagem);
        li.querySelector('.preco-com-porcentagem').textContent = `R$ ${precoComPorcentagem.toFixed(2)}`;
    });

    total += total * porcentagem; // Adiciona a porcentagem ao total
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('quantidade').textContent = listaProdutos.length; // Atualiza a quantidade de produtos
    document.getElementById('porcentagemDisplay').textContent = (porcentagem * 100).toFixed(2) + '%'; // Exibe a porcentagem
}
