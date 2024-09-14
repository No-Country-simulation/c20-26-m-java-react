const dataTags = ["Seguridad", "Paseo", "Cuidado", "Responsabilidad", "Puntualidad", "Amor", "Respeto", "Compromiso"];
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum metus eu lectus aliquam posuere vitae non tortor. Etiam in urna mollis, tincidunt libero sed, posuere massa. Curabitur volutpat lacus in nunc suscipit finibus. Nulla porttitor velit et rhoncus pulvinar.";
export const DATASERVICES = [
    {
        photo: "https://via.placeholder.com/150",
        name: "Rosario Fernandez",
        mail: "rosarioFernandez@homail.com",
        dni: "12345678",
        phone: "1122334455",
        typeService: "Paseador",
        price: Math.floor(Math.random() * 9000) + 1000,
        city: "Buenos Aires",
        textInfo: text, 
        tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Juan Perez",
        mail: "juanPerez@hotmail.com",
        dni: "87654321",
        phone: "1122334455",
        typeService: "Guarderia",
        price: Math.floor(Math.random() * 9000) + 1000,
        city: "Cordoba",
        textInfo: text, 
        tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Maria Rodriguez",
        mail: "mariaRodriguez@hotmail.com",
        dni: "12345678",
        phone: "1122334455",
        typeService: "Paseador",
        price: Math.floor(Math.random() * 9000) + 1000,
        city: "Mar del Plata",
        textInfo: text,
        tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Jose Lopez",
        mail: "joseLopez@hotmail.com",
        dni: "12345678",
        phone: "1122334455",
        typeService: "Guarderia",
        price: Math.floor(Math.random() * 9000) + 1000,
        city: "Rosario",
        textInfo: text,
        tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Ana Martinez",
        typeService: "Veterinaria",
        price: Math.floor(Math.random() * 9000) + 1000,
        city: "La Plata",
        textInfo: text,
        tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Pedro Gonzalez",
        typeService: "Guarderia",
        price: Math.floor(Math.random() * 9000) + 1000,
        city: "Tucuman",
        textInfo: text,
        tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Carolina Gutierrez",
        typeService: "Veterinaria",
        price: Math.floor(Math.random() * 9000) + 1000,
        city: "Salta",
        textInfo: text,
        tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Carlos Fernandez",
        typeService: "Guarderia",
        price: Math.floor(Math.random() * 9000) + 1000,
        city: "Buenos Aires",
        textInfo: text,
        tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
    }
]