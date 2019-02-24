# highlightjs-highlight-lines.js
Line highlighting plugin for [Highlight.js](https://highlightjs.org/)

**[DEMO](https://trsasasusu.github.io/highlightjs-highlight-lines.js/)**

**[DEMO with highlightjs-line-numbers.js](https://trsasasusu.github.io/highlightjs-highlight-lines.js/line-numbers.html)**

## Install

Get from CDN,

```html
<script src="//cdn.jsdelivr.net/gh/TRSasasusu/highlightjs-highlight-lines.js@1.1.3/highlightjs-highlight-lines.min.js"></script>
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
hljs.initHighlightingOnLoad();
hljs.initHighlightLinesOnLoad([
    [{start: 1, end: 3, color: '#555'}, {start: 6, end: 6, color: 'yellow'},], // Highlight some lines in the first code block.
    [{start: 2, end: 3, color: 'rgba(255, 255, 255, 0.2)'},], // Highlight some lines in the second code block.
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
hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();
hljs.initHighlightLinesOnLoad([
    [{start: 1, end: 3, color: '#555'}, {start: 6, end: 6, color: 'yellow'},], // Highlight some lines in the first code block.
    [{start: 2, end: 3, color: 'rgba(255, 255, 255, 0.2)'},], // Highlight some lines in the second code block.
]);
```

## License
MIT License
