// find moat add and apply the inview_percent function

window.getInviewPercent = function() {
    setInterval(() => {

        var targetDivs = Array.from(document.getElementsByTagName('div'));
        var targetDiv = targetDivs.filter((div) => div.innerText === 'Moat Ad')[0];
        var target = targetDiv.parentNode;

        var boundingRect = target.getBoundingClientRect();
        var { x, y, width, height } = boundingRect;

        var currentWidth = x < 0 ? width + x : width + (width - x);

        var currentHeight = y < 0 ? height + y : height + (height - y);

        var totalArea = width * height;
        var currentArea = currentWidth * currentHeight


        var percent =  (currentArea / totalArea) * 100;
        if (percent < 0) {
            percent = 0;
        } else if (percent > 100) {
            percent = 100;
        }
        var answerSpan = document.getElementById('answer');
        answerSpan.innerText = percent;

    }, 2000)

}


window.log = function() {
    var targetDivs = Array.from(document.getElementsByTagName('div'));
    var targetDiv = targetDivs.filter((div) => div.innerText === 'Moat Ad')[0];
    var target = targetDiv.parentNode;

    var boundingRect = target.getBoundingClientRect();
    var { x, y, width, height } = boundingRect;

    console.log(height, width, x, y);
}