


//tabs
let tab = document.querySelector('.services-tabs-title');
let tabsTitle = document.querySelectorAll('.tab-title');
let tabsContent = document.querySelectorAll('.service-content .content-block-service');

tab.addEventListener('click', onClick);

function onClick(event) {
    for (let i = 0; i < tabsTitle.length; i++) {
        if (event.target === tabsTitle[i]) {
            let title = event.target.dataset.tabTitle;
            showTab(title);
            event.target.classList.add('active-tab');
            break;
        }
    }
}

function hidden() {
    for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.add('hidden');
        tabsTitle[i].classList.remove('active-tab');
    }
}

function showTab(title) {
    hidden();
    tabsContent.forEach(el => {
        if (el.dataset.tabText === title) {
            el.classList.remove('hidden');
        }
    })
}

//image open

let btnWork = document.querySelector('.button-work');
let workImage = document.querySelectorAll('.work-images .work-image');
let workImg = [...workImage];
let spinW = document.querySelector('div #work-spin');

document.addEventListener('DOMContentLoaded', btnClickWork);
btnWork.addEventListener('click', btnClickWork);

function btnClickWork(event) {
    if (event.type === 'DOMContentLoaded') {
        let arrImg = workImg.splice(0, 12);
        arrImg.forEach(el => {
            el.classList.remove('hidden');
        })
    }
    if (event.type === 'click') {
        spinW.classList.remove('hidden');
        setTimeout(movePause, 2000);
        function movePause() {
            btnWork.classList.add("hidden");
            spinW.classList.add('hidden');
            let arrImg = workImg.splice(12, 12);
            arrImg.forEach(el => {
                el.classList.remove('hidden');
            });
        }
    }
}

// image sort

let menuWork = document.querySelector('.list-menu-work');
let itemMenu = document.querySelectorAll('.item-work');

menuWork.addEventListener('click', onClickMenu);

function onClickMenu(event) {
    btnWork.classList.add("hidden");
    for (let i = 0; i < itemMenu.length; i++) {
        if (event.target === itemMenu[i]) {
            let item = event.target.dataset.workMenu;
            showImg(item);
            event.target.classList.add('active-work');
            break;
        }
    }
}

function hideMenu() {
    for (let i = 0; i < itemMenu.length; i++) {
        itemMenu[i].classList.remove('active-work');
    }
    for (let i = 0; i < workImage.length; i++) {
        workImage[i].classList.add('hidden');
    }
}

function showImg(item) {
    hideMenu();

    let workArr = [...workImage];
    workArr.forEach(el => {
        if (el.dataset.workItem === item) {
            el.classList.remove('hidden');
        } else if (item === undefined){
            console.log(item);
    el.classList.remove('hidden');

        }
    })
}

$(document).ready(function () {
    $('a[data-tar^="link"]').click(function (event) {
        event.preventDefault();
        let element = $($(this).attr('href'));
        let top = ($(element).offset().top + 50);
        $('html, body').animate({scrollTop: top}, 1000);
        return false;
    })
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: -29,
    slidesPerView: 'auto',
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});


let btnGalleryMore = document.getElementById('btn-gallery-more');
let grid = document.querySelectorAll('.grid-item');
let gridImg = [...grid];
let spinGal = document.querySelector('div #gallery-spin');

document.addEventListener('DOMContentLoaded', moreGallery);
btnGalleryMore.addEventListener('click',moreGallery);

function moreGallery(event) {
    if (event.type === 'DOMContentLoaded') {
        let beforeGrid = gridImg.splice(0, 8);
        beforeGrid.forEach(el => {
            el.classList.remove('hidden')
        })
    }
    if (event.type === 'click') {
        spinGal.classList.remove('hidden');
        setTimeout(move, 2000);
        function move() {
            spinGal.classList.add('hidden');
            btnGalleryMore.classList.add('hidden');
            grid.forEach(el => {
                el.classList.remove('hidden')
            })
            $('.grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: 350,
                gutter: 18,
                percentPosition: true,
                horizontalOrder: true,
                isFitWidth: true,
            });
        }
    }
}

$(document).ready(function($) {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth:350,
        gutter: 18,
        percentPosition: true,
        horizontalOrder: true,
        isFitWidth: true,
    });
});


























// centeredSlides: true,
// width:'70px',
//     workImage.forEach(el => {
//         if (el.dataset.workGraphic === item || el.dataset.workItem === item) {
//             el.classList.remove('hidden');
//         } else if
//         (el.dataset.workGraphic === item || el.dataset.workItem === item) {
//             el.classList.remove('hidden');
//         } else if
//         (el.dataset.workWeb === item || el.dataset.workItem === item) {
//             el.classList.remove('hidden');
//         } else if
//         (el.dataset.workLanding === item || el.dataset.workItem === item) {
//             el.classList.remove('hidden');
//         }
//         btnWork.style.display = 'none';
//     })
// }