async function fetchDevelopmentInfo() {
    const ageInput = document.getElementById('age');
    const age = ageInput.value;
    const is_newborn = document.getElementById('is_newborn').checked;

    let corrected_age = is_newborn ? age - 1 : age;
    corrected_age = corrected_age >= 0 ? corrected_age : 0;
    const ageKey = corrected_age + ' meses';

    const response = await fetch('data/infos.json');
    const data = await response.json();
    const developmentData = data[ageKey];

    const infoElement = document.getElementById('info');
    const videoElement = document.getElementById('developmentVideo');

    infoElement.className = ''; // Remove class for animation
    setTimeout(() => {
        if (developmentData) {
            const { prona, supina, lateral, descrição, ponto_de_atenção, video_link } = developmentData;
            const embedUrl = video_link.replace('watch?v=', 'embed/'); // Convertendo URL do vídeo para formato de embed
            infoElement.innerHTML = `
                <h3>Desenvolvimento aos ${corrected_age} meses:</h3>
                <p><strong>Descrição geral:</strong> ${descrição}</p>
                <p><strong>Prona:</strong> ${prona}</p>
                <p><strong>Supina:</strong> ${supina}</p>
                <p><strong>Lateral:</strong> ${lateral}</p>
                <div class="attention-point"><i class="fas fa-exclamation-circle"></i>${ponto_de_atenção}</div>
            `;
            infoElement.className = 'show'; // Add class for animation
            videoElement.src = embedUrl;
            videoElement.style.display = 'block';
        } else {
            infoElement.innerText = 'Informação não disponível para esta idade.';
            videoElement.style.display = 'none';
        }
        document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
    }, 100); // small delay to allow the visual transition
}
