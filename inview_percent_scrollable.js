window.getInviewPercent = function() {

    // Get the target ad node
    let target = document.querySelector('#sidebar img');
    let container = document.getElementById('sidebar');
    var contHeight = container.clientHeight;
    var contTop = container.scrollTop;

    // Get the node's bounding client rect and extract the needed properties
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

    console.log('TARGET:', y, currentHeight, percent, height);
    console.log('PARENT', contHeight, contTop);

    return percent;

};


// get percent visible in scrollable div
//