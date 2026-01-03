const servicesSection = document.getElementById("services");
const detailSection = document.getElementById("service-detail");
const title = document.getElementById("serviceTitle");
const text = document.getElementById("serviceText");
const backBtn = document.getElementById("backBtn");

function showService(service) {
    servicesSection.style.display = "none";
    detailSection.style.display = "block";

    if (service === "housekeeping") {
        title.textContent = "Housekeeping";
        text.textContent =
            "Productos y soluciones de limpieza para el hogar, diseñados para mantener espacios limpios, seguros e higiénicos.";
    }

    if (service === "industrial") {
        title.textContent = "Industrial";
        text.textContent =
            "Productos y servicios químicos diseñados para optimizar procesos industriales y maquinaria.";
    }

    if (service === "boilers") {
        title.textContent = "Tratamiento de aguas de Calderas";
        text.textContent =
            "Programas químicos para prevenir incrustaciones, corrosión y mejorar la eficiencia operativa.";
    }

    if (service === "cooling") {
        title.textContent = "Torres de Enfriamiento y Circuitos Cerrados";
        text.textContent =
            "Control integral del agua para proteger equipos y prolongar su vida útil.";
    }
}

/* Cards */
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", () => {
        showService(card.dataset.service);
    });
});

/* Dropdown */
document.querySelectorAll(".service-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        showService(link.dataset.service);
    });
});

/* Volver */
backBtn.addEventListener("click", () => {
    detailSection.style.display = "none";
    servicesSection.style.display = "block";
});