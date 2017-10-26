// find moat add and apply the inview_percent function

window.getInviewPercent = function() {
    setInterval(() => {

        let targetDivs = Array.from(document.getElementsByTagName('div'));
        let targetDiv = targetDivs.filter((div) => div.innerText === 'Moat Ad')[0];
        let target = targetDiv.parentNode;

        let boundingRect = target.getBoundingClientRect();
        let { x, y, width, height } = boundingRect;

        let currentWidth = x < 0 ? width + x : width;
        let currentHeight = y < 0 ? height + y : window.innerHeight - y;

        let totalArea = width * height;
        let currentArea = currentWidth * currentHeight
        let percent =  (currentArea / totalArea) * 100;

        if (percent < 0) {
            percent = 0;
        } else if (percent > 100) {
            percent = 100;
        }

        let answerSpan = document.getElementById('answer');
        answerSpan.innerText = percent;

    }, 2000)

}


// window.log = function() {
//
//     setInterval(() => {
//         let targetDivs = Array.from(document.getElementsByTagName('div'));
//         let targetDiv = targetDivs.filter((div) => div.innerText === 'Moat Ad')[0];
//         let target = targetDiv.parentNode;
//
//         let boundingRect = target.getBoundingClientRect();
//         let { x, y, top, bottom, left, right, height, width } = boundingRect;
//         console.log(top, bottom, height);
//
//     }, 2000);
//
// };