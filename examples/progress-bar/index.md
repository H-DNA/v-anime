---
next:
  text: 'Spinner'
  link: '/examples/spinner'

prev:
  text: 'Float Effect'
  link: '/examples/float-effect'
---

# Progress Bar

This showcases some simple progress bars.

## Progress Bar #1

<div class="progress-container">
<div class="progress"></div>
<div class="content">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo sem id orci venenatis, vel viverra urna rutrum. Nulla nisl mauris, porta quis erat at, maximus auctor metus. Cras sodales auctor enim ut mattis. Vivamus eu faucibus enim, et aliquam massa. Ut in lorem id ipsum ullamcorper condimentum vitae id quam. Praesent rhoncus mi ut dui lacinia pulvinar. In faucibus nibh et massa fermentum porta. Maecenas ultrices, turpis eu sodales facilisis, urna lectus bibendum urna, vel lobortis leo nulla vel augue. Duis pellentesque sollicitudin massa, a efficitur eros aliquet in. Sed malesuada accumsan ultrices. Duis cursus felis et felis consequat, nec tincidunt nisi pulvinar.

Aenean sagittis, risus at consectetur finibus, ante justo sodales enim, at laoreet augue erat in justo. Mauris facilisis condimentum ultricies. Sed erat ante, blandit nec ullamcorper nec, fringilla vel mauris. Ut id magna sodales, viverra nibh id, maximus purus. Praesent eu est a arcu porttitor ullamcorper. Vivamus vitae consequat nisl, in malesuada dui. Integer molestie viverra condimentum. In hac habitasse platea dictumst. Quisque elementum ut purus a accumsan.

Suspendisse tempor mauris eget rhoncus eleifend. Cras sagittis nunc odio, ut consequat purus posuere at. Morbi at turpis non mi ullamcorper rutrum. Integer at ornare urna. Mauris vulputate neque vel arcu fermentum, ut blandit lacus iaculis. Nullam et interdum lectus. Vestibulum at mattis tellus, a imperdiet lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat velit vel nulla posuere malesuada. Aenean ornare suscipit sapien. Suspendisse in cursus nibh. Cras consectetur leo dolor, faucibus lobortis magna semper a. Mauris ultrices risus a enim pharetra laoreet.

Vestibulum accumsan odio vel nisl congue tristique. Quisque sollicitudin convallis libero sit amet dictum. Mauris libero quam, iaculis vel nisl a, faucibus consectetur eros. Ut purus nisi, finibus vel neque eget, placerat sagittis felis. Maecenas sed varius eros. Suspendisse ultricies ut leo ut consectetur. Etiam gravida, quam at laoreet porttitor, velit felis pretium enim, quis condimentum diam quam eget velit. Maecenas metus mi, rutrum ac condimentum non, laoreet eget justo.

Donec non nisi non odio pharetra dapibus ac non magna. Sed magna massa, accumsan id nibh eget, luctus placerat sem. Sed eu sodales eros. Sed sagittis dignissim velit ac fringilla. Nullam sollicitudin ex sit amet iaculis lacinia. Integer non nulla fringilla, feugiat leo a, bibendum mauris. Nam gravida tempor augue, at lobortis augue iaculis vitae. 
</div>
</div>

<style>
    .progress-container {
        height: 150px;
        width: 300px;
        margin: auto;
        overflow-y: scroll;
        position: relative;
    }
    .progress {
        height: 10px;
        width: 100%;
        position: sticky;
        top: 0;
        background-color: blue;
        transform: translateX(100%);
    }
    .content {
        margin-top: 5px;
    }
</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const scrollBox = document.querySelector(".progress-container");
    const progressBar = document.querySelector(".progress");
    scrollBox.addEventListener("scroll", () => {
        const scrollPosition = scrollBox.scrollTop;
        const scrollDistance = scrollBox.scrollHeight - scrollBox.clientHeight;
        const progress = scrollPosition / scrollDistance;
        progressBar.style.transform = `translateX(${progress * 100 - 100}%)`;
    });
});
</script>

### Solution

```html
<div class="progress-container">
    <div class="progress"></div>
    <div class="content">...</div>
</div>
```

```css
.progress-container {
    height: 150px; /* tunable: content height */
    width: 300px; /* tunable: content width */
    margin: auto;
    overflow-y: scroll;
    position: relative;
}
.progress {
    height: 10px; /* tunable: progress bar height */
    width: 100%;
    position: sticky;
    top: 0;
    background-color: blue; /* tunable: progress bar color*/
    transform: translateX(100%);
}
.content {
    margin-top: 5px; /* tunable: distance to progress bar */
}
```

```js
const scrollBox = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress");
scrollBox.addEventListener("scroll", () => {
    const scrollPosition = scrollBox.scrollTop;
    const scrollDistance = scrollBox.scrollHeight - scrollBox.clientHeight;
    const progress = scrollPosition / scrollDistance;
    progressBar.style.transform = `translateX(${progress * 100 - 100}%)`;
});
```

## Lessons Learned

- CSSOM View Module: https://developer.mozilla.org/en-US/docs/Web/CSS/CSSOM_view
