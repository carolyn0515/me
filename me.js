function transitionToPage(url) {
    document.body.classList.add('zoom-out'); // 애니메이션 적용
    setTimeout(() => {
        window.location.href = url; // 페이지 이동
    }, 1500); // 애니메이션 시간(1.5초) 후 이동
}
