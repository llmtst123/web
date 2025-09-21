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
}

// DOM読み込み完了後に実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCommonElements);
} else {
    loadCommonElements();
}
