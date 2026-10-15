// student information 
//============================

const student = {
    name: "David",
    id: "Eco201",
    programme: "Frontend Development"
};

// Course information 
const courses = [
    { 
    name: "HTML", 
    score: 85
     },
    { 
    name: "CSS", 
    score: 72 
    },
    {
     name: "JavaScript", 
     score: 45
    }
];

// check result
function checkResult(score) {
    if (score >= 50) {
        return "PASS";
    } else {
        return "FAIL";
    }
}

// Calculate Average 
//============================
function calculateAverage(courses) {
    let total = 0;
    
    for (let i = 0; i < courses.length; i++) {
    
        total = total + courses[i].score;
    }
    return total / courses.length;
}

// Display Student information
//==========================
document.getElementById("student-name").textContent = student.name;
document.getElementById("student-id").textContent = student.id;
document.getElementById("student-programme").textContent = student.programme;

// Display Courses
 const courseContainer = document.getElementById("course-container");


for (let i=0; i < courses.length; i++) {

    const course=courses[i];
    
    const result =
    checkResult(course.score);
    
    const courseCard = document.createElement("div");

    courseCard.classList.add ("course-card");
    
    courseCard.innerHTML =
    `
    <h3>${course.name}
    
    </h3>
    
    <p class="score">${course.score}%</p>
    
    <p class="result ${result === "PASS" ? "pass" : "fail"}">
        ${result}
        </p>
        
    `;
    courseContainer.appendChild(courseCard);
    }


// 3. Calculate summary
const average = calculateAverage(courses);

const overallResult = checkResult (average);

//Display Summary 
document.getElementById("total-courses").textContent = courses.length;

document.getElementById("average-score").textContent =average.toFixed(1) + "%";

document.getElementById("overall-result"). textContent= overallResult ;


 
