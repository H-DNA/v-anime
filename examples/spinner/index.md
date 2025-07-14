---
next:
  text: 'Typing Text'
  link: '/examples/typing-text'

prev:
  text: 'Float Effect'
  link: '/examples/float-effect'
---

# Spinner

This showcases some ways to build some simple spinners.

## Circular Spinner

<div class="circular-spinner">
</div>

<style>
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.circular-spinner {
    height: 64px;
    width: 64px;
    border: 5px solid lightgrey;
    border-top: 5px solid blue;
    border-radius: 1000px;

    animation-name: spin;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>

### Solution

```html
<div class="spinner">
</div>
```

```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.spinner {
    height: 64px; /* tunable: height */
    width: 64px; /* tunable: width */

    border: 5px solid lightgrey; /* tunable: outer border's width and color */
    border-top: 5px solid blue; /* tunable: inner border's width and color */
    border-radius: 1000px;

    animation-name: spin;
    animation-duration: 4s; /* tunable: spin speed */
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
```

## Circular Filling Spinner

<canvas id="circular-filling-spinner-canvas" width="150" height="150" class="filling-spinner"></canvas>

<style>
.filling-spinner {
    animation-name: spin;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>

<script>
window.addEventListener("load", () => {
    const ctx = document.getElementById("circular-filling-spinner-canvas").getContext("2d");
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#3498db";
    ctx.lineCap = "round";
    const height = 150;
    const width = 150;
    const rps = 0.5;
    
    function cfsDraw() {
        ctx.clearRect(0, 0, width, height);
        const s = Date.now() / 1000;
        const progress = 2 / 3 * Math.sin(s * Math.PI * 2 * rps) + 1 / 3;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, width / 2.5, -Math.PI / 2, 3 * Math.PI / 2 * progress, true);
        ctx.stroke();
        
        window.requestAnimationFrame(cfsDraw); 
    }
    
    window.requestAnimationFrame(cfsDraw);
});
</script>
