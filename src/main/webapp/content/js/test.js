function kaka() { 
    url(state = { source: "" }, !0),
     d3.select("#paste-save").property("checked") && 
     d3.text("save").post(d3.select("#paste").property("value"), 
     function (e, t) { e ? alert("An error occurred when attempting to save your text for sharing!") : url({ source: state.source = t }) }), 
     processText(d3.select("#paste").property("value")) }