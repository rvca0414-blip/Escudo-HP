// フォーム送信処理（要素が存在する場合のみ実行）
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('お問い合わせを受け付けました。\n担当者より2営業日以内にご連絡いたします。');
        this.reset();
    });
}

// FAQ アコーディオン
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        const wasActive = this.classList.contains('active');
        
        // 全てのFAQを閉じる
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // クリックされたアイテムが閉じていた場合のみ開く
        if (!wasActive) {
            this.classList.add('active');
        }
    });
});