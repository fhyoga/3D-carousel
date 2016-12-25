(function () {
    var figureNode = document.getElementsByClassName('figure'),
        wrapNode=document.getElementsByClassName('wrap')[0],
        count=op.count,
        centerNum=Math.floor((count+1)/2),
        angle = 360 / count,
        distance = op.width / 2 / Math.tan(angle / 2 / 180 * Math.PI) + 50,
        figs=[],
        prefixs=["Moz", "O", "Ms", "Webkit", ""],
        mainIndex=1;
    console.log(distance);
    // for (var i = 0, j = figureNode.length; i < j; i++) {
    //     figureNode[i].style.transform = 'rotateY(' + i * angle + 'deg) translateZ(' + distance + 'px)';
    //     figureNode[i].onclick = function (event) {
    //         if (this.tabIndex>centerNum){
    //             wrapNode.style.transform='rotateY('+(count+1-this.tabIndex)*angle+'deg)'
    //         }else {
    //
    //         }
    //     }
    // }
    function Fig(node,index) {
        this.domNode=node;
        this.tabIndex=index;
        this.wrapRotateAngle=0;
        this.init()
    }
    Fig.prototype.init=function () {
        var tabIndex=this.tabIndex,
            domNode=this.domNode;
        if(tabIndex<centerNum){
            this.domNode.wrapRotateAngle=-1*this.tabIndex*angle
        }else {
            this.domNode.wrapRotateAngle=(count-this.tabIndex)*angle
        }
        prefixs.forEach(function (value) {
            domNode.style[value+'transform']='rotateY(' + tabIndex * angle + 'deg) translateZ(' + distance + 'px)';
            console.log(domNode.style);

        })
    };
    Fig.prototype.transform=function () {
        var wrapRotateAngle=this.wrapRotateAngle;
        prefixs.forEach(function (value) {
            this.domNode.parentNode.style[value+'transform']='rotateY('+wrapRotateAngle+'deg)'
        })
    };
    for (var i=0,j=figureNode.length;i<j;i++){
        figs[i]=new Fig(figureNode[i],i);
    }


})();