# highlightjs-highlight-lines.js
Line highlighting plugin for [Highlight.js](https://highlightjs.org/)

**[DEMO](https://trsasasusu.github.io/highlightjs-highlight-lines.js/)**

**[DEMO with highlightjs-line-numbers.js](https://trsasasusu.github.io/highlightjs-highlight-lines.js/line-numbers.html)**

## Install

Get from CDN,

```html
<script src="//cdn.jsdelivr.net/gh/TRSasasusu/highlightjs-highlight-lines.js@1.2.0/highlightjs-highlight-lines.min.js"></script>
```

or download from this repository.

## Usage

### Without [highlightjs-line-numbers.js](https://github.com/wcoder/highlightjs-line-numbers.js/)
Include `highlightjs-highlight-lines.min.js` after highlight.js.

```html
<script src="path/to/highlight.min.js"></script>
<script src="path/to/highlightjs-highlight-lines.min.js"></script>
```

Initialize after highlight.js.

```js
hljs.highlightAll();
hljs.highlightLinesAll([
    [{start: 2, end: 4, color: '#555'}, {start: 7, end: 7, color: 'yellow'},], // Highlight some lines in the first code block.
    [{start: 3, end: 4, color: 'rgba(255, 255, 255, 0.2)'},], // Highlight some lines in the second code block.
]);
```

### With [highlightjs-line-numbers.js](https://github.com/wcoder/highlightjs-line-numbers.js/)
Include `highlightjs-highlight-lines.min.js` after highlight.js and highlightjs-line-numbers.js.

```html
<script src="path/to/highlight.min.js"></script>
<script src="path/to/highlightjs-line-numbers.js"></script>
<script src="path/to/highlightjs-highlight-lines.min.js"></script>
```

Initialize after highlight.js and highlightjs-line-numbers.js.

```js
hljs.highlightAll();
hljs.initLineNumbersOnLoad();
hljs.highlightLinesAll([
    [{start: 2, end: 4, color: '#555'}, {start: 7, end: 7, color: 'yellow'},], // Highlight some lines in the first code block.
    [{start: 3, end: 4, color: 'rgba(255, 255, 255, 0.2)'},], // Highlight some lines in the second code block.
]);
```

### Using hljs.highlightElement
See **[DEMO using hljs.highlightElement](https://trsasasusu.github.io/highlightjs-highlight-lines.js/use-highlight-element.html)**.

## License
MIT License
