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
        code.innerHTML = code.innerHTML.replace(/[ \S]*\n/gm, function(match) {
            return '<div class="highlight-line">' + match + '</div>';
        });

        if(options === undefined) {
            return;
        }
        var lines = code.getElementsByClassName('highlight-line');
        for(var option of options) {
            for(var j = option.start; j <= option.end; ++j) {
                lines[j].style.backgroundColor = option.color;
            }
        }
    }
}(window, document));
