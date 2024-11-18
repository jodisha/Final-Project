function generateMealPlan() {
    var email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    var name = document.getElementById('name').value;
    var goal = document.getElementById('goal').value;
    var meals = {};
    var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    days.forEach(function(day) {
        meals[day] = {
            breakfast: document.getElementById(day + '-breakfast').value,
            snack1: document.getElementById(day + '-snack1').value,
            lunch: document.getElementById(day + '-lunch').value,
            snack2: document.getElementById(day + '-snack2').value,
            dinner: document.getElementById(day + '-dinner').value,
        };
    });
    var newWindow = window.open('', '', 'width=800, height=600');
    newWindow.document.write(`
        <html>
        <head><title>Weekly Meal Plan</title></head>
        <body>
        <h1>Meal Plan for ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Weekly Goal:</strong> ${goal}</p>
        <h2>Weekly Meal Plan</h2>
        <pre>
        Monday:
        Breakfast: ${meals.monday.breakfast}
        Snack 1: ${meals.monday.snack1}
        Lunch: ${meals.monday.lunch}
        Snack 2: ${meals.monday.snack2}
        Dinner: ${meals.monday.dinner}

        Tuesday:
        Breakfast: ${meals.tuesday.breakfast}
        Snack 1: ${meals.tuesday.snack1}
        Lunch: ${meals.tuesday.lunch}
        Snack 2: ${meals.tuesday.snack2}
        Dinner: ${meals.tuesday.dinner}

        Wednesday:
        Breakfast: ${meals.wednesday.breakfast}
        Snack 1: ${meals.wednesday.snack1}
        Lunch: ${meals.wednesday.lunch}
        Snack 2: ${meals.wednesday.snack2}
        Dinner: ${meals.wednesday.dinner}

        Thursday:
        Breakfast: ${meals.thursday.breakfast}
        Snack 1: ${meals.thursday.snack1}
        Lunch: ${meals.thursday.lunch}
        Snack 2: ${meals.thursday.snack2}
        Dinner: ${meals.thursday.dinner}

        Friday:
        Breakfast: ${meals.friday.breakfast}
        Snack 1: ${meals.friday.snack1}
        Lunch: ${meals.friday.lunch}
        Snack 2: ${meals.friday.snack2}
        Dinner: ${meals.friday.dinner}

        Saturday:
        Breakfast: ${meals.saturday.breakfast}
        Snack 1: ${meals.saturday.snack1}
        Lunch: ${meals.saturday.lunch}
        Snack 2: ${meals.saturday.snack2}
        Dinner: ${meals.saturday.dinner}

        Sunday:
        Breakfast: ${meals.sunday.breakfast}
        Snack 1: ${meals.sunday.snack1}
        Lunch: ${meals.sunday.lunch}
        Snack 2: ${meals.sunday.snack2}
        Dinner: ${meals.sunday.dinner}
        </pre>
        </body>
        </html>
    `);
    newWindow.document.close();
}
function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
function clearForm() {
    document.getElementById('mealPlanForm').reset();
}
function downloadMealPlan() {
    var email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    var name = document.getElementById('name').value;
    var goal = document.getElementById('goal').value;
    var meals = {};
    var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    days.forEach(function(day) {
        meals[day] = {
            breakfast: document.getElementById(day + '-breakfast').value,
            snack1: document.getElementById(day + '-snack1').value,
            lunch: document.getElementById(day + '-lunch').value,
            snack2: document.getElementById(day + '-snack2').value,
            dinner: document.getElementById(day + '-dinner').value,
        };
    });
    var mealPlanText = `Meal Plan for ${name}\nEmail: ${email}\nGoal: ${goal}\n\n`;
    days.forEach(function(day) {
        mealPlanText += `${day.charAt(0).toUpperCase() + day.slice(1)}:\n`;
        mealPlanText += `Breakfast: ${meals[day].breakfast}\n`;
        mealPlanText += `Snack 1: ${meals[day].snack1}\n`;
        mealPlanText += `Lunch: ${meals[day].lunch}\n`;
        mealPlanText += `Snack 2: ${meals[day].snack2}\n`;
        mealPlanText += `Dinner: ${meals[day].dinner}\n\n`;
    });
    var blob = new Blob([mealPlanText], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mealPlan.txt';
    link.click();
}
