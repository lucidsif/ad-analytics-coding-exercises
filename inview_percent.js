window.getInviewPercent = function() {
    setInterval(() => {
        var target = document.querySelector('#sidebar img');
        var boundingRect = target.getBoundingClientRect();
        var { x, y, width, height } = boundingRect;

            var currentWidth = x < 0 ? width + x : width;
            var currentHeight = y < 0 ? height + y : height;

            var totalArea = width * height;
            var currentArea = currentWidth * currentHeight


            // calculate the area of ad being viewed by its x and y
            // a = l * w;
            // percent of area = current area / total area
            // current area = (current width) * (current height)

            var percent =  (currentArea / totalArea) * 100;
            if (percent < 0) {
                percent = 0;
            }
            var answerSpan = document.getElementById('answer');
            answerSpan.innerText = percent;

    }, 2000)

}