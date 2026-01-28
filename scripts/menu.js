// 画面サイズを確認する関数
function isDesktop() {
    return window.innerWidth >= 769;
}

// デバッグ用：コンソールに情報を出力
function debugLog(message) {
    console.log('[Menu Debug]', message);
}

// メニューの表示状態を管理する関数
function updateMenuDisplay() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('menu-overlay');
    const menuIcon = document.getElementById('menu-icon');
    
    debugLog(`画面幅: ${window.innerWidth}px`);
    debugLog(`isDesktop: ${isDesktop()}`);
    
    if (isDesktop()) {
        // パソコン画面の場合
        debugLog('パソコンモードに切り替え');
        if (menu) {
            menu.classList.remove('active');
            // CSSで制御するため、JSでは特別な処理不要
        }
        if (overlay) {
            overlay.style.display = 'none';
        }
    } else {
        // スマホ・タブレットの場合
        debugLog('モバイルモードに切り替え');
    }
}

// ページロード完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    debugLog('DOM読み込み完了');
    
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('menu-overlay');
    
    // 要素の存在確認
    debugLog(`menu-icon: ${menuIcon ? '存在' : '未存在'}`);
    debugLog(`menu: ${menu ? '存在' : '未存在'}`);
    debugLog(`menu-overlay: ${overlay ? '未存在' : '存在'}`);
    
    // 初期表示設定
    updateMenuDisplay();
    
    // ハンバーガーメニューのクリック処理
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            debugLog('ハンバーガーアイコンクリック');
            
            // パソコンの場合は何もしない
            if (isDesktop()) {
                debugLog('パソコンなのでメニュー操作をスキップ');
                return;
            }
            
            if (menu) {
                menu.classList.toggle('active');
                debugLog(`メニューactive状態: ${menu.classList.contains('active')}`);
                
                if (overlay) {
                    if (menu.classList.contains('active')) {
                        overlay.style.display = 'block';
                    } else {
                        overlay.style.display = 'none';
                    }
                }
            }
        });
    }
    
    // オーバーレイクリック処理
    if (overlay) {
        overlay.addEventListener('click', function() {
            debugLog('オーバーレイクリック');
            
            // パソコンの場合は何もしない
            if (isDesktop()) {
                debugLog('パソコンなのでオーバーレイ操作をスキップ');
                return;
            }
            
            if (menu) {
                menu.classList.remove('active');
                overlay.style.display = 'none';
                debugLog('メニューを閉じました');
            }
        });
    }
    
    // 画面サイズ変更時の処理
    window.addEventListener('resize', function() {
        debugLog('画面サイズ変更');
        updateMenuDisplay();
    });
});

// 念のため、windowロード後にも実行
window.addEventListener('load', function() {
    debugLog('Window完全ロード完了');
    updateMenuDisplay();
});