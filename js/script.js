let usuarios = [
    { nome: "Gallo", foto: "img/avatar1.png" },
    { nome: "Capitão", foto: "img/avatar4.png" },
    { nome: "TriZóio", foto: "img/avatar5.jpg" }
];
//console.log(usuarios);

let ul = document.querySelector('ul');

ul.innerHTML = '';

for (let i = 0; i < usuarios.length; i++) {
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
                    <a href="adicionar.html">
                        <div class="profile">
                            <i class='bx bxs-plus-circle'></i>
                            <span>Adicionar perfil</span>
                        </div>
                    </a>
                </li>`;