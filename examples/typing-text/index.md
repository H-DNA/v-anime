---
prev:
  text: 'Spinner'
  link: '/examples/spinner'
---

# Typing Text

This showcases some ways to animate self-typing text, like in this page: https://lowlevel.academy/.

## Typing Text without Affecting Layout

This one imperfectly simulate the animation in the link above because layout is not affected, making it look less "real".

<div class="auto-type">&gt; Fundamentals</div>

<style>
@keyframes autotype {
    from {
        clip-path: rect(0px 0px 100% 0px);
    }
    to {
        clip-path: rect(0px 100% 200% 0px);
    }
}

.auto-type {
    text-align: center;
    color: purple;

    animation-name: autotype;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>

### Solution

```html
<div class="auto-type">&gt; Fundamentals</div>
```

```css
@keyframes autotype {
    from {
        clip-path: rect(0px 0px 100% 0px);
    }
    to {
        clip-path: rect(0px 100% 200% 0px);
    }
}

.auto-type {
    text-align: center;
    color: purple;

    animation-name: autotype;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
```
