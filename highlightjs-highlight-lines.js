(function(w, d) {
    'use strict';

    if(w.hljs) {
        w.hljs.highlightLinesAll = highlightLinesAll;
        w.hljs.highlightLinesElement = highlightLinesElement;

        /* deprecated */
        w.hljs.initHighlightLinesOnLoad = initHighlightLinesOnLoadWithDeprecated;
        w.hljs.highlightLinesCode = highlightLinesCodeWithDeprecated;
    }

    function highlightLinesAll(options) {
        for(var i = 0; i < options.length; ++i) {
            for(var option of options[i]) {
                --option.start;
                --option.end;
            }
        }
        initHighlightLinesOnLoad(options);
    }

    var initHighlightLinesOnLoadWithDeprecatedCalled = false;
    function initHighlightLinesOnLoadWithDeprecated(options) {
        if(!initHighlightLinesOnLoadWithDeprecatedCalled) {
            console.log('hljs.initHighlightLinesOnLoad is deprecated. Please use hljs.highlightLinesAll')
            initHighlightLinesOnLoadWithDeprecatedCalled = true;
        }
        initHighlightLinesOnLoad(options)
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

    function highlightLinesElement(code, options, has_numbers) {
        for(var option of options) {
            --option.start;
            --option.end;
        }
        highlightLinesCode(code, options, has_numbers);
    }

    var highlightLinesCodeWithDeprecatedCalled = false;
    function highlightLinesCodeWithDeprecated(code, options, has_numbers) {
        if(!highlightLinesCodeWithDeprecatedCalled) {
            console.log('hljs.highlightLinesCode is deprecated. Please use hljs.highlightLinesElement')
            highlightLinesCodeWithDeprecatedCalled = true;
        }
        highlightLinesCode(code, options, has_numbers)
    }

    function highlightLinesCode(code, options, has_numbers) {
        function highlightLinesCodeWithoutNumbers() {
            code.innerHTML = code.innerHTML.replace(/([ \S]*\n|[ \S]*$)/gm, function(match) {
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
        function highlightLinesCodeWithNumbers() {
            var tables = code.getElementsByTagName('table');
            if(tables.length == 0) {
                if(count-- < 0) {
                    clearInterval(interval_id);
                    highlightLinesCodeWithoutNumbers();
                }
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

        if(hljs.hasOwnProperty('initLineNumbersOnLoad') && has_numbers !== false) {
            var count = 100;
            var interval_id = setInterval(highlightLinesCodeWithNumbers, 100);
            return;
        }

        highlightLinesCodeWithoutNumbers();
    }

}(window, document));
