//configuração menu hamburguer

function menuBurg(){//funçãom para quando clicar no menu hambuguer
    let men = document.getElementById('opcoes')
    if(men.style.display == 'block'){
        men.style.display = 'none'
    }
    else{
        men.style.display = 'block'
    }
}

function mudarResolu(){//função pra quando a tela mudar a resolução 
    let meni = document.getElementById('menub')
    let itens = document.getElementById('opcoes')
    
    if(window.innerWidth >= 768){
        meni.style.display = 'none'
        itens.style.display = 'block'
    }
    else{
        meni.style.display = 'block'
        itens.style.display = 'none'
    }
}