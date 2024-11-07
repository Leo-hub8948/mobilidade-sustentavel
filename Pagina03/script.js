function trocardeCor(){
        

    if (document.body.style.backgroundColor === "#010300") {
       
        document.body.style.backgroundColor = "#bbdec6";
        document.body.style.color = "#010300";


    }

    
    else {
       
        document.body.style.backgroundColor = "#010300";
        document.body.style.color = "#bbdec6";

    } };


    $(document).ready(function(){
        //Seleciona o container .carousel e aplica a funçao slick() 
        //que ativa o carrossel com as configuraçao abaixo
    $('.carousel').slick({
    
        // skidesToShow: numero de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 2, //Exibe 3card ao mesmo tempo
    
        // skidesToScroll: define quantos cards serao deslizados ao mover o carrosel 
        slidesToScroll: 3, // Move 1 card por vez ao deslizar 
        
    
        // infinite: quando true, o carrossel retorna ao inicio automaticamente
        infinite: true, // Mantem carrosel em rotaçao continua
        
        // dots: quando true, ativa os pontos de navegação abaixo do carrosel
        dots: true,
        
        //arrows: exibe setas de navegação nas laterais do carrosel
        arrow: true
    });
    
    
    });

