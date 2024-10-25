// JavaScript for basic functionality
function addEntry(){
  //Sample log entry;
  const entry = document.createElement("p");
  entry.textContent = "Workout: 40min treadmil run - ${new Date().toLocalDateString()}`;
  document.getElementById("log-entries").appendChild(entry);
}
