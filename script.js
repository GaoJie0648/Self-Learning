// 監聽圖片進入畫面時載入高畫質圖片
// 
// ==== IntersectionObserver ====
function onEnterView(entries, observer) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loading')
            img.setAttribute('src', img.dataset.src);
            observer.unobserve(img);
        }
    }
}
const watcher = new IntersectionObserver(onEnterView);
const lazyImages = document.querySelectorAll('img.lazy');
for (const image of lazyImages) {
    watcher.observe(image);
}
// ========