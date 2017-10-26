window.getInviewPercent = function() {
    setInterval(() => {

        let target = document.querySelector('#sidebar img');

        let boundingRect = target.getBoundingClientRect();
        let { x, y, width, height } = boundingRect;

        let currentWidth = x < 0 ? width + x : width;
        let currentHeight = y < 0 ? height + y : window.innerHeight - y;

        let totalArea = width * height;
        let currentArea = currentWidth * currentHeight;
        let percent =  (currentArea / totalArea) * 100;

        if (percent < 0) {
            percent = 0;
        } else if (percent > 100) {
            percent = 100;
        }

        let answerSpan = document.getElementById('answer');
        answerSpan.innerText = percent;

    }, 2000)

};