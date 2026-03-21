document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navlinks = document.querySelector(".nav-links");

    
    if (burger && navlinks) {
        burger.addEventListener("click", () => {
            navlinks.classList.toggle("active");
        });
    }

    
    const form = document.getElementById("contacto-form");

    if (form) {
        form.addEventListener("submit", function(event){
            event.preventDefault(); 

            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.classList.add("loading");

            const formData = new FormData(this);

            fetch('/send_email', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                showFlashMessage('Mensaje enviado correctamente.', 'success');
                this.reset();
                submitButton.classList.remove('loading');
            })
            .catch(error => {
                showFlashMessage('Error al enviar mensaje.', 'danger');
                console.error(error);
                submitButton.classList.remove('loading');
            });
        });
    }
});


function showFlashMessage(mensaje, category){
    const container = document.getElementById('flash-messages');
    if (!container) return;

    const div = document.createElement('div');
    div.className = `alert ${category}`;
    div.textContent = mensaje;

    container.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);
}