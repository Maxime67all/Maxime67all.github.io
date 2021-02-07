window.onscroll = function() { sticky() };


let header = document.getElementById('sticky-header');
let stickycomponent = header.offsetTop;


function sticky() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > stickycomponent) {
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}