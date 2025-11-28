function mudarPagina(paginaId) {
    const secoes = document.querySelectorAll('.page-section');
    
    secoes.forEach(secao => {
        secao.classList.remove('active');
        secao.style.display = 'none';
    });

    const secaoAtiva = document.getElementById(paginaId);
    if (secaoAtiva) {
        secaoAtiva.style.display = 'block';
        setTimeout(() => {
            secaoAtiva.classList.add('active');
        }, 10);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function verificarQuiz() {
    let pontuacao = 0;
    const totalPerguntas = 3;
    
    const respostasCorretas = {
        q1: '5',      
        q2: 'tras',    
        q3: 'scrum'  
    };

    const form = document.getElementById('rugbyQuizForm');
    const formData = new FormData(form);
    
    if(formData.get('q1') === respostasCorretas.q1) pontuacao++;
    if(formData.get('q2') === respostasCorretas.q2) pontuacao++;
    if(formData.get('q3') === respostasCorretas.q3) pontuacao++;

    const divResultado = document.getElementById('resultadoQuiz');
    divResultado.style.display = 'block';
    
    if (pontuacao === totalPerguntas) {
        divResultado.className = "mt-4 text-center fw-bold alert alert-success";
        divResultado.innerHTML = `🏆 Parabéns! Você acertou ${pontuacao} de ${totalPerguntas}! Você é um especialista em Rugby!`;
    } else if (pontuacao > 0) {
        divResultado.className = "mt-4 text-center fw-bold alert alert-warning";
        divResultado.innerHTML = `👍 Bom trabalho! Você acertou ${pontuacao} de ${totalPerguntas}. Revise as regras e tente novamente.`;
    } else {
        divResultado.className = "mt-4 text-center fw-bold alert alert-danger";
        divResultado.innerHTML = `🏉 Ops! Você acertou ${pontuacao} de ${totalPerguntas}. Leia as regras novamente!`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mudarPagina('home');
});