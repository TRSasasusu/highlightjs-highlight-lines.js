(function(w, d) {
    'use strict';

    if(w.hljs) {
        w.hljs.initHighlightLinesOnLoad = initHighlightLinesOnLoad;
        w.hljs.highlightLinesCode = highlightLinesCode;
    }

    function initHighlightLinesOnLoad(options) {
        function callHighlightLinesCode() {
            var codes = d.getElementsByClassName('hljs');
            for(var i = 0; i < codes.length; ++i) {
                highlightLinesCode(codes[i], options[i]);
            }
        }

        if(d.readyState !== 'loading') {
            callHighlightLinesCode();
        }
        else {
            w.addEventListener('DOMContentLoaded', function() {
                callHighlightLinesCode();
            });
        }
    }

    function highlightLinesCode(code, options) {
        function highlightLinesCodeWithNumbers() {
            var tables = code.getElementsByTagName('table');
            if(tables.length == 0) {
                return;
            }

            clearInterval(interval_id);

            var table = tables[0];
            table.style.width = '100%';
            var hljs_ln_numbers = table.getElementsByClassName('hljs-ln-numbers');
            for(var hljs_ln_number of hljs_ln_numbers) {
                hljs_ln_number.style.width = '2em';
            }

            if(options === undefined) {
                return;
            }
            var lines = code.getElementsByTagName('tr');
            for(var option of options) {
                for(var j = option.start; j <= option.end; ++j) {
                    lines[j].style.backgroundColor = option.color;
                }
            }
        }

        if(hljs.hasOwnProperty('initLineNumbersOnLoad')) {
            var interval_id = setInterval(highlightLinesCodeWithNumbers, 1000);
            return;
        }

        code.innerHTML = code.innerHTML.replace(/[ \S]*\n/gm, function(match) {
            return '<div class="highlight-line">' + match + '</div>';
        });

        if(options === undefined) {
            return;
        }
        var lines = code.getElementsByClassName('highlight-line');
        var scroll_width = code.scrollWidth;
        for(var option of options) {
            for(var j = option.start; j <= option.end; ++j) {
                lines[j].style.backgroundColor = option.color;
                lines[j].style.minWidth = scroll_width + 'px';
            }
        }
    }

}(window, document));
