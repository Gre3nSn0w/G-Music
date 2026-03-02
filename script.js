// 1. Estructuramos los datos usando un objeto de ECMAScript
const datosFormatos = {
    'FLAC (Lossless)': {
        titulo: 'FLAC (Free Lossless Audio Codec)',
        descripcion: 'Compresión sin pérdida. Calidad de CD o superior, ideal para sistemas de alta fidelidad con el menor compromiso de espacio.',
        fidelidad: '100%',
        compatibilidad: '90%',
        /* Reproductor FLAC */
        reproductorHtml: `
            <div class="zona-audio">
                <p class="texto-reproduciendo">🎶 Reproduciendo: <span>Makoto Matsushita - September Rain.flac</span></p>
                <audio controls autoplay>
                    <source src="audio/cancion.flac" type="audio/flac">
                    Tu navegador no soporta el audio.
                </audio>
            </div>
        `
    },
    'DSD (Direct Stream Digital)': {
        titulo: 'DSD (Direct Stream Digital)',
        descripcion: 'Codificación de audio de 1 bit. Sonido extremadamente analógico y puro, requiere hardware especializado.',
        fidelidad: '100%',
        compatibilidad: '30%',
        reproductorHtml: '' // Sin reproductor
    },
    'MQA (Master Quality)': {
        titulo: 'MQA (Master Quality Authenticated)',
        descripcion: 'Formato de "origami" de audio que empaqueta alta resolución en tamaños manejables.',
        fidelidad: '95%',
        compatibilidad: '60%',
        reproductorHtml: '' // Sin reproductor
    },
    'MP3 / AAC (Compresión)': {
        titulo: 'MP3 / AAC',
        descripcion: 'Compresión con pérdida. Práctico pero descarta detalles para sistemas Hi-Fi.',
        fidelidad: '42%',
        compatibilidad: '100%',
        /* Reproductor MP3 */
        reproductorHtml: `
            <div class="zona-audio">
                <p class="texto-reproduciendo">🎶 Reproduciendo: <span>Daft Punk - Get Lucky.mp3</span></p>
                <audio controls autoplay>
                    <source src="audio/cancion.mp3" type="audio/mpeg">
                    Tu navegador no soporta el audio.
                </audio>
            </div>
        `
    }
};

// 2. Seleccionamos los elementos del document 
const itemsMenu = document.querySelectorAll('.formato-item');
const contenedorDetalle = document.getElementById('detalle-formato');

// 3. Función para actualizar la interfaz
const actualizarDetalle = (claveFormato) => {
    const datos = datosFormatos[claveFormato];

    contenedorDetalle.innerHTML = `
        <h3>${datos.titulo}</h3>
        <p>${datos.descripcion}</p>
        
        <div class="barra-contenedor">
            <div class="etiquetas-barra">
                <span>Fidelidad</span>
                <span>${datos.fidelidad}</span>
            </div>
            <div class="barra-fondo">
                <div class="barra-progreso" style="width: ${datos.fidelidad};"></div>
            </div>
        </div>

        <div class="barra-contenedor">
            <div class="etiquetas-barra">
                <span>Compatibilidad</span>
                <span>${datos.compatibilidad}</span>
            </div>
            <div class="barra-fondo">
                <div class="barra-progreso" style="width: ${datos.compatibilidad};"></div>
            </div>
        </div>
        
        ${datos.reproductorHtml}
    `;
};

// 4. Asignamos los eventos de clic a cada elemento de la lista
itemsMenu.forEach(item => {
    item.addEventListener('click', () => {
        // Removemos la clase 'activo' de todos los elementos
        itemsMenu.forEach(i => i.classList.remove('activo'));
        
        // Añadimos la clase 'activo' solo al elemento clicado
        item.classList.add('activo');
        
        // Obtenemos el texto del elemento (ej. "FLAC (Lossless)") y se actualiza
        const clave = item.textContent.trim();
        actualizarDetalle(clave);
    });
});