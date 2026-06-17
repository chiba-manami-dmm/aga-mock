const LIFF_ID = '2010424035-5EhIEM3j'; // LINE DevelopersのLIFF IDに差し替えてください

liff.init({ liffId: '2010424035-5EhIEM3j' })
  .then(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref) {
      console.log('ref:', ref);
      // 必要に応じてrefパラメータを使った処理を追加
    }
  })
  .catch((err) => {
    // LIFF初期化失敗時もページは表示する（ブラウザ直アクセス時など）
    console.warn('LIFF init failed:', err);
  });
