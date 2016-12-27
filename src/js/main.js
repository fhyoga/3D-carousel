(function () {
    var figureNode = document.getElementsByClassName('figure-carousel'),
        wrapNode = document.getElementsByClassName('wrap-carousel')[0],
        navNode=document.getElementsByClassName('nav-carousel')[0],
        controllerNode=[],
        count = carousel.count,
        median = Math.floor((count + 1) / 2)-1,
        angle = 360 / count,
        distance = carousel.width / 2 / Math.tan(angle / 2 / 180 * Math.PI) + 50,
        centerNum = 0,
        transformAngle=0,
        prefixs = ["Moz", "O", "Ms", "Webkit", ""];
    function init() {
        for (var i = 0, j = figureNode.length; i < j; i++) {
            figureNode[i].tabIndex = i;
            controllerNode[i]=document.createElement('span');
            navNode.appendChild(controllerNode[i]);
            controllerNode[i].tabIndex=i;
            controllerNode[i].className='controller';
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


})();