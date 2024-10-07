$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});
/*************************************************************************************/
                                    
document.addEventListener("DOMContentLoaded", function() {
    const elogioForm = document.getElementById('elogioForm');
    const listaElogios = document.getElementById('listaElogios');
    const adminPassword = "senha123"; // Substitua pela sua senha de administrador

    elogioForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const elogio = document.getElementById('elogio').value;

        const elogioItem = document.createElement('li');
        elogioItem.innerHTML = `
            <span>${nome}: ${elogio}</span>
            <button class="delete-btn">Excluir</button>
        `;

        listaElogios.appendChild(elogioItem);

        elogioForm.reset();
    });

    listaElogios.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const senha = prompt("Digite a senha de administrador para excluir o elogio:");
            if (senha === adminPassword) {
                const elogioItem = event.target.parentElement;
                listaElogios.removeChild(elogioItem);
            } else {
                alert("Senha incorreta!");
            }
        }
    });
});