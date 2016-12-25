(function () {
    var figureNode=document.getElementsByClassName('figure'),
        angle=360/op.count,
        distance=op.width/2/Math.tan(angle/2/180*Math.PI)+50;
    console.log(distance);
for (var i=0,j=figureNode.length;i<j;i++)
     {
        figureNode[i].style.transform='rotateY('+i*angle+'deg) translateZ('+distance+'px)';
    }
})();