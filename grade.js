//Lynn(Guo Linglin) 223190703
document.addEventListener('DOMContentLoaded', function() {  
    var needHelpYes = document.getElementById('needHelpYes');  
    needHelpYes.addEventListener('change', function() {  
        if (this.checked) {  
            document.getElementById('studentInfo').style.display = 'block';  
        }  
    });  
});  
// Function to calculate grades  
function calculateGrades() {  
    var studentInfo = document.getElementById('studentInfo');  
    var result = document.getElementById('result');  
    var nameInput = document.getElementById('name');  
    var grades = [  
        parseFloat(document.getElementById('grade1').value),  
        parseFloat(document.getElementById('grade2').value),  
        parseFloat(document.getElementById('grade3').value),  
        parseFloat(document.getElementById('grade4').value)  
    ]; 
    // Use the reduce method to calculate the total grade 
    var total = grades.reduce(function(sum, grade) {  
        return sum + (isNaN(grade) ? 0 : grade); // If the grade is not a number, treat it as 0, otherwise add it to the sum 
    }, 0);  
    var average = total / grades.filter(function(grade) {  
        return !isNaN(grade);  
    }).length;  
      
    result.innerHTML = ''; // Clear previous results  
    result.innerHTML += 'Total: ' + total + '<br>'; // Display the total grade  
    result.innerHTML += 'Average: ' + average.toFixed(2) + '<br>';  
    result.innerHTML += 'Thank you, ' + nameInput.value + ', for using the program.';  
}