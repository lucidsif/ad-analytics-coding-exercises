window.getInviewTime = function() {
    var time = 0;
    var answerSpan = document.getElementById('answer');
    answerSpan.innerText = time;
    setInterval(() => {

        var target = document.querySelector('#sidebar img');
        var boundingRect = target.getBoundingClientRect();
        var { x, y, width, height } = boundingRect;

        var currentWidth = x < 0 ? width + x : width;
        // var currentWidth = x < 0 ? width + x : width + (width - x);

        var currentHeight = y < 0 ? height + y : height + (height - y);

        var totalArea = width * height;
        var currentArea = currentWidth * currentHeight


        var percent =  (currentArea / totalArea) * 100;
        if (percent < 0) {
            percent = 0;
        } else if (percent > 100) {
            percent = 100;
        }

        if (percent >= 50) {
            time += 100;
        }

    }, 100);


    setInterval(() => {
        answerSpan.innerText = time;
    }, 500);



};
