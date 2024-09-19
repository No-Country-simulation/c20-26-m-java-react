const dataTags = ["Seguridad", "Paseo", "Cuidado", "Responsabilidad", "Puntualidad", "Amor", "Respeto", "Compromiso"];
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum metus eu lectus aliquam posuere vitae non tortor. Etiam in urna mollis, tincidunt libero sed, posuere massa. Curabitur volutpat lacus in nunc suscipit finibus. Nulla porttitor velit et rhoncus pulvinar.";
import IMGWOMEN from "../assets/images/perfil.jpg";
import IMGMAN from "../assets/images/hombre3.jpg";
import IMGDOG from "../assets/images/perro.jpg";
import IMGCAT from "../assets/images/gato.jpg";

export const DATASERVICES = [
    {
        photo: "https://via.placeholder.com/150",
        name: "Rosario Fernandez",
        mail: "rosarioFernandez@homail.com",
        dni: "12345678",
        phone: "1122334455",
        city: "Buenos Aires",
        typeUser:"service",
        typeService: [
            {
                type: "Guarderia",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            },
            {
                type: "Paseador",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ],
        pass: "a1",
    },
    {
        photo: IMGWOMEN,
        name: "Maria Rodriguez",
        mail: "mariaRodriguez@homail.com",
        dni: "12345678",
        phone: "1122334455",
        city: "Buenos Aires",
        typeUser:"normal",
        pets: [
            {
                imgPet: IMGDOG,
                name: "Luna",
                species: "Perro",
                breed: "Golden Retriever",
                age: 2,
                gender: "Hembra",
                vacs: "Si",
                behavior: "Bueno",
                details: "Recien operada",
            },
            {
                imgPet: IMGCAT,
                name: "Toby",
                species: "Gato",
                breed: "Comun",
                age: 5,
                gender: "Macho",
                vacs: "Si",
                behavior: "Bueno",
                details: "",
            },
        ],
        pass: "a1",
    },
    {
        photo: IMGMAN,
        name: "Juan Perez",
        mail: "juanPerez@hotmail.com",
        dni: "87654321",
        phone: "1122334455",
        city: "Cordoba",
        typeUser:"service",
        typeService: [
            {
                type: "Guarderia",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4),
            }
        ],
        pass: "a1",
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Mariana Rodriguez",
        mail: "marianaRodriguez@hotmail.com",
        dni: "12345678",
        phone: "1122334455",
        city: "Mar del Plata",
        typeUser:"service",
        typeService: [
            {
                type:"Paseador",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ],
        pass: "a1",
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Jose Lopez",
        mail: "joseLopez@hotmail.com",
        dni: "12345678",
        phone: "1122334455",
        city: "Rosario",
        typeUser:"service",
        typeService: [
            {
                type: "Veterinaria",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            },
            {
                type: "Guarderia",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ],
        pass: "a1",
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Ana Martinez",
        mail: "anaMartinez@hotmail.com",
        dni: "12345678",
        phone: "1122334455",
        city: "La Plata",
        typeUser:"service",
        typeService: [
            {
                type: "Guarderia",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            },
            {
                type: "Paseador",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            },
            {
                type: "Veterinaria",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ],
        pass: "a1",
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Pedro Gonzalez",
        city: "Tucuman",
        typeUser:"service",
        typeService: [
            {
                type: "Paseador",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ],
        pass: "a1",
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Carolina Gutierrez",
        city: "Salta",
        typeUser:"service",
        typeService: [
            {
                type: "Veterinaria",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ],
        pass: "a1",
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Carlos Fernandez",
        city: "Buenos Aires",
        typeUser:"service",
        typeService: [
            {
                type: "Guarderia",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ],
        pass: "a1",
    }
]