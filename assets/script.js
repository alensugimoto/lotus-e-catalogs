//let lights = document.querySelectorAll()

//document.addEventListener("click", (evt) => {
//    const led = document.getElementsByClassName("light");
//    let targetElement = evt.target;

//    do {
//        if (led.includes(targetElement)) {
//            // function for clicked inside
//            return;
//        }
//        targetElement = targetElement.parentNode;
//    } while (targetElement)

//    // function for clicked outside
//});

document.querySelectorAll(".large, .small").forEach(item => {
    // set image dimensions

    var A = 3000;
    var Q = item.naturalWidth / item.naturalHeight;

    var w = Math.sqrt(A * Q);
    var h = Math.sqrt(A / Q);

    item.style.width = w + 'px';
    item.style.height = h + 'px';

    // set image alt text

    var src = item.src;
    var fileName = src.substring(src.lastIndexOf('/')+1);
    var imageName = fileName.substring(0, fileName.lastIndexOf('.'));

    item.alt = 'Image of a light with model number ' + imageName;
})

document.querySelectorAll(".large").forEach(item => {
    // initialize transform-origin
    item.style.transformOrigin = getUpdatedTransformOrigin(item);

    // event listeners
    item.addEventListener('mouseout', event => {
        item.style.pointerEvents = 'none';
        setTimeout(function () {
            item.style.pointerEvents = 'auto';
        }, 250)
    })
    document.addEventListener('scroll', event => {
        item.style.transformOrigin = getUpdatedTransformOrigin(item);
    })
    window.addEventListener('resize', event => {
        item.style.transformOrigin = getUpdatedTransformOrigin(item);
    })
})

function getUpdatedTransformOrigin(el) {
    var viewportOffset = el.getBoundingClientRect();

    var top = viewportOffset.top;
    var left = viewportOffset.left;
    var right = viewportOffset.right;
    var bottom = viewportOffset.bottom;

    var itemX = left + (right - left) / 2;
    var itemY = top + (bottom - top) / 2;
    var viewport = getViewport();

    var percItemX = 100 * itemX / viewport[0];
    var percItemY = 100 * itemY / viewport[1];

    return percItemX + '% ' + percItemY + '%';
}

function getViewport() {

    var viewPortWidth;
    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
        viewPortHeight = window.innerHeight
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
        viewPortHeight = document.documentElement.clientHeight
    }
    // older versions of IE
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}

//document.querySelectorAll('.light').forEach(item => {
//    item.addEventListener('mouseover', event => {
//        var str1 = "<img type=\"image\" class=\"sticky\" src=\"";
//        var str2 = "\" style=\"width: 55vw;\" >";
//        var e = document.getElementById(item.src.split("/").pop())
//        e.innerHTML = str1 + item.src + str2;
//    })
//})

////document.querySelectorAll('.light').forEach(item => {
////    item.addEventListener('mouseout', event => {
////        var e = document.getElementById(item.src.split("/").pop())
////        e.innerHTML = "";
////    })
////})

//document.querySelectorAll('.light').forEach(item => {
//    item.addEventListener('click', event => {
//        var e1 = document.getElementsByClassName("enlargedLight");
//        if (!e1[0] || e1[0].id != item.src.split("/").pop()) {
//            var str1 = "<input type=\"image\" class=\"sticky\" src=\"";
//            var str2 = "\" style=\"width: 55vw;\" >";
//            var e2 = document.getElementById(item.src.split("/").pop())
//            e2.innerHTML = str1 + item.src + str2;
//            e2.className = "enlargedLight"
//            if (!!e1[0]) {
//                e1[1] = e2;
//            }
//        }
//        //if (document.getElementById("enlargedImage").innerHTML == "") {
//        //    var str1 = "<input type=\"image\" class=\"sticky\" src=\"";
//        //    var str2 = "\" style=\"width: 55vw;\" >";
//        //    document.getElementById(item.src).innerHTML = str1 + item.src + str2;
//        //} else {
//        //    document.getElementById("enlargedImage").innerHTML = "";
//        //}
//    })
//})

//window.addEventListener("click", function() {

//    if (e1.length == 2) {
//        alert("hi")
//        e1[0].innerHTML = "";
//        e1[0].className = "";
//    } else if (e1.length == 1 && !(!e1[0] || e1[0].id != item.src.split("/").pop())) {
//        alert("hi")
//        e1[0].innerHTML = "";
//        e1[0].className = "";
//    }
//    //if (document.getElementById("enlargedImage").innerHTML == "") {
//    //    var src = document.getElementById("light").src;
//    //    var str1 = "<input type=\"image\" class=\"sticky\" src=\"";
//    //    var str2 = "\" style=\"width: 55vw;\" >";
//    //    document.getElementById("enlargedImage").innerHTML = str1.concat(src, str2);
//    //} else {
//    //    document.getElementById("enlargedImage").innerHTML = "";
//    //}
//});

//document.addEventListener("mouseover", function () {
//    if (document.getElementById("enlargedImage").innerHTML == "") {
//        var src = document.getElementById("light").src;
//        var str1 = "<input type=\"image\" class=\"sticky\" src=\"";
//        var str2 = "\" style=\"width: 55vw;\" >";
//        document.getElementById("enlargedImage").innerHTML = str1.concat(src, str2);
//    } else {
//        document.getElementById("enlargedImage").innerHTML = "";
//    }
//});

//if (document.getElementById("enlargedImage").innerHTML != "") {
//    document.getElementById("enlargedImage").addEventListener("click", function() {
//        document.getElementById("enlargedImage").innerHTML = "";
//    });
//}