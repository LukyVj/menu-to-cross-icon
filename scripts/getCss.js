function css(a) {
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.is(rules[r].selectorText)) {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
}

function css2json(css) {
    var s = {},
        l = [],
        x = "";
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            x = css[i];
            if ((x).toLowerCase) {
                s[(x).toLowerCase()] = (css[x]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var j in css) {
            l = css[j].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}