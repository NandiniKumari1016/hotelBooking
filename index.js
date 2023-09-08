document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const roomRate = {
        "Delux Room": 2500,
        "Suite Room": 4000
    };

    const amenitiesRate = {
        "AC": 1000,
        "Locker": 300
    };

    const customerName = document.getElementById("customerName").value;
    const checkinDate = document.getElementById("checkinDate").value;
    const totalDays = parseInt(document.getElementById("totalDays").value);
    const totalPersons = parseInt(document.getElementById("totalPersons").value);
    const roomType = document.getElementById("roomType").value;
    const advanceAmount = parseInt(document.getElementById("advanceAmount").value);

    // Calculate room cost
    const roomCost = roomRate[roomType] * totalDays;

    // Calculate amenities cost based on selected checkboxes
    const amenitiesCheckboxes = document.querySelectorAll('input[name="amenities"]:checked');
    let amenitiesCost = 0;
    amenitiesCheckboxes.forEach(checkbox => {
        amenitiesCost += amenitiesRate[checkbox.value] * totalDays;
    });

    // Calculate total cost and balance
    const totalCost = roomCost + amenitiesCost;
    const balance = totalCost - advanceAmount;

    // Update the displayed cost values
    document.getElementById("roomCost").textContent = roomCost;
    document.getElementById("amenitiesCost").textContent = amenitiesCost;
    document.getElementById("totalCost").textContent = totalCost;
    document.getElementById("balance").textContent = balance;


});
