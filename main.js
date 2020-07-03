((window,document,undefined)=>{
    document.addEventListener('DOMContentLoaded',evt=>{
        const sliderInner = document.querySelector(".slider__inner");
        const sliderNav = document.querySelector(".slider__nav-list");
        const items =  Array.from(document.querySelectorAll(".slider__nav-li"));
        sliderNav.addEventListener('click',e=>{
            if(e.target.classList.contains("slider__nav-li")){
                let itemSelect = e.target.dataset.li;
                clearSelection();
                e.target.classList.add("slider__nav-li--selected");
                sliderInner.style.transform = `translateX(-${itemSelect * 100}%)`;
            }
        });
        const clearSelection = () => {
            console.log(items);
            items.forEach(item=>{
                item.classList.remove("slider__nav-li--selected");
            });
        };
    });

   
})(window,document);