function lightUp(tri){
    const isLit = tri.classList.contains('lit');

    if (isLit) {
      tri.classList.remove('lit');
      tri.style.borderBottomColor = 'gold';
      tri.style.filter = 'none';
    } else {
      const color = tri.dataset.color;
      tri.classList.add('lit');
      tri.style.borderBottomColor = color;
      tri.style.filter = `drop-shadow(0 0 100px ${color})`;
      tri.style.opacity = '1';
    }
}