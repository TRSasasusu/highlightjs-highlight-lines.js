# highlightjs-highlight-lines.js
Line highlighting plugin for Highlight.js

**[DEMO](https://trsasasusu.github.io/highlightjs-highlight-lines.js/)**

## Usage
Include `highlightjs-highlight-lines.js` after highlight.js.

```html
<script src="path/to/highlight.min.js"></script>
<script src="path/to/highlightjs-highlight-lines.js"></script>
```

Initialize after highlight.js.

```js
hljs.initHighlightingOnLoad();
hljs.initHighlightLinesOnLoad([
    [{start: 1, end: 3, color: '#555'}, {start: 6, end: 6, color: 'yellow'},], // Highlight some lines in the first code block.
    [{start: 2, end: 3, color: 'rgba(255, 255, 255, 0.2)'},], // Highlight some lines in the second code block.
]);
```

## License
MIT License
