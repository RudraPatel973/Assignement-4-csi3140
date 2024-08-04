document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const code = document.getElementById('code').value;
            // Handle login logic here
            window.location.href = `patient.html?name=${name}&code=${code}`;
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const code = urlParams.get('code');

    if (name && code) {
        // Fetch patient wait time from the server
        fetch(`server/patient.php?name=${name}&code=${code}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('waitTime').textContent = data.wait_time;
            });
    }

    const patientTable = document.getElementById('patientTable');
    if (patientTable) {
        // Fetch patient data for admin
        fetch('server/admin.php')
            .then(response => response.json())
            .then(data => {
                const tbody = patientTable.querySelector('tbody');
                data.forEach(patient => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${patient.name}</td>
                        <td>${patient.code}</td>
                        <td>${patient.severity}</td>
                        <td>${patient.wait_time}</td>
                    `;
                    tbody.appendChild(row);
                });
            });
    }
});
