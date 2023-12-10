/**
 * Document ready event listener ensures the DOM is fully loaded before executing the script.
 */
document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with class "num" inside the element with class "nums"
    let numbers = document.querySelectorAll(".nums .num");

    // Select the element with class "three"
    let section = document.querySelector(".three");

    // Variable to track whether the counting has started
    let started = false; // Function not started yet

    // Event listener to trigger counting when the user scrolls
    window.onscroll = function() {
        // Check if the user has scrolled past the top of the ".three" section
        if (window.scrollY >= section.offsetTop) {
            // Check if counting has not started yet
            if (!started) {
                // Start counting for each ".num" element
                numbers.forEach((number) => startCount(number));
            }
            // Set started to true to prevent re-triggering counting
            started = true;
        }
    };

    /**
     * Function to start counting for a given element.
     * @param {HTMLElement} element - The element to count.
     */
    function startCount(element) {
        // Get the goal value from the "data-goal" attribute and convert it to an integer
        let goal = parseInt(element.getAttribute("data-goal"));

        // Set up an interval to increment the value until the goal is reached
        let counter = setInterval(() => {
            // Get the current value of the element and convert it to an integer
            let currentValue = parseInt(element.textContent);

            // Increment the value by 1
            element.textContent = currentValue + 1;

            // Check if the goal is reached
            if (parseInt(element.textContent) === goal) {
                // Clear the interval to stop counting
                clearInterval(counter);
            }
        }, 100 / goal); // Adjust the interval duration for smoother counting
    }
});
