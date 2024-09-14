
document.addEventListener('DOMContentLoaded', function() {
    const overLay = document.createElement('div');
    overLay.classList.add('over_lay');
    document.body.appendChild(overLay);
    const navBtnMb = document.querySelector('.nav_btn_mb');
    const btnSearch = document.querySelector('.icon_search');
    const headerSearch = document.querySelector('.header_search');

    if (navBtnMb) {
        navBtnMb.addEventListener('click', function() {
            document.body.classList.toggle('open');
        });
        overLay.addEventListener('click', function() {
            document.body.classList.remove('open');
        });
    }
    if (btnSearch && headerSearch) {
        btnSearch.addEventListener('click', function () {
            headerSearch.classList.toggle('open_search');
        });

        document.addEventListener('click', function (event) {
            if (!headerSearch.contains(event.target) && !btnSearch.contains(event.target)) {
                headerSearch.classList.remove('open_search');
            }
        });
    }
});