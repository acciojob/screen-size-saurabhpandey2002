function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.getElementById('screenSize');
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

// Initial call to display the size on load
updateSize();

// Add event listener to update the size on window resize
window.addEventListener('resize', updateSize);
