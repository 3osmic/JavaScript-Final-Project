function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    // Monday
    var m_breakfast = document.getElementById("m-breakfast").value;
    var m_snack1 = document.getElementById("m-snack-1").value;
    var m_lunch = document.getElementById("m-lunch").value;
    var m_snack2 = document.getElementById("m-snack-2").value;
    var m_dinner = document.getElementById("m-dinner").value;
    // Tuesday
    var t_breakfast = document.getElementById("t-breakfast").value;
    var t_snack1 = document.getElementById("t-snack-1").value;
    var t_lunch = document.getElementById("t-lunch").value;
    var t_snack2 = document.getElementById("t-snack-2").value;
    var t_dinner = document.getElementById("t-dinner").value;
    // Wednesday
    var w_breakfast = document.getElementById("w-breakfast").value;
    var w_snack1 = document.getElementById("w-snack-1").value;
    var w_lunch = document.getElementById("w-lunch").value;
    var w_snack2 = document.getElementById("w-snack-2").value;
    var w_dinner = document.getElementById("w-dinner").value;
    // Thursday
    var th_breakfast = document.getElementById("th-breakfast").value;
    var th_snack1 = document.getElementById("th-snack-1").value;
    var th_lunch = document.getElementById("th-lunch").value;
    var th_snack2 = document.getElementById("th-snack-2").value;
    var th_dinner = document.getElementById("th-dinner").value;
    // Friday
    var f_breakfast = document.getElementById("f-breakfast").value;
    var f_snack1 = document.getElementById("f-snack-1").value;
    var f_lunch = document.getElementById("f-lunch").value;
    var f_snack2 = document.getElementById("f-snack-2").value;
    var f_dinner = document.getElementById("f-dinner").value;
    // Saturday
    var s_breakfast = document.getElementById("s-breakfast").value;
    var s_snack1 = document.getElementById("s-snack-1").value;
    var s_lunch = document.getElementById("s-lunch").value;
    var s_snack2 = document.getElementById("s-snack-2").value;
    var s_dinner = document.getElementById("s-dinner").value;
    // Sunday
    var su_breakfast = document.getElementById("su-breakfast").value;
    var su_snack1 = document.getElementById("su-snack-1").value;
    var su_lunch = document.getElementById("su-lunch").value;
    var su_snack2 = document.getElementById("su-snack-2").value;
    var su_dinner = document.getElementById("su-dinner").value;
    const mealPlanFormHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${name}'s Meal Plan</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
      <body>
        <header>
          <h1>${name}'s Meal Plan</h1>
          <p>Email: ${email}</p>
          <p>Goal: ${goal}</p>
        </header>
        <br>
        <br>
        <h3 id="day">Monday</h3>
        <p>Breakfast: ${m_breakfast}</p>
        <p>Snack 1: ${m_snack1}</p>
        <p>Lunch: ${m_lunch}</p>
        <p>Snack 2: ${m_snack2}</p>
        <p>Dinner: ${m_dinner}</p>
        <br>
        <br>
        <h3 id="day">Tuesday</h3>
        <p>Breakfast: ${t_breakfast}</p>
        <p>Snack 1: ${t_snack1}</p>
        <p>Lunch: ${t_lunch}</p>
        <p>Snack 2: ${t_snack2}</p>
        <p>Dinner: ${t_dinner}</p>
        <br>
        <br>
        <h3 id="day">Wednesday</h3>
        <p>Breakfast: ${w_breakfast}</p>
        <p>Snack 1: ${w_snack1}</p>
        <p>Lunch: ${w_lunch}</p>
        <p>Snack 2: ${w_snack2}</p>
        <p>Dinner: ${w_dinner}</p>
        <br>
        <br>
        <h3 id="day">Thursday</h3>
        <p>Breakfast: ${th_breakfast}</p>
        <p>Snack 1: ${th_snack1}</p>
        <p>Lunch: ${th_lunch}</p>
        <p>Snack 2: ${th_snack2}</p>
        <p>Dinner: ${th_dinner}</p>
        <br>
        <br>
        <h3 id="day">Friday</h3>
        <p>Breakfast: ${f_breakfast}</p>
        <p>Snack 1: ${f_snack1}</p>
        <p>Lunch: ${f_lunch}</p>
        <p>Snack 2: ${f_snack2}</p>
        <p>Dinner: ${f_dinner}</p>
        <br>
        <br>
        <h3 id="day">Saturday</h3>
        <p>Breakfast: ${s_breakfast}</p>
        <p>Snack 1: ${s_snack1}</p>
        <p>Lunch: ${s_lunch}</p>
        <p>Snack 2: ${s_snack2}</p>
        <p>Dinner: ${s_dinner}</p>
        <br>
        <br>
        <h3 id="day">Sunday</h3>
        <p>Breakfast: ${su_breakfast}</p>
        <p>Snack 1: ${su_snack1}</p>
        <p>Lunch: ${su_lunch}</p>
        <p>Snack 2: ${su_snack2}</p>
        <p>Dinner: ${su_dinner}</p>

        <div class="button-group">
          <button onclick="window.print()">Print/Download</button>
        </div>

      </body>
      </html>
    `;
   
   function clearForm() {
    document.getElementById("mealplan").reset();
   }

   const newWindow = window.open();
    newWindow.document.write(mealPlanFormHTML);
    newWindow.document.close();

  }
   
   function validateEmail(email) {
    // Email Validation
    var emailRegex = /..+@\S+\.\S+/;
    return emailRegex.test(email);
   }