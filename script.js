// DOM要素取得
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const menuOverlay = document.getElementById('menu-overlay');

// メニューを開く
function openMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// メニューを閉じる
function closeMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

// イベントリスナー
hamburger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// ESCキーでメニューを閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
    }
});

// メニューリンクをクリックしたらメニューを閉じる
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

console.log('サイト初期化完了');
