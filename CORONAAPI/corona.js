let selectedDate = "";
let availableStates = [];

// Fetch states based on the selected date
function fetchStates() {
    selectedDate = document.getElementById('date').value;

    if (!selectedDate) return;

    // Log the selected date
    console.log("Selected Date (input): ", selectedDate);

    // Directly use the selected date as it should match the format YYYY-MM-DD
    const formattedDate = selectedDate; // No need to change the format if it's already in the correct form
    console.log("Formatted Date for API: ", formattedDate);

    fetch('https://api.rootnet.in/covid19-in/stats/history')
        .then(response => response.json())
        .then(data => {
            // Log the response data to inspect the structure
            console.log("API Response: ", data);

            // Find the entry for the selected date (the 'day' value should match the selected date format)
            let historyData = data.data.find(entry => entry.day === formattedDate);
            if (!historyData) {
                alert("No data found for this date.");
                console.log("No data found for this date.");
                return;
            }

            // Extract states for the given date
            availableStates = historyData.regional;

            // Populate the state cards container
            let stateCardsContainer = document.getElementById('stateCardsContainer');
            stateCardsContainer.innerHTML = ''; // Clear previous cards

            availableStates.forEach(stateData => {
                let card = document.createElement('div');
                card.className = 'state-card';
                card.onclick = function () {
                    displayCovidData(stateData);
                };

                // Log the state data to check what fields are available
                console.log("State Data: ", stateData);

                // Safely check for values before displaying them
                let confirmed = stateData.totalConfirmed !== undefined ? stateData.totalConfirmed : 'Data not available';
                let discharged = stateData.discharged !== undefined ? stateData.discharged : 'Data not available'; // Check for `totalDischarged`
                let deaths = stateData.deaths !== undefined ? stateData.deaths : 'Data not available';

                card.innerHTML = `
                    <h3>${stateData.loc}</h3>
                    <p>Confirmed: ${confirmed}</p>
                    <p>Discharged: ${discharged}</p> <!-- Changed here -->
                    <p>Deaths: ${deaths}</p>
                `;
                stateCardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            alert("Error fetching data: " + error);
            console.error("Error details:", error);
        });
}

// Function to display the COVID-19 data for the selected state
function displayCovidData(data) {
    let stateName = document.getElementById('stateName');
    let confirmedDetail = document.getElementById('confirmed');
    let dischargedDetail = document.getElementById('discharged'); // Changed variable name
    let deathsDetail = document.getElementById('deaths');
    let covidDetail = document.getElementById('covidDetail');

    // Log data to check fields in the clicked state
    console.log("State Data (clicked): ", data);

    // Safely check for values before displaying them
    let confirmed = data.totalConfirmed !== undefined ? data.totalConfirmed : 'Data not available';
    let discharged = data.discharged !== undefined ? data.discharged : 'Data not available'; // Changed from 'recovered' to 'discharged'
    let deaths = data.deaths !== undefined ? data.deaths : 'Data not available';

    stateName.textContent = `${data.loc} - ${selectedDate}`;
    confirmedDetail.textContent = `Confirmed: ${confirmed}`;
    dischargedDetail.textContent = `Discharged: ${discharged}`; // Changed here
    deathsDetail.textContent = `Deaths: ${deaths}`;

    covidDetail.style.display = 'block';
}