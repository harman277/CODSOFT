   const navSecondRowMobileFirstColumn = document.getElementById('nav-second-row-mobile-first-column');
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        function handleScreenResize(e) {
            if (mediaQuery.matches) {
                navSecondRowMobileFirstColumn.classList.remove('d-none');
            } else {
                navSecondRowMobileFirstColumn.classList.add('d-none');
            }
        }
        handleScreenResize();
        mediaQuery.addEventListener('change', handleScreenResize);


        const action = (change) => {
            const openNavLinks = document.getElementById('openNavLinks');
            const closeNavLinks = document.getElementById('closeNavLinks');
            const navSecondRowSecondColumn = document.querySelector('.nav-second-row-second-column');
            const navSecondRowThirdColumn = document.querySelector('.nav-second-row-third-column')
            if (change === 'openNavLinks') {
                openNavLinks.classList.add('d-none')
                closeNavLinks.classList.remove('d-none')
                navSecondRowSecondColumn.style.display = 'block'
                navSecondRowThirdColumn.style.display = 'block'

            }
            else {

                openNavLinks.classList.remove('d-none')
                closeNavLinks.classList.add('d-none');
                 navSecondRowSecondColumn.style.display = 'none'
                navSecondRowThirdColumn.style.display = 'none'
            }
        }