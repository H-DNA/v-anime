---
next:
  text: 'Typing Text'
  link: '/examples/typing-text'

prev:
  text: 'Spinner'
  link: '/examples/spinner'
---

# Toggle Button

This showcases some ways to build some simple toggle button.

## Simple Toggle Button

<div class="toggle-button-container">
    <input id="button" type="checkbox">
    <label for="button">
        <div class="button-dot"></div>
    </label>
</div>

<style>
    .toggle-button-container {
        --width: 60px;
        --height: 30px;
    }
    .toggle-button-container input {
        display: none;
    }
    .toggle-button-container label {
        display: inline-block;
        width: var(--width);
        height: var(--height);
        border-radius: var(--height);
        border: 1px solid gray;
        transition: background-color 0.3s ease;
        cursor: pointer;
    }
    .toggle-button-container label .button-dot {
        position: relative;
        background-color: #eeeeee;
        width: calc(var(--height) - 10px);
        height: calc(var(--height) - 10px);
        top: 4px;
        border: 1px solid gray;
        border-radius: 1000px;
        transition: left 0.3s ease;
    }

    .toggle-button-container input + label {
        .button-dot {
            left: 5px;
        }
    }

    .toggle-button-container input:checked + label {
        background-color: #00ff00;
        .button-dot {
            left: calc(var(--width) - var(--height) + 5px);
        }
    }
</style>

### Solution (CSS-only)

```html
<div class="toggle-button-container">
    <input id="button" type="checkbox">
    <label for="button">
        <div class="button-dot"></div>
    </label>
</div>
```

```css
.toggle-button-container {
    --width: 60px; /* tunable: button width */
    --height: 30px; /* tunable: button height */
    --dot-color: #eeeeee; /* tunable: dot color */
    --selected-color: #00ff00; /* tunable: button color when selected */
}
.toggle-button-container input {
    display: none;
}
.toggle-button-container label {
    display: inline-block;
    width: var(--width);
    height: var(--height);
    border-radius: var(--height);
    border: 1px solid gray;
    transition: background-color 0.3s ease;
    cursor: pointer;
}
.toggle-button-container label .button-dot {
    position: relative;
    background-color: var(--dot-color);
    width: calc(var(--height) - 10px);
    height: calc(var(--height) - 10px);
    top: 4px;
    border: 1px solid gray;
    border-radius: 1000px;
    transition: left 0.3s ease;
}

.toggle-button-container input + label {
    .button-dot {
        left: 5px;
    }
}

.toggle-button-container input:checked + label {
    background-color: var(--selected-color);
    .button-dot {
        left: calc(var(--width) - var(--height) + 5px);
    }
}
```

## Lessons Learned

- CSS variables: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
- `calc` CSS function
- `transition` property: https://developer.mozilla.org/en-US/docs/Web/CSS/transition
