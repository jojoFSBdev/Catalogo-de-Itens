function NovoItem(){
    document.querySelector(".div_novo_item").style.display = "flex";
    document.querySelector(".enviar").style.display = "none";
}

function CatalogarItem(){
    //Pega o valor inserido no HTML
    var titleItem = document.querySelector("#title_item").value;
    var descItem = document.querySelector("#desc_item").value;
    var valorItem = document.querySelector("#valor_item").value;
    var divCatalogo = document.querySelector(".div_catalogo");
    
    var contDivCatalogo = document.querySelectorAll(".lbl_item");
    var tamanhoCatalogo = contDivCatalogo.length


    var novoLblItem = document.createElement('label');
    novoLblItem.setAttribute('class', 'lbl_item');
    novoLblItem.setAttribute('for', 'buttonExpandir');
    novoLblItem.setAttribute('id', 'lblItem'+(tamanhoCatalogo+1));

    var novoImgItem = document.createElement('img');
    novoImgItem.setAttribute('class', 'foto_item');
    novoImgItem.setAttribute('src', './RECURSOS/Tomada-Inteligente-Positivo-Smart-Plug-Wi-Fi.jpg')
    novoImgItem.setAttribute('alt', titleItem);

    var novoTitleItem = document.createElement('h4');
    var novoNodeTitle = document.createTextNode(titleItem)
    novoTitleItem.appendChild(novoNodeTitle)

    var novoValorItem = document.createElement('p');
    var novoNodeValor = document.createTextNode('R$ '+ valorItem);
    novoValorItem.appendChild(novoNodeValor);

    var novoInput = document.createElement('input');
    novoInput.setAttribute('id', 'buttonExpandir');
    novoInput.setAttribute('type', 'button');
    novoInput.setAttribute('value', (tamanhoCatalogo + 1));
    novoInput.setAttribute('style', 'display: none;');
    novoInput.setAttribute('onclick', 'ExpandirItem()');

    novoLblItem.appendChild(novoImgItem);
    novoLblItem.appendChild(novoTitleItem);
    novoLblItem.appendChild(novoValorItem);
    novoLblItem.appendChild(novoInput);

    divCatalogo.appendChild(novoLblItem);

    document.querySelector(".div_novo_item").style.display = "none";
    document.querySelector(".enviar").style.display = "flex";
}

function Cancelar(){
    document.querySelector(".div_novo_item").style.display = "none";
    document.querySelector(".enviar").style.display = "flex";
}

function ExpandirItem(){
    
}