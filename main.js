setTimeout(function () {
    const nav = document.querySelectorAll('.nav-item')
    const dropdown = document.querySelectorAll('.dropdown')
    const hoverDropdown = document.querySelectorAll('.nav-item')
    const x = document.querySelectorAll('.x')
    const arrow = document.querySelectorAll('.arrow-container')

    for (let i = 0; i < nav.length; i++) {
        nav[i].onclick = function () {
            if (i === 0) {
                dropdown[i].classList.toggle('dropdown-open')
                dropdown[1].classList.remove('dropdown-open')
                dropdown[2].classList.remove('dropdown-open')
                hoverDropdown[i].classList.toggle('hover-dropdown')
                hoverDropdown[1].classList.remove('hover-dropdown')
                hoverDropdown[2].classList.remove('hover-dropdown')
                arrow[1].classList.remove('arrow-rotate')
                arrow[2].classList.remove('arrow-rotate')
                arrow[i].classList.toggle('arrow-rotate')
            }
            if (i === 1) {
                dropdown[i].classList.toggle('dropdown-open')
                dropdown[0].classList.remove('dropdown-open')
                dropdown[2].classList.remove('dropdown-open')
                hoverDropdown[i].classList.toggle('hover-dropdown')
                hoverDropdown[0].classList.remove('hover-dropdown')
                hoverDropdown[2].classList.remove('hover-dropdown')
                arrow[0].classList.remove('arrow-rotate')
                arrow[2].classList.remove('arrow-rotate')
                arrow[i].classList.toggle('arrow-rotate')
            }
            if (i === 2) {
                dropdown[i].classList.toggle('dropdown-open')
                dropdown[0].classList.remove('dropdown-open')
                dropdown[1].classList.remove('dropdown-open')
                hoverDropdown[i].classList.toggle('hover-dropdown')
                hoverDropdown[0].classList.remove('hover-dropdown')
                hoverDropdown[1].classList.remove('hover-dropdown')
                arrow[0].classList.remove('arrow-rotate')
                arrow[1].classList.remove('arrow-rotate')
                arrow[i].classList.toggle('arrow-rotate')
            }
        }

        window.onresize = function () {
            hoverDropdown[0].classList.remove('hover-dropdown')
            hoverDropdown[1].classList.remove('hover-dropdown')
            hoverDropdown[2].classList.remove('hover-dropdown')
            dropdown[0].classList.remove('dropdown-open')
            dropdown[1].classList.remove('dropdown-open')
            dropdown[2].classList.remove('dropdown-open')
            arrow[0].classList.remove('arrow-rotate')
            arrow[1].classList.remove('arrow-rotate')
            arrow[2].classList.remove('arrow-rotate')
        }

        for (let xis = 0; xis < x.length; xis++) {
            x[i].onclick = function () {
                hoverDropdown[0].classList.remove('hover-dropdown')
                hoverDropdown[1].classList.remove('hover-dropdown')
                hoverDropdown[2].classList.remove('hover-dropdown')
                dropdown[0].classList.remove('dropdown-open')
                dropdown[1].classList.remove('dropdown-open')
                dropdown[2].classList.remove('dropdown-open')
                arrow[0].classList.remove('arrow-rotate')
                arrow[1].classList.remove('arrow-rotate')
                arrow[2].classList.remove('arrow-rotate')
            }
        }

    }

}, 100)