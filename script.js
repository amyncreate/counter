
let count = 0; // start from 0 to match HTML display

// initialize display on load
document.addEventListener("DOMContentLoaded", () => {
    const disp = document.getElementById("display");
    if (disp) disp.innerHTML = count;
});





// Increase counter
function add() {
    count++;
    const disp = document.getElementById("display");
    if (disp) disp.innerHTML = count;
}





// Reset counter and record history
function reset() {
    const lastCount = count;
    // Save the current count before resetting

    // Only record if there was something counted
    if (lastCount > 0) {
        const historyContainer = document.querySelector(".history");
        if (historyContainer) {
            // create a history item element (use a div for more structure)
            const historyItem = document.createElement("div");
            historyItem.className = "history-item";
            historyItem.textContent = `You completed ${lastCount} zikrs`;
            // put newest on top
            historyContainer.prepend(historyItem);
        }
    }





    // Reset the counter display
    count = 0;
    const disp = document.getElementById("display");
    if (disp) disp.innerHTML = count;






         // Add entry to history
        function addHistory(action) {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            const timestamp = new Date().toLocaleTimeString();
            historyItem.textContent = `${timestamp}: ${action}`;
            
            // Add to the top of history
            historyElement.insertBefore(historyItem, historyElement.firstChild);
            
            // Limit history to 10 items
            if (historyElement.children.length > 10) {
                historyElement.removeChild(historyElement.lastChild);
            }
        }
}
