function mensagem(){
    alert("Ola");
}

let usuarios = [
    { nome: "Matheus", foto: "img/avatar3.png" },
    { nome: "Giovanna", foto: "img/avatar6.jpg" },
    { nome: "Gallo", foto: "img/avatar1.png" }
];
let ul = document.querySelector('ul');

console.log(ul);
ul.innerHTML = '';

for(let i = 0; i < usuarios.length; i++){
    ul.innerHTML += `<li>
                        <a href="#">
                            <div class="profile">
                                <img src="${usuarios[i].foto}" alt="${usuarios[i].nome}">
                                <span>${usuarios[i].nome}</span>
                            </div>
                        </a>
                    </li>`;
}
ul.innerHTML += `<li>
                    <a href="#">
                        <div class="profile">
                            <i class='bx bxs-plus-circle'></i>
                            <span>Adicionar Perfil</span>
                        </div>
                    </a>
                </li>`;