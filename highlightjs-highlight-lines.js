(function(w, d) {
    if(w.hljs) {
        w.hljs.initHighlightLinesOnLoad = initHighlightLinesOnLoad;
    }

    /*
    [
        [
        {
            start: 1,
            end: 3,
            color: 'yellow',
        },
        ],
    ]
    */
    function initHighlightLinesOnLoad(options) {
        var codes = d.getElementsByClassName('hljs');
        for(var i = 0; i < codes.length; ++i) {
            codes[i].innerHTML = codes[i].innerHTML.replace(/[ \S]*\n/gm, function(match) {
                //return '<div class="highlight-line">' + match.slice(0, -1) + '<br /></div>';
                return '<div class="highlight-line">' + match + '</div>';
            });

            if(options[i] === undefined) {
                continue;
            }
            var lines = codes[i].getElementsByClassName('highlight-line');
            for(var option of options[i]) {
                for(var j = option.start; j <= option.end; ++j) {
                    lines[j].style.backgroundColor = option.color;
                }
            }
        }
    }
}(window, document));
