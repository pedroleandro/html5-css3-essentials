$(function () {
   $('.menu_mobile_botao').on('click', function () {
        $('.menu_mobile_opcoes').toggleClass('ocultar-menu');
        $(this).toggleClass('menu_mobile_botao_ativo');
   });
});