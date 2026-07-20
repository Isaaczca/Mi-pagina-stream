const MarcoIyR = document.querySelector(".MarcoIyR");
const linkRegistrarse = document.querySelector(".linkRegistrarse");
const linkIniciarSesion = document.querySelector(".linkIniciarSesion");
const btnPopup = document.querySelector(".BotonDeIniciarSesion");
const iconoDeCerrar = document.querySelector(".iconoDe-Cerrar");
const iconoCerrarPrestamo = document.querySelector(".IconoCerrarFormulario");

const botonIngresar = document.querySelector(".BotonPrincipal");
const inicio = document.querySelector(".Inicio");
const pantallaInicio = document.querySelector(".PantallaInicio");

const btnMaterial = document.querySelector(".Material");
const contenedorMateriales = document.querySelector(".ContenedorMateriales");
const contenedorDashboard = document.querySelector(".ContenedorDashboard");
const tarjetasBalones = document.querySelectorAll(".ContenedorMateriales .MarcoMaterial");

const btnCodigoQRNav = document.querySelector(".Navegacion a[href='#'], .Navegacion a:nth-child(4)"); // Busca el enlace "Código QR"
const contenedorQR = document.getElementById("contenedorQR");
const iconoCerrarQR = document.getElementById("iconoCerrarQR");

const btnPerfilNav = document.getElementById("btnPerfilNav");
const contenedorPerfil = document.getElementById("contenedorPerfil");
const iconoCerrarPerfil = document.getElementById("iconoCerrarPerfil");

const contenedorAuth = document.getElementById("contenedorAuth");
const formularioRegistroInterno = document.querySelector(".formularioRegistro form");
const formularioLoginInterno = document.querySelector(".formularioIniciarSesion form");

const inputFotoPerfil = document.getElementById("inputFotoPerfil");
const imgAvatarPerfil = document.getElementById("imgAvatarPerfil");

const btnEditarPerfil = document.getElementById("btnEditarPerfil");
const modalEditar = document.getElementById("modalEditar");
const btnGuardarPerfil = document.getElementById("btnGuardarPerfil");
const btnCancelarEditar = document.getElementById("btnCancelarEditar");

const nombreUsuarioPerfil = document.getElementById("nombreUsuarioPerfil");
const textoDescripcion = document.getElementById("textoDescripcion");
const editNombre = document.getElementById("editNombre");
const editDescripcion = document.getElementById("editDescripcion");

const btnVerHistorial = document.getElementById("btnVerHistorial");
const contenedorHistorial = document.getElementById("contenedorHistorial");
const iconoCerrarHistorial = document.getElementById("iconoCerrarHistorial");
const listaHistorial = document.getElementById("listaHistorial");

let intervalosMarcos = [];
function iniciarRotacionNoticias() {
    limpiarRotacionNoticias();
    const marcos = document.querySelectorAll(".MarcoNoticia");
    marcos.forEach((marco) => {
        const slides = marco.querySelectorAll(".SlideItem");
        if(slides.length <= 1) return; 
        let actual = 0;
        const idIntervalo = setInterval(() => {
            slides[actual].classList.remove("active-slide");
            actual = (actual + 1) % slides.length;
            slides[actual].classList.add("active-slide");
        }, 6000); 
        intervalosMarcos.push(idIntervalo);
    });
}

function limpiarRotacionNoticias() {
    intervalosMarcos.forEach(id => clearInterval(id));
    intervalosMarcos = [];
}

botonIngresar.addEventListener("click", () => {
    pantallaInicio.classList.add("oculto");
    contenedorDashboard.classList.add("active-dashboard"); 
    iniciarRotacionNoticias(); 
});

btnMaterial.addEventListener("click", (e) => {
    e.preventDefault();
    MarcoIyR.classList.remove("active-popup");
    contenedorMateriales.classList.toggle("active-materiales");
    
    if (contenedorMateriales.classList.contains("active-materiales")) {
        contenedorDashboard.classList.remove("active-dashboard");
        limpiarRotacionNoticias(); 
    } else {
        if(pantallaInicio.classList.contains("oculto")) {
            contenedorDashboard.classList.add("active-dashboard");
            iniciarRotacionNoticias(); 
        }
    }
});

inicio.addEventListener("click", function(e){
    e.preventDefault();
    MarcoIyR.classList.remove("active-popup");
    contenedorMateriales.classList.remove("active-materiales");
    
    if(pantallaInicio.classList.contains("oculto")) {
        contenedorDashboard.classList.add("active-dashboard");
        iniciarRotacionNoticias();
    } else {
        pantallaInicio.classList.remove("oculto");
        limpiarRotacionNoticias();
    }
});

btnPopup.addEventListener("click", () => {
    contenedorMateriales.classList.remove("active-materiales");
    contenedorDashboard.classList.remove("active-dashboard");
    limpiarRotacionNoticias();
    pantallaInicio.classList.add("oculto");
    MarcoIyR.classList.add("active-popup");
});

iconoDeCerrar.addEventListener("click", () => {
    MarcoIyR.classList.remove("active-popup");
    if(pantallaInicio.classList.contains("oculto")) {
        contenedorDashboard.classList.add("active-dashboard");
        iniciarRotacionNoticias();
    }
});

btnPopup.addEventListener("click", () => {
    MarcoIyR.classList.add("active-popup");
});

iconoDeCerrar.addEventListener("click", () => {
    MarcoIyR.classList.remove("active-popup");
    MarcoIyR.classList.remove("active");
});

linkRegistrarse.addEventListener("click", (e) => {
    e.preventDefault();
    MarcoIyR.classList.add("active");
});

linkIniciarSesion.addEventListener("click", (e) => {
    e.preventDefault();
    MarcoIyR.classList.remove("active");
});

tarjetasBalones.forEach((tarjeta) => {
    const BotonPedirForm = tarjeta.querySelector(".BotonPedirForm"); 
    if (BotonPedirForm) {
        BotonPedirForm.addEventListener("click", (e) => {
            e.preventDefault(); 
            const tituloBalon = tarjeta.querySelector(".NombreBalon").innerText;
            const rutaImagen = tarjeta.querySelector(".ImagenBalon img").src;
            tituloBalonForm.innerText = tituloBalon;
            imgBalonForm.src = rutaImagen;
            contenedorMateriales.classList.remove("active-materiales");
            formularioPrestamo.classList.add("active-formulario");
        });
    }
});
if (iconoCerrarPrestamo) {
    iconoCerrarPrestamo.addEventListener("click", (e) => {
        e.preventDefault();
        
        formularioPrestamo.classList.remove("active-formulario");
        contenedorDashboard.classList.add("active-dashboard");
  
        const formularioElemento = formularioPrestamo.querySelector(".FormPrestamo");
        if (formularioElemento) {
            formularioElemento.reset();
        }
    });
}

const enlacesNav = document.querySelectorAll(".Navegacion a");
let linkQR;
enlacesNav.forEach(enlace => {
    if(enlace.textContent.trim() === "Código QR") {
        linkQR = enlace;
    }
});

if (linkQR) {
    linkQR.addEventListener("click", (e) => {
        e.preventDefault();
        MarcoIyR.classList.remove("active-popup");
        if(typeof contenedorMateriales !== 'undefined') contenedorMateriales.classList.remove("active-materiales");
        if(typeof contenedorDashboard !== 'undefined') contenedorDashboard.classList.remove("active-dashboard");
        limpiarRotacionNoticias();
        pantallaInicio.classList.add("oculto");
        contenedorQR.classList.add("active-qr");
    });
}

if (iconoCerrarQR) {
    iconoCerrarQR.addEventListener("click", (e) => {
        e.preventDefault();
        contenedorQR.classList.remove("active-qr");
        if(pantallaInicio.classList.contains("oculto")) {
            contenedorDashboard.classList.add("active-dashboard");
            iniciarRotacionNoticias();
        }
    });
}

function iniciarSesionUsuario(nombreUsuario) {
    nombreUsuarioPerfil.innerText = nombreUsuario;
    contenedorAuth.innerHTML = `<span style="color:#fff; font-weight:600; margin-left:40px; cursor:pointer;" id="usuarioNavbar">${nombreUsuario}</span>`;
    MarcoIyR.classList.remove("active-popup");
    MarcoIyR.classList.remove("active");
}
if (formularioRegistroInterno) {
    formularioRegistroInterno.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombreIngresado = formularioRegistroInterno.querySelector("input[type='text']").value;
        iniciarSesionUsuario(nombreIngresado || "Usuario");
    });
}
if (formularioLoginInterno) {
    formularioLoginInterno.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailIngresado = formularioLoginInterno.querySelector("input[type='email']").value;
        const nombreDesdeEmail = emailIngresado.split('@')[0]; 
        iniciarSesionUsuario(nombreDesdeEmail || "Usuario");
    });
}
if (btnPerfilNav) {
    btnPerfilNav.addEventListener("click", (e) => {
        e.preventDefault();
        MarcoIyR.classList.remove("active-popup");
        if(typeof contenedorMateriales !== 'undefined') contenedorMateriales.classList.remove("active-materiales");
        if(typeof contenedorDashboard !== 'undefined') contenedorDashboard.classList.remove("active-dashboard");
        if(typeof contenedorQR !== 'undefined') contenedorQR.classList.remove("active-qr");
        contenedorPerfil.classList.add("active-perfil");
    });
}
if (iconoCerrarPerfil) {
    iconoCerrarPerfil.addEventListener("click", () => {
        contenedorPerfil.classList.remove("active-perfil");
        if(pantallaInicio.classList.contains("oculto")) {
            contenedorDashboard.classList.add("active-dashboard");
        }
    });
}
if (inputFotoPerfil) {
    inputFotoPerfil.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imgAvatarPerfil.src = event.target.result; 
            }
            reader.readAsDataURL(file);
        }
    });
}
if (btnEditarPerfil) {
    btnEditarPerfil.addEventListener("click", () => {
        editNombre.value = nombreUsuarioPerfil.innerText;
        editDescripcion.value = textoDescripcion.innerHTML.replace(/<br\s*\/?>/mg, "\n");
        modalEditar.classList.add("active-modal");
    });
}
if (btnCancelarEditar) {
    btnCancelarEditar.addEventListener("click", () => {
        modalEditar.classList.remove("active-modal");
    });
}
if (btnGuardarPerfil) {
    btnGuardarPerfil.addEventListener("click", () => {
        nombreUsuarioPerfil.innerText = editNombre.value;
        textoDescripcion.innerHTML = editDescripcion.value.replace(/\n/g, "<br>");
        const usuarioNavbar = document.getElementById("usuarioNavbar");
        if (usuarioNavbar) {
            usuarioNavbar.innerText = editNombre.value;
        }
        modalEditar.classList.remove("active-modal");
    });
}

let registrosPrestamos = [];
if (btnVerHistorial) {
    btnVerHistorial.addEventListener("click", () => {
        contenedorPerfil.classList.remove("active-perfil"); 
        contenedorHistorial.classList.add("active-historial"); 
    });
}
if (iconoCerrarHistorial) {
    iconoCerrarHistorial.addEventListener("click", () => {
        contenedorHistorial.classList.remove("active-historial");
        contenedorPerfil.classList.add("active-perfil"); 
    });
}

const formularioPrestamoContenedor = document.querySelector(".formularioPrestamo") || document.getElementById("formularioPrestamo");
const formInternoPrestamo = formularioPrestamoContenedor ? formularioPrestamoContenedor.querySelector("form") : null;

if (formInternoPrestamo) {
    formInternoPrestamo.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputNombre = formInternoPrestamo.querySelector("input[type='text']:not([id*='Grupo'])") || document.getElementById("inputNombre");
        const inputGrupo = formInternoPrestamo.querySelector("input[id*='Grupo']") || formInternoPrestamo.querySelectorAll("input[type='text']")[1] || document.getElementById("inputGrupo");
        const inputHora = formInternoPrestamo.querySelector("input[type='time']") || document.getElementById("inputHora");
        const tituloBalonElemento = document.getElementById("tituloBalonForm");

        const nombre = inputNombre ? inputNombre.value : "Estudiante";
        const grupo = inputGrupo ? inputGrupo.value : "S/G";
        const hora = inputHora ? inputHora.value : "--:--";
        const balon = tituloBalonElemento ? tituloBalonElemento.innerText : "Material Deportivo";

        registrosPrestamos.push({ balon, nombre, grupo, hora });
        actualizarTablaHistorial();
        if (typeof qrNombre !== 'undefined' && qrNombre) qrNombre.innerText = nombre;
        if (typeof qrGrupo !== 'undefined' && qrGrupo) qrGrupo.innerText = grupo;
        if (typeof qrHora !== 'undefined' && qrHora) qrHora.innerText = hora;
        const textoQR = `Prestamo Realizado%0AAsunto: ${balon}%0ANombre: ${nombre}%0AGrupo: ${grupo}%0AHora: ${hora}`;
        const urlAPI = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${textoQR}`;
        
        if (typeof imagenQR !== 'undefined' && imagenQR) {
            imagenQR.src = urlAPI;
        }
        if (formularioPrestamoContenedor) {
            formularioPrestamoContenedor.classList.remove("active-formulario");
        }
        if (typeof contenedorQR !== 'undefined' && contenedorQR) {
            contenedorQR.classList.add("active-qr");
        }
        formInternoPrestamo.reset();
    });
}

function actualizarTablaHistorial() {
    if (!listaHistorial) return;
    if (registrosPrestamos.length === 0) {
        listaHistorial.innerHTML = `
            <tr class="fila-vacia">
                <td colspan="4" style="text-align: center; color: #aaa; padding: 20px;">No hay préstamos registrados aún.</td>
            </tr>`;
        return;
    }

    listaHistorial.innerHTML = registrosPrestamos.map(reg => `
        <tr>
            <td><strong>${reg.balon}</strong></td>
            <td>${reg.nombre}</td>
            <td>${reg.grupo}</td>
            <td>${reg.hora}</td>
        </tr>
    `).join('');
}

const formLogin = document.querySelector(".formularioIniciarSesion form");
const formRegistro = document.querySelector(".formularioRegistro form");
const contenedorAutenticacion = document.getElementById("contenedorAuth");
const nombrePerfilH2 = document.getElementById("nombreUsuarioPerfil");

function procesarIngresoUsuario(nombreDeUsuario) {
    if (!nombreDeUsuario || nombreDeUsuario.trim() === "") {
        nombreDeUsuario = "Usuario";
    }

    if (nombrePerfilH2) {
        nombrePerfilH2.innerText = nombreDeUsuario;
    }

    if (contenedorAutenticacion) {
        contenedorAutenticacion.innerHTML = `
            <span id="usuarioNavbar" style="color: #fff; font-weight: 500; margin-left: 40px; cursor: pointer; font-size: 1.1em;">
                ${nombreDeUsuario}
            </span>`;
            
        document.getElementById("usuarioNavbar").addEventListener("click", () => {
            if (typeof contenedorPerfil !== 'undefined') {
                if(typeof MarcoIyR !== 'undefined') MarcoIyR.classList.remove("active-popup");
                if(typeof contenedorMateriales !== 'undefined') contenedorMateriales.classList.remove("active-materiales");
                if(typeof contenedorDashboard !== 'undefined') contenedorDashboard.classList.remove("active-dashboard");
                
                contenedorPerfil.classList.add("active-perfil");
            }
        });
    }

    if (typeof MarcoIyR !== 'undefined' && MarcoIyR) {
        MarcoIyR.classList.remove("active-popup");
        MarcoIyR.classList.remove("active");
    }
    
    if (typeof pantallaInicio !== 'undefined' && pantallaInicio.classList.contains("oculto")) {
        if (typeof contenedorDashboard !== 'undefined') {
            contenedorDashboard.classList.add("active-dashboard");
            if (typeof iniciarRotacionNoticias === 'function') iniciarRotacionNoticias();
        }
    }
}

if (formRegistro) {
    formRegistro.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const inputNombre = document.getElementById("registroNombre") || formRegistro.querySelector("input[type='text']");
        
        if (inputNombre) {
            const nombreCapturado = inputNombre.value;
            procesarIngresoUsuario(nombreCapturado);
        }
    });
}

if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputEmail = document.getElementById("loginEmail") || formLogin.querySelector("input[type='email']");
        if (inputEmail) {
            const correo = inputEmail.value;
            const nombreExtraido = correo.split("@")[0]; 
            procesarIngresoUsuario(nombreExtraido);
        }
    });
}