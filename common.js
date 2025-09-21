// 共通のヘッダーHTML
const headerHTML = `
<nav>
    <div class="nav-container">
        <button id="hamburger" class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        
        <div class="logo">
            <a href="index.html">Sample Site</a>
        </div>
    </div>
</nav>

<!-- モバイルメニュー -->
<div id="mobile-menu" class="mobile-menu">
    <div class="menu-content">
        <button id="menu-close" class="close-btn">&times;</button>
        
        <ul class="menu-links">
            <li><a href="index.html">ホーム</a></li>
            <li><a href="about.html">アバウト</a></li>
            <li><a href="#services">サービス</a></li>
            <li><a href="link.html">リンク集</a></li>
            <li><a href="#contact">コンタクト</a></li>
        </ul>
    </div>
</div>

<!-- メニューオーバーレイ -->
<div id="menu-overlay" class="menu-overlay"></div>
`;

// 共通のフッターHTML
const footerHTML = `
<div class="container">
    <p>&copy; 2024 Sample Site. All rights reserved.</p>
</div>
`;

// メニュー機能を設定
function initializeMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuClose = document.getElementById('menu-close');
    const menuOverlay = document.getElementById('menu-overlay');

    if (!hamburger || !mobileMenu || !menuClose || !menuOverlay) {
        return;
    }

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

    // イベントリスナー設定
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

    console.log('メニュー機能初期化完了');
}

// ヘッダーとフッターを自動挿入
function loadCommonElements() {
    // ヘッダーを挿入
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = headerHTML;
    }
    
    // フッターを挿入
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = footerHTML;
    }
    
    // HTMLを挿入後、メニュー機能を初期化
    setTimeout(initializeMenu, 50);
}

// DOM読み込み完了後に実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCommonElements);
} else {
    loadCommonElements();
}
