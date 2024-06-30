$(() => {
    $('#hide-menu .btn').on('click', () => {
        const isMobile = $(window).width() < 768;
        const $sidebar = $('#sidebar'); 

        if (isMobile) {
            console.log('123')
            toggleSidebar();
        }
    });


    function toggleSidebar() {
        const $sidebar = $('#sidebar');
        const $pageContent = $('#content');
        if ($sidebar.hasClass('hide')) {
            $sidebar.animate({
                left: '0'
            }, 500, () => {
                $sidebar.removeClass('hide').addClass('show').removeClass('d-none');
                $pageContent.animate({
                    marginLeft: '17rem' // Zwiększa margines po lewej stronie contentu o szerokość sidebaru
                }, 500);
            });
        } else {
            $sidebar.animate({
                left: '-17rem'
            }, 500, () => {
                $sidebar.addClass('hide').removeClass('show').addClass('d-none');
                $pageContent.animate({
                    marginLeft: '0' // Przywraca oryginalny margines po zwinieciu sidebaru
                }, 500);
            });
        }
    }
});