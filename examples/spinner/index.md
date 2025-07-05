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
