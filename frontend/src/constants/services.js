const dataTags = ["Seguridad", "Paseo", "Cuidado", "Responsabilidad", "Puntualidad", "Amor", "Respeto", "Compromiso"];
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum metus eu lectus aliquam posuere vitae non tortor. Etiam in urna mollis, tincidunt libero sed, posuere massa. Curabitur volutpat lacus in nunc suscipit finibus. Nulla porttitor velit et rhoncus pulvinar.";
export const DATASERVICES = [
    {
        photo: "https://via.placeholder.com/150",
        name: "Rosario Fernandez",
        mail: "rosarioFernandez@homail.com",
        dni: "12345678",
        phone: "1122334455",
        city: "Buenos Aires",
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
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Juan Perez",
        mail: "juanPerez@hotmail.com",
        dni: "87654321",
        phone: "1122334455",
        city: "Cordoba",
        typeService: [
            {
                type: "Guarderia",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4),
            }
        ],
        
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Maria Rodriguez",
        mail: "mariaRodriguez@hotmail.com",
        dni: "12345678",
        phone: "1122334455",
        city: "Mar del Plata",
        typeService: [
            {
                type:"Paseador",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ],
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Jose Lopez",
        mail: "joseLopez@hotmail.com",
        dni: "12345678",
        phone: "1122334455",
        city: "Rosario",
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
        ]
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Ana Martinez",
        mail: "anaMartinez@hotmail.com",
        dni: "12345678",
        phone: "1122334455",
        city: "La Plata",
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
        ]
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Pedro Gonzalez",
        city: "Tucuman",
        typeService: [
            {
                type: "Paseador",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ],
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Carolina Gutierrez",
        city: "Salta",
        typeService: [
            {
                type: "Veterinaria",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ]
    },
    {
        photo: "https://via.placeholder.com/150",
        name: "Carlos Fernandez",
        city: "Buenos Aires",
        typeService: [
            {
                type: "Guarderia",
                textInfo: text,
                price: Math.floor(Math.random() * 9000) + 1000,
                tags: dataTags.sort(() => Math.random() - 0.5).slice(0, 4)
            }
        ]
    }
]