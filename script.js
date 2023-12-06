// 監聽圖片進入畫面時載入高畫質圖片
// 
// ==== IntersectionObserver ====
window.onload = () => {
    function onEnterView(entries, observer) {
        for (const entry of entries) {
            const img = entry.target;
            if (entry.isIntersecting) {
                img.classList.add('loading')
                img.setAttribute('src', img.dataset.src);
                // observer.unobserve(img);
            }else{
                img.classList.remove('loading')
                img.setAttribute('src',img.dataset.small)
            }
        }
    }
    const watcher = new IntersectionObserver(onEnterView);
    const lazyImages = document.querySelectorAll('img.lazy');
    for (const image of lazyImages) {
        watcher.observe(image);
    }
}
// ========