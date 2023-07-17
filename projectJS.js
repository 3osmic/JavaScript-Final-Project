function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
    var breakfast = document.getElementById("breakfast").value;
    var snack1 = document.getElementById("snack-1").value;
    var lunch = document.getElementById("lunch").value;
    var snack2 = document.getElementById("snack-2").value;
    var dinner = document.getElementById("dinner").value;
   
    if (validateEmail(email)) {
      var newPage = window.open();
      newPage.document.write("<html><head><title>Meal Plan</title></head><body>");
      newPage.document.write("<h1>Meal Plan for " + name + "</h1>");
      newPage.document.write("<h3>Email: " + email + "</h3>");
      newPage.document.write("<h3>Goal for the Week:</h3>");
      newPage.document.write("<p>" + goal + "</p>");
      newPage.document.write("<h3>Weekly Meal Plan:</h3>");
      newPage.document.write("<p><strong>Monday</strong></p>");
      newPage.document.write("<ul>");
      newPage.document.write("<li>Breakfast: " + breakfast + "</li>");
      newPage.document.write("<li>Snack 1: " + snack1 + "</li>");
      newPage.document.write("<li>Lunch: " + lunch + "</li>");
      newPage.document.write("<li>Snack 2: " + snack2 + "</li>");
      newPage.document.write("<li>Dinner: " + dinner + "</li>");
      newPage.document.write("</ul>");
      // Repeat the above structure for each day of the week (Tuesday - Sunday)
   
      newPage.document.write("</body></html>");
      newPage.document.close();
    } else {
      alert("Enter a valid email address.");
    }
   }
   
   function clearForm() {
    document.getElementById("mealplan").reset();
   }
   
   function validateEmail(email) {
    // Simple email validation using a regular expression
    var emailRegex = /..+@\S+\.\S+/;
    return emailRegex.test(email);
   }