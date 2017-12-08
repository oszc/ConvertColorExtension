toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "300",
    "timeOut": "5000",
    "extendedTimeOut": "300",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    "preventDuplicates": true,
}



function copyToClipboard(text) {
    toastr.success(text.concat("已复制到粘贴板"),"", {"iconClass": 'customer-info'});

    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
function showResult(copy) {

    var color =document.getElementById("colorVal").value;
    var opacity = document.getElementById("opacity").value;

    var divOutput = document.getElementById("output");

    if(color.length != 7){
        $("#output").html("请输入正确的颜色值如 \"#FFFFFF\"");
        $("#output").css("color","red");
        return;
    }

    if(opacity>1 || opacity <0){
        $("#output").html("  0<= 透明度<= 1")
        $("#output").css("color","red");
        return;
    }

    var r = color.substr(1,2);
    var g = color.substr(3,2);
    var b = color.substr(5,2);
    console.log("r"+r +"  g:"+g+"  b:"+b);

    var resultR = ((parseInt(r,16)*opacity + 255*(1-opacity)).toString(16)).substr(0,2);
    var resultG = ((parseInt(g,16)*opacity + 255*(1-opacity)).toString(16)).substr(0,2);
    var resultB = ((parseInt(b,16)*opacity + 255*(1-opacity)).toString(16)).substr(0,2);

    console.log("resultR:"+resultR+"   resultG:"+resultG+"   resultB:"+resultB)


    var resultColor= "#".concat(resultR==0?"00":resultR,resultG==0?"00":resultG,resultB==0?"00":resultB);
    $("#output").html(resultColor);
    $("#output").css("color","#000000");
    $("#show").css('background-color', resultColor);

    if(copy){
        copyToClipboard(resultColor);
    }

//            console.log("color:"+color+"  opacity:"+opacity);
}

/*
$("#calculator").click(function(){
    console.log("click calculator");
    showResult(true);
});
*/


$(document).ready(function () {
    showResult(false);

    document.getElementById("calculator").addEventListener("click",function () {
        showResult(true);
    });

});
