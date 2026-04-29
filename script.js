function updateCountdown() {
    // Define a data alvo (1 de Fevereiro de 2027)
    const targetDate = new Date('February 1, 2027 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Se a data já passou
    if (difference < 0) {
        document.getElementById('countdown').innerHTML = "<h2>O prazo chegou!</h2>";
        return;
    }

    // Cálculos matemáticos para dias, horas, minutos e segundos
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    // Atualiza o DOM e adiciona um zero à esquerda se for menor que 10
    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
    document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
}

// Executa a função a cada 1 segundo
setInterval(updateCountdown, 1000);

// Chamada inicial para evitar o "pulo" de 1 segundo no carregamento
updateCountdown();
