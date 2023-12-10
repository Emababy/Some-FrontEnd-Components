// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

// Event listener for the "Get Repos" button click
getButton.addEventListener("click", getRepos);

/**
 * Fetch and display GitHub repositories based on the entered username.
 */
async function getRepos() {
    try {
        // Check if the input field is empty
        if (theInput.value === "") {
            reposData.innerHTML = "<span>Please enter a GitHub username</span>";
        } else {
            // Fetch repositories data from GitHub API
            const response = await fetch(`https://api.github.com/users/${theInput.value}/repos`);
            const repos = await response.json();

            // Check if no repositories were found
            if (repos.length === 0) {
                reposData.innerHTML = "<span>No repositories found</span>";
            } else {
                // Clear existing data
                reposData.innerHTML = "";

                // Iterate through each repository and create HTML elements to display the data
                repos.forEach(repo => {
                    // create the main div:
                    let mainDiv = document.createElement("div");
                    mainDiv.className = 'repo-box';

                    // create repo name:
                    let repoName = document.createElement('h3');
                    repoName.textContent = repo.name;

                    // create repo description:
                    let repoDesc = document.createElement('p');
                    repoDesc.textContent = repo.description || "No description available";

                    // create repo url:
                    let repoUrl = document.createElement('a');
                    repoUrl.textContent = "Visit";
                    repoUrl.href = repo.html_url;
                    repoUrl.target = '_blank';

                    // create stars count span:
                    let starsCount = document.createElement('span');
                    starsCount.textContent = `Stars ${repo.stargazers_count}`;

                    // append elements to the main div:
                    mainDiv.appendChild(repoName);
                    mainDiv.appendChild(repoDesc);
                    mainDiv.appendChild(repoUrl);
                    mainDiv.appendChild(starsCount);

                    // append the main div to container:
                    reposData.appendChild(mainDiv);
                });
            }
        }
    } catch (error) {
        // Handle errors and display a generic error message
        console.error("Error fetching data:", error);
        reposData.innerHTML = "<span>Something went wrong. Please try again later.</span>";
    }
}
