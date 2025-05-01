//監聽場景是否被成功載入
document.addEventListener('DOMContentLoaded', function () {
  const scene = document.querySelector('#myScene');
  const loading = document.getElementById('loading');

  if (!scene) {
    console.error('找不到場景 (#myScene)，請檢查 HTML 是否正確！');
    return;
  }

  scene.addEventListener('loaded', () => {
    loading.style.opacity = 0;
    setTimeout(() => loading.style.display = 'none', 500); // 0.5秒後隱藏
  });
});

const scene = document.querySelector('#myScene');
const loading = document.getElementById('loading');

scene.addEventListener('loaded', () => {
  loading.style.opacity = 0;
  setTimeout(() => loading.style.display = 'none', 500); // 0.5秒後隱藏
});
