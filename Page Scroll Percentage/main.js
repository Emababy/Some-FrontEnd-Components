/**
 * Calculate the scroll progress and update the width of the specified element accordingly.
 */
document.addEventListener("DOMContentLoaded", function () {
    // Select the element with class "scroller"
    let element = document.querySelector(".scroller");

    // Calculate the total scrollable height (entire content & padding)
    let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Event listener to update the width of the element on scroll
    window.addEventListener("scroll", () => {
        // Get the current scroll position from the top of the document
        let scrollTop = document.documentElement.scrollTop;

        // Update the width of the element based on scroll progress
        updateScrollerWidth(element, scrollTop, totalHeight);
    });
});

/**
 * Update the width of the specified element based on scroll progress.
 * @param {HTMLElement} element - The element to update.
 * @param {number} scrollTop - The current scroll position from the top of the document.
 * @param {number} totalHeight - The total scrollable height (entire content & padding).
 */
function updateScrollerWidth(element, scrollTop, totalHeight) {
    // Calculate the width percentage based on scroll progress
    let widthPercentage = (scrollTop / totalHeight) * 100;

    // Set the width of the element
    element.style.width = `${widthPercentage}%`;
}

// Uncomment the following lines for debugging or checking scroll-related values:
// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);
// console.log(totalHeight);
// console.log(document.documentElement.scrollTop);
