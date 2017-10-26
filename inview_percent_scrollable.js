window.getInviewPercent = function() {
    setInterval(() => {

        // Get the target ad node
        let target = document.querySelector('#sidebar img');
        // Get the node's bounding client rect and extract the needed properties
        let boundingRect = target.getBoundingClientRect();
        let { x, y, width, height } = boundingRect;

        // If x/left coordinate is less than 0, add to the width of the target
        // Otherwise, return the width of the target
        let currentWidth = x < 0 ? width + x : width;
        // If y/top coordinate is less than 0, add to the height of the target
        // Otherwise, subtract the coordinate from the viewport's height
        let currentHeight = y < 0 ? height + y : window.innerHeight - y;

        // Calculate the total area of the target
        let totalArea = width * height;
        // Calculate the visible area of the target
        let currentArea = currentWidth * currentHeight;
        // Calculate the percentage of the visible area
        let percent =  (currentArea / totalArea) * 100;
        console.log(percent);

        // If percent if less than 0, target is below the viewport
        // If percent is greater than 100, target is fully visible in the viewport
        if (percent < 0) {
            percent = 0;
        } else if (percent > 100) {
            percent = 100;
        }

        // Dynamically update the percentage on the DOM
        let answerSpan = document.getElementById('answer');
        answerSpan.innerText = percent;

    }, 2000)

};