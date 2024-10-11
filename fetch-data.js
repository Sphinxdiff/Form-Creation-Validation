document.addEventListener('DOMContentLoaded', () => {
    // Initialize the async function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // API URL
        const dataContainer = document.getElementById('api-data');    // Data container element

        try {
            const response = await fetch(apiUrl);  // Fetch data from API
            const users = await response.json();   // Parse the response as JSON
            
            // Clear loading message
            dataContainer.innerHTML = '';

            // Create and append user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
            dataContainer.appendChild(userList);   // Append the list to the container
        } catch (error) {
            // Handle errors and display an error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Call the fetchUserData function when the DOM is fully loaded
    fetchUserData();
});
