var bg=document.querySelector(".backgr");

bg.addEventListener("mousemove",function(details){
    var loc=bg.getBoundingClientRect();
    var inside=details.clientX-loc.left;

        if(inside<loc.width/2){
        var redcolor=gsap.utils.mapRange(0,loc.width/2,255,0,inside);
         gsap.to(bg,{
            backgroundColor:`rgb( ${redcolor} ,0,0)`,
            ease: Power4,
         });}
        else {
            var bluecolor=gsap.utils.mapRange(loc.width/2,loc.right,0,255,inside);
         gsap.to(bg,{
            backgroundColor:`rgb(0,0 ,${bluecolor})`,
            ease: Power4,
         });
        }
});
