/*Codigos de Animação*/

//waypoint é a biblioteca aonde vai buscar a funcao a ser usada

$('section#domingo-perfeito').waypoint(function(direcao) {

if (direcao == "down") {

    $('div.folha1').removeClass('animate__animated animate__fadeInDown');
    $('div.camarao').removeClass('animate__animated animate__fadeInDown');
    $('div.folha2').removeClass('animate__animated animate__fadeInDown');
    $('div.folha3').removeClass('animate__animated animate__fadeInDown');
    $('div.tomate').removeClass('animate__animated animate__fadeInDown');
    $('div.queijo').removeClass('animate__animated animate__fadeInDown');

    $('div.folha1').addClass('animate__animated animate__fadeInUp');
    $('div.camarao').addClass('animate__animated animate__fadeInUp');
    $('div.folha2').addClass('animate__animated animate__fadeInUp');
    $('div.folha3').addClass('animate__animated animate__fadeInUp');
    $('div.tomate').addClass('animate__animated animate__fadeInUp');
    $('div.queijo').addClass('animate__animated animate__fadeInUp');
    


} else if (direcao == "up") {
    $('div.folha1').removeClass('animate__animated animate__fadeInUp');
    $('div.camarao').removeClass('animate__animated animate__fadeInUp');
    $('div.folha2').removeClass('animate__animated animate__fadeInUp');
    $('div.folha3').removeClass('animate__animated animate__fadeInUp');
    $('div.tomate').removeClass('animate__animated animate__fadeInUp');
    $('div.queijo').removeClass('animate__animated animate__fadeInUp');


    $('div.folha1').addClass('animate__animated animate__fadeInDown');
    $('div.camarao').addClass('animate__animated animate__fadeInDown');
    $('div.folha2').addClass('animate__animated animate__fadeInDown');
    $('div.folha3').addClass('animate__animated animate__fadeInDown');
    $('div.tomate').addClass('animate__animated animate__fadeInDown');
    $('div.queijo').addClass('animate__animated animate__fadeInDown');
}


}, 
{
    offset: '450px'
})

$('section#pizza').waypoint(function(direcao) {
    if (direcao == 'down') {
        $('section#pizza p').addClass('animate__animated anima__fadeInUp');
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow');
       
    }

    if (direcao == 'up') {
        $('section#pizza p').removeClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow');
    }
}, {
    offset: '450px'
})

//eq cria um indice no hatml numerando os elementos.
$('div#testemunhos ul:eq(o)').css('opacity', 0);
$('div#testemunhos ul:eq(1)').css('opacity', 0);
$('div#testemunhos ul:eq(2)').css('opacity', 0);

$('section#testemunha').waypoint(function(direcao){

    if(direcao == 'down'){
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
        
    }

    if (direcao == 'up') {

        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
}, {
    offset: '400px'
}
)

$('div#transicao-testemunha-plano').waypoint(function(direcao){
    if (direcao == 'down') {
        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow');
 
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate__slow');
 
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow');
 
 
 
        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate_slow');
 
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate_slow');
 
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate_slow');
 
    }
 
    else {
 
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate_slow');
 
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate_slow');
 
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate_slow');
    }
} , {
 
    offset: '600px;'
})
 
 
$('section#plano-principal').waypoint(function(direcao){
    if (direcao == 'down') {
 
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate_slower');
 
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate_slower');
 
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate_slower');
    }
    else {
 
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate_slower');
 
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate_slower');
 
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate_slower');
    }
}, {
    offset: '450px;'
})

$('footer').waypoint(function(direcao) {
    if (direcao == 'down'){
        $('div#mapa').addClass('animate__animated animate__fadeIn')
        $('div#info').addClass('animate__animated animate__fadeIn')
        $('div#pizza-rodape-decoracao').addClass('animate__animated animate__fadeIn')
    }    else {
        $('div#mapa').removeClass('animate__animated animate__fadeIn');
        $('div#info').removeClass('animate__animated animate__fadeIn');
        $('div#pizza-rodape-decoracao').removeClass('animate__animated animate__fadeIn');
    }

}, {
    offset:'650px;'

})



 

