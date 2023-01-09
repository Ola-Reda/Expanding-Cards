let panels = document.querySelectorAll(".box");

panels.forEach(ele => {
    ele.onclick = function () {
        panels.forEach(ele=>{
            ele.classList.remove("active");
        })
        ele.classList.add("active");
    }
});