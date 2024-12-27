// cursor-trail.js
function createTrail(e) {
    const trail = document.createElement('div');
    trail.classList.add('trail');

    trail.style.left = `${e.pageX - 6}px`;  // Center the particle at the cursor
    trail.style.top = `${e.pageY - 6}px`;   // Center the particle at the cursor

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1000);  // Remove the trail particle after 1 second
}

document.addEventListener('mousemove', createTrail);
