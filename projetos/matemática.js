function showSolution(topic) {
    const solutionElement = document.getElementById(`solution-${topic}`);
    if (solutionElement.style.display === "none") {
        solutionElement.style.display = "block";
    } else {
        solutionElement.style.display = "none";
    }
}