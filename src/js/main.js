(function () {
    var figureNode = document.getElementsByClassName('figure'),
        wrapNode = document.getElementsByClassName('wrap')[0],
        controllerNode = document.getElementsByClassName('controller'),
        count = op.count,
        median = Math.floor((count + 1) / 2)-1,
        angle = 360 / count,
        distance = op.width / 2 / Math.tan(angle / 2 / 180 * Math.PI) + 50,
        centerNum = 0,
        transformAngle=0;
        prefixs = ["Moz", "O", "Ms", "Webkit", ""];
    function init() {
        for (var i = 0, j = figureNode.length; i < j; i++) {
            figureNode[i].tabIndex = i;
            controllerNode[i].tabIndex=i;
            (function () {
                prefixs.forEach(function (value) {
                    figureNode[i].style[value + 'transform'] = 'rotateY(' + angle * i + 'deg) translateZ(' + distance + 'px)';

                })
            })(i);
            figureNode[i].addEventListener('click', function () {
                render(centerNum, this.tabIndex);
                centerNum=this.tabIndex;
                controlerCheck()
            });
            controllerNode[i].addEventListener('click',function () {
                render(centerNum,this.tabIndex);
                centerNum=this.tabIndex;
                controlerCheck()
            })
        }
    }

    function addTransformPrefix(node, value) {
        prefixs.forEach(function (prefix) {
            node.style[prefix + 'transform'] = 'rotateY(' + value + 'deg)'
        });
        transformAngle=value
    }

    function render(center, tabIndex) {
        if (center <= median) {
            if (tabIndex >= center && tabIndex - center <= median) {
                addTransformPrefix(wrapNode, (tabIndex - center) * angle * -1+transformAngle)
            } else if (tabIndex > center) {
                addTransformPrefix(wrapNode, (count + center - tabIndex) * angle+transformAngle)

            } else {
                addTransformPrefix(wrapNode, (center - tabIndex) * angle+transformAngle)
            }
        } else {
            if (tabIndex >= center) {
                addTransformPrefix(wrapNode, (tabIndex - center) * angle*-1+transformAngle)

            } else if (tabIndex < center && center - tabIndex > median) {
                addTransformPrefix(wrapNode, (count + tabIndex - center) * angle * -1+transformAngle)

            } else {
                addTransformPrefix(wrapNode, (center - tabIndex) * angle+transformAngle)
            }
        }
    }
    function controlerCheck() {
        for (var i=0,j=controllerNode.length;i<j;i++){
            controllerNode[i].className="controller"
        }
        controllerNode[centerNum].className='controller checked'
    }
    init();


    // console.log(distance);
    //
    // function Fig(node, index) {
    //     this.domNode = node;
    //     this.tabIndex = index;
    //     this.wrapRotateAngle = 0;
    //     this.init()
    // }
    //
    // Fig.prototype.init = function () {
    //     var tabIndex = this.tabIndex,
    //         domNode = this.domNode;
    //     if (tabIndex < centerNum) {
    //         this.wrapRotateAngle = -1 * this.tabIndex * angle
    //     } else {
    //         this.wrapRotateAngle = (count - this.tabIndex) * angle
    //     }
    //
    //     prefixs.forEach(function (value) {
    //         domNode.style[value + 'transform'] = 'rotateY(' + tabIndex * angle + 'deg) translateZ(' + distance + 'px)';
    //     })
    // };
    // Fig.prototype.transform = function () {
    //     var wrapRotateAngle = this.wrapRotateAngle;
    //     prefixs.forEach(function (value) {
    //         wrapNode.style[value + 'transform'] = 'rotateY(' + wrapRotateAngle + 'deg)'
    //     })
    // };
    // function Nav() {
    //     this.domNode = node;
    //     this.tabIndex = index;
    //     this.wrapRotateAngle = 0;
    //     this.init()
    // }
    // for (var i = 0, j = figureNode.length; i < j; i++) {
    //     (function () {
    //         var item=i;
    //         figs[item] = new Fig(figureNode[i], i);
    //         figs[item].domNode.addEventListener('click',function () {
    //             figs[item].transform();
    //         });
    //         controllerNode[item].addEventListener('click',function () {
    //             figs[item].transform();
    //         })
    //     })(i)
    // }


})();