(function(){
    var el = document.getElementById('editor');
    var workout = location.origin + '/schema/' + getParameterByName('workout') + '.json';

    var schema = callAjax(workout, function(schema) {
        var editor = new JSONEditor(el, {
            ajax: true,
            schema: JSON.parse(schema)
        });
    });

    /**
     * Call Ajax
     * HT: http://stackoverflow.com/questions/8567114/how-to-make-an-ajax-call-without-jquery
     */
    function callAjax(url, callback){
        var xmlhttp;
        // compatible with IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                callback(xmlhttp.responseText);
            }
        };
        xmlhttp.open('GET', url, true);
        xmlhttp.send();
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " ").replace(/\//g, ""));
    }

    document.getElementById('submit').addEventListener('click',function() {
        // Get the value from the editor
        console.log(editor.getValue());
    });
}());
