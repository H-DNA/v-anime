---
next:
  text: 'Progress Bar'
  link: '/examples/progress-bar'

prev:
  text: 'Examples'
  link: '/examples'
---

# Float Effect

This showcases some ways to make objects look like they're floating.

## Float Effect #1

<div class="float"></div>

<style>
@keyframes float {
    from {
        transform: translate(-10px, -5px);
    }
    10% {
        transform: translate(-5px, -10px);
    }
    50% {
        transform: translate(10px, 5px);
    }
    60% {
        transform: translate(5px, 10px);
    }
    to {
        transform: translate(-10px, -5px);
    }
}

.float {
    margin: 100px;
    height: 64px;
    width: 64px;
    background-color: coral;
    
    animation-name: float;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>

### Solution

```html
<div class="float"></div>
```

```css
/* tunable: float shape */
@keyframes float {
    from {
        transform: translate(-10px, -5px);
    }
    10% {
        transform: translate(-5px, -10px);
    }
    50% {
        transform: translate(10px, 5px);
    }
    60% {
        transform: translate(5px, 10px);
    }
    to {
        transform: translate(-10px, -5px);
    }
}

.float {
    margin: 100px;
    height: 64px;
    width: 64px;
    background-color: coral;
    
    animation-name: float;
    animation-duration: 3s; /* tunable: floating duration */
    animation-iteration-count: infinite;
    animation-timing-function: linear; /* tunable: soften the movement ? */
}
```
