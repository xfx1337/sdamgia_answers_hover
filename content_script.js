var span = document.getElementsByClassName("prob_nums")

for (const el of span) {
    el.onmouseover = function(){foundSpan(el)};
    el.onmouseout = function(){forgetSpan1(el)};
}

function forgetSpan1(el) {
    setTimeout(function(){
        forgetSpan(el)
    }, 1000);
}

function foundSpan(el) {
    const check = el.children[0].href
    $.get(check, function(data){runPayload(data, el)})
}

function forgetSpan(el) {
    if (el.innerHTML.includes("extension_hidden_answer")) {
        const elements = el.getElementsByClassName("extension_hidden_answer");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}

function runPayload(data, el) {
    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = data;
    var maindiv = htmlObject.getElementsByClassName("answer")
    answer = maindiv[0].children[0].textContent
    if (!el.innerHTML.includes("extension_hidden_answer")) {
        var hidediv = '<div class="extension_hidden_answer">' + answer + '</div>'
        el.innerHTML = el.innerHTML +  hidediv
    }
    
}