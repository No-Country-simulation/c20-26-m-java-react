import{j as e,u as l}from"./index-CYFHtQBJ.js";import"./services-DcUzcjXP.js";const n=[{photo:"https://via.placeholder.com/150",name:"Maria Rodriguez",mail:"mariaRodriguez@homail.com",typeService:[{type:"Usuario"}],dni:"12345678",phone:"1122334455",city:"Buenos Aires",pets:[{name:"Luna",species:"Perro",breed:"Golden Retriever",age:2,gender:"Hembra",vacs:"Si",behavior:"Bueno",details:"Recien operada"},{name:"Toby",species:"Gato",breed:"Comun",age:5,gender:"Macho",vacs:"Si",behavior:"Bueno",details:""}]}],r=({children:s})=>e.jsx("div",{className:"profileDataWrapper",children:s}),t=({txt1:s,txt2:i})=>e.jsxs("div",{className:"profileLineWrapper",children:[e.jsx("p",{children:s}),e.jsx("p",{children:i})]}),x=({imgProfile:s,titleProfile:i})=>e.jsxs("div",{className:"ProfileImgWrapper",children:[e.jsx("div",{className:"profileImg",children:e.jsx("img",{src:s,alt:"profile"})}),e.jsx("h4",{children:i})]}),m=()=>{const s=n[0],i=l();return e.jsxs("div",{className:"profileWrapper",children:[e.jsxs(r,{children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-auto",style:{position:"absolute",top:"3rem",left:"40px"},children:e.jsx("i",{className:"bi bi-chevron-left",onClick:()=>i("/user"),style:{fontSize:"35px"}})}),e.jsx("div",{className:"col text-center",style:{marginLeft:"50px"},children:e.jsx("h2",{className:"mb-5",children:"Información personal"})})]}),e.jsx(t,{txt1:"Nombre",txt2:s.name}),e.jsx(t,{txt1:"DNI",txt2:s.dni}),"",e.jsx(t,{txt1:"Ciudad",txt2:s.city}),e.jsx(t,{txt1:"Mail",txt2:s.mail})]}),s.pets&&s.pets.map((a,o)=>e.jsxs(r,{children:[e.jsx(x,{imgProfile:s.photo,titleProfile:"Informacion de Mascota"}),e.jsx(t,{txt1:"Nombre",txt2:a.name}),e.jsx(t,{txt1:"Especie",txt2:a.species}),e.jsx(t,{txt1:"Raza",txt2:a.breed}),e.jsx(t,{txt1:"Edad",txt2:a.age}),e.jsx(t,{txt1:"Genero",txt2:a.gender}),e.jsx(t,{txt1:"Vacunas",txt2:a.vacs}),e.jsx(t,{txt1:"Comportamiento",txt2:a.behavior}),a.details&&e.jsx(t,{txt1:"Detalles",txt2:a.details})]},o))]})};export{m as default};
