const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

btnVoltar.addEventListener('click', voltarCartao);
btnAvancar.addEventListener('click', avancarCartao);

function avancarCartao () {
	const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
	if (ehUltimoCartao) return;

	esconderCartao();

	cartaoAtual++;
	mostrarCartao();
}

function voltarCartao () {
	const ehPrimeiroCartao = cartaoAtual === 0;
	if (ehPrimeiroCartao) return;

	esconderCartao();

	cartaoAtual--;
	mostrarCartao();
}

function mostrarCartao(){
	cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartao(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado')
}

console.log(esconderCartao)
console.log(mostrarCartao)
console.log(voltarCartao)
console.log(avancarCartao)