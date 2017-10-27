window.getInviewTime = function() {
    let answerSpan = document.getElementById('answer');

    if (typeof +answerSpan.innerText !== 'number') {
        console.log('not num');
        return 0;
    }

    let target = document.querySelector('#sidebar img');
    let boundingRect = target.getBoundingClientRect();
    let { x, y, width, height } = boundingRect;

    // If x/left coordinate is less than 0, add to the width of the target
    // Otherwise, return the width of the target
    let currentWidth = x < 0 ? width + x : width;

    // If y/top coordinate is less than 0, add to the height of the target
    // Otherwise, subtract the coordinate from the viewport's height.
    let currentHeight = y < 0 ? height + y : window.innerHeight - y;

    // If currentHeight is negative, it is not in the viewport.
    // Else, if calculated currentheight is greater than target height, set to its height
    if (currentHeight < 0) {
        currentHeight = 0;
    } else if (currentHeight > height) {
        currentHeight = height;
    }

    // Calculate the total area of the target
    let totalArea = width * height;
    // Calculate the visible area of the target
    let currentArea = currentWidth * currentHeight;
    // Calculate the percentage of the visible area
    let percent =  (currentArea / totalArea) * 100;

    console.log(`percent: ${percent}`);
    if (percent >= 50) {
        return +answerSpan.innerText + 500;
    } else {
        return +answerSpan.innerText;
    }

};

// window.getInviewTime = function() {
//     let time = 0;
//     let answerSpan = document.getElementById('answer');
//     answerSpan.innerText = time;
//
//     setInterval(() => {
//
//         let target = document.querySelector('#sidebar img');
//         let boundingRect = target.getBoundingClientRect();
//         let { x, y, width, height } = boundingRect;
//
//         let currentWidth = x < 0 ? width + x : width;
//         let currentHeight = y < 0 ? height + y : window.innerHeight - y;
//
//         let totalArea = width * height;
//         let currentArea = currentWidth * currentHeight;
//         let percent =  (currentArea / totalArea) * 100;
//
//         if (percent < 0) {
//             percent = 0;
//         } else if (percent > 100) {
//             percent = 100;
//         }
//
//         if (percent >= 50) {
//             time += 100;
//         }
//
//     }, 100);
//
//
//     setInterval(() => {
//         answerSpan.innerText = time;
//     }, 500);
//
// };
