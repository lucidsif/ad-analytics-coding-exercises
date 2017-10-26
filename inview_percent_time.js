window.getInviewTime = function() {
    let time = 0;
    let answerSpan = document.getElementById('answer');
    answerSpan.innerText = time;

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

        if (percent >= 50) {
            time += 100;
        }

    }, 100);


    setInterval(() => {
        answerSpan.innerText = time;
    }, 500);


};
