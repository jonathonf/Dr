requirejs(
    [ 
        "js/asciidoctor-all.min.js",
        "js/asciidocify.js",
        "js/prettify.js",
    ],
    scriptsReady
);

function scriptsReady() {
    asciidocify.options("");
    asciidocify.load();
    prettyPrint();
}
