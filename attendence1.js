let tag1=document.querySelector('#john-attendance');
let tag2=document.querySelector('#jane-attendance');
let tag3=document.querySelector('#tom-attendance');
let tag4=document.querySelector('#Raju-attendance');
function markAttendance() {
    const attendanceInput = document.getElementById("attendance").value;
    const attendanceArr = attendanceInput.split(",").map((str) => str.trim());
  
    // Check if the number of entries matches the number of students
    if (attendanceArr.length !== 4) {
      alert("Invalid attendance! Please enter attendance for all students.");
      return;
    }
  
    //Check if the values are valid (either "Present" or "Absent")
    if (!attendanceArr.every((value) => value === "Present" || value === "Absent" || value === "Late"))
       {
      alert("Invalid attendance! Please enter attendance for all students.");
      return;
    }
    localStorage.setItem('john',attendanceArr[0]);
    localStorage.setItem('jane',attendanceArr[1]);
    localStorage.setItem('tom',attendanceArr[2]);
    localStorage.setItem('raju',attendanceArr[3]);
    // Update attendance in the table
    
   
    tag1.innerText=window.localStorage.getItem('john');
    tag2.innerText= window.localStorage.getItem('jane');
    tag3.innerText = window.localStorage.getItem('tom');
    tag4.innerText = window.localStorage.getItem('raju');
}
