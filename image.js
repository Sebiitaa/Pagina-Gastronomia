document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageName = urlParams.get('img');

    // Aquí puedes definir títulos y descripciones para cada imagen
    const imageDetails = {
        image1: {
            src: 'https://github.com/Sebiitaa/Pagina-Gastronomia/tree/main/image/image1.jpg',
            title: 'Título de Imagen 1',
            description: 'Descripción de la Imagen 1'
        },
        image2: {
            src: 'https://github.com/Sebiitaa/Pagina-Gastronomia/tree/main/image/image2.jpg',
            title: 'Título de Imagen 2',
            description: 'Descripción de la Imagen 2'
        }
        // Agrega más detalles según sea necesario
    };

    const details = imageDetails[imageName];

    if (details) {
        document.getElementById('image').src = details.src;
        document.getElementById('title').innerText = details.title;
        document.getElementById('description').innerText = details.description;
    } else {
        document.getElementById('image').src = '';
        document.getElementById('title').innerText = 'Imagen no encontrada';
        document.getElementById('description').innerText = '';
    }
});
