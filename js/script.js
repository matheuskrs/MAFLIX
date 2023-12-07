let usuarios = [];

//JSON - Javascript String Object Notation
let dados = JSON.parse(localStorage.getItem('maflix-users'));
localStorage.removeItem('maflix-users')
if (dados == null){
     usuarios = [
        { nome: "Gallo", foto: "img/avatar1.png" },
        { nome: "Capitão", foto: "img/avatar4.png" },
        { nome: "TriZóio", foto: "img/avatar5.jpg" }
    ];
    localStorage.setItem('maflix-users', JSON.stringify(usuarios));
}else{
    usuarios = dados;
}


let ul = document.querySelector('ul');

for (let i = 0; i < usuarios.length; i++) {
    ul.innerHTML += `<li>
                        <a href="editProfile.html">
                            <div class="profile">
                                <img src="${usuarios[i].foto}" alt="${usuarios[i].nome}">
                                <span>${usuarios[i].nome}</span>
                            </div>
                        </a>
                    </li>`;
}

ul.innerHTML += `<li>
                    <a href="addProfile.html">
                        <div class="profile">
                            <i class='bx bxs-plus-circle'></i>
                            <span>Adicionar perfil</span>
                        </div>
                    </a>
                </li>`;