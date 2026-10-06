// Alternar entre a Visão do Professor e do Aluno
const btnDashboard = document.getElementById('btn-dashboard');
const btnAluno = document.getElementById('btn-aluno');
const viewDashboard = document.getElementById('view-dashboard');
const viewAluno = document.getElementById('view-aluno');

btnDashboard.addEventListener('click', () => {
    btnDashboard.classList.add('active');
    btnAluno.classList.remove('active');
    viewDashboard.classList.add('active');
    viewDashboard.classList.remove('hidden');
    viewAluno.classList.remove('active');
    viewAluno.classList.add('hidden');
});

btnAluno.addEventListener('click', () => {
    btnAluno.classList.add('active');
    btnDashboard.classList.remove('active');
    viewAluno.classList.add('active');
    viewAluno.classList.remove('hidden');
    viewDashboard.classList.remove('active');
    viewDashboard.classList.add('hidden');
});

// Simular a criação de um treino sem usar papel (Dor do cliente resolvida)
const formTreino = document.getElementById('form-treino');
const msgSucesso = document.getElementById('msg-sucesso');
const listaTreinoAluno = document.getElementById('lista-treino-aluno');

formTreino.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Capturar dados do formulário
    const exercicio = document.getElementById('exercicio').value;
    const series = document.getElementById('series').value;
    
    // Simular envio para a App do Aluno
    const novoExercicioHTML = `
        <li class="workout-item">
            <div class="workout-info">
                <strong>${exercicio}</strong>
                <span>${series}</span>
            </div>
            <div class="workout-actions">
                <input type="number" placeholder="Carga (kg)" class="carga-input">
                <button class="btn-video" onclick="alert('Simulação: Abrindo vídeo de execução...')">📹 Vídeo</button>
                <input type="checkbox" class="check-done">
            </div>
        </li>
    `;
    
    listaTreinoAluno.insertAdjacentHTML('beforeend', novoExercicioHTML);
    
    // Mostrar feedback visual para o professor
    formTreino.reset();
    msgSucesso.classList.remove('hidden');
    
    setTimeout(() => {
        msgSucesso.classList.add('hidden');
    }, 3000);
});

// Evento para vídeos mockados no HTML estático
const botoesVideo = document.querySelectorAll('.btn-video');
botoesVideo.forEach(botao => {
    botao.addEventListener('click', () => {
        alert("Simulação: Exibindo vídeo demonstrativo para evitar lesões em treinos sem personal.");
    });
});