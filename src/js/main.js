(function () {
    var figureNode = document.getElementsByClassName('figure'),
        wrapNode = document.getElementsByClassName('wrap')[0],
        controllerNode=document.getElementsByClassName('controller'),
        count = op.count,
        centerNum = Math.floor((count + 1) / 2),
        angle = 360 / count,
        distance = op.width / 2 / Math.tan(angle / 2 / 180 * Math.PI) + 50,
        figs = [],
        prefixs = ["Moz", "O", "Ms", "Webkit", ""];
    console.log(distance);

    function Fig(node, index) {
        this.domNode = node;
        this.tabIndex = index;
        this.wrapRotateAngle = 0;
        this.init()
    }

    Fig.prototype.init = function () {
        var tabIndex = this.tabIndex,
            isCenter=this.isCenter,
            domNode = this.domNode;
        if (tabIndex < centerNum) {
            this.wrapRotateAngle = -1 * this.tabIndex * angle
        } else {
            this.wrapRotateAngle = (count - this.tabIndex) * angle
        }

        prefixs.forEach(function (value) {
            domNode.style[value + 'transform'] = 'rotateY(' + tabIndex * angle + 'deg) translateZ(' + distance + 'px)';
        })
    };
    Fig.prototype.transform = function () {
        var wrapRotateAngle = this.wrapRotateAngle;
        prefixs.forEach(function (value) {
            wrapNode.style[value + 'transform'] = 'rotateY(' + wrapRotateAngle + 'deg)'
        })
    };
    function Nav() {
        this.domNode = node;
        this.tabIndex = index;
        this.wrapRotateAngle = 0;
        this.init()
    }
    for (var i = 0, j = figureNode.length; i < j; i++) {
        (function () {
            var item=i;
            figs[item] = new Fig(figureNode[i], i);
            figs[item].domNode.addEventListener('click',function () {
                figs[item].transform();
            });
            controllerNode[item].addEventListener('click',function () {
                figs[item].transform();
            })
        })(i)
    }


})();