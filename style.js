const form = document.getElementById('form');

function verNumeroMaior(A, B) {
    return B > A;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const camp_A = document.getElementById('camp_A');
    const camp_B = document.getElementById('camp_B');
    
    const valorA = parseFloat(camp_A.value);
    const valorB = parseFloat(camp_B.value);

    const mensagemDeSucesso = `Está tudo correto! Definitivamente ${valorB} é maior que ${valorA}.`;
    const mensagemDeErro = `Leia o título! ${valorB} não é maior que ${valorA}. Coloque um valor maior no Campo B.`;

    if (verNumeroMaior(valorA, valorB)) {
        const sucessoConteiner = document.querySelector('.text_suces');
        sucessoConteiner.innerHTML = mensagemDeSucesso;
        sucessoConteiner.style.display = 'block';
        camp_A.style.border = '';
        camp_B.style.border = '';
        camp_A.value = '';
        camp_B.value = '';

        setTimeout(() => { sucessoConteiner.style.display = 'none'; }, 3000);
    } else {
        const erroConteiner = document.querySelector('.text_error');
        erroConteiner.innerHTML = mensagemDeErro;
        erroConteiner.style.display = 'block';
        camp_A.style.border = '1px solid red';
        camp_B.style.border = '1px solid red';

        setTimeout(() => { erroConteiner.style.display = 'none'; }, 5000);
        camp_A.value = '';
        camp_B.value = '';
    }
});