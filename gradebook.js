//todo fetch data from the postgreSQL database (to be implemented later)
function fetchGradeData() {
    //this function will query the postgreSQL database and return grade dataco
    console.log("Fetching Grade Data");
//Create a new request for HTTP data
let xhr = new XMLHttpRequest();
//this is the address on the machine we're asking for data
let apiRoute = "/api/grades";
//When the request changes status, we run tihs anonymouse function
xhr.onreadystatechange = function() {
    let results;
    //check if we're done
    if (xhr readyState === xhr.Done){
        //check if we're successful
        if(xhr.status !== 200){
            console.error('Could not get grades.
                Status: ${xhr.status}');
}
//And then call the function to update the HTML with our datqa

//TODO: populate the table with grade Data
populateGradebook(JSON.parse(xhr.responsetext));
    //This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data", data);
    let tableElm=document.createElement("tr"); //create a table row elememt
    let columns=[];//handy place to stick the columns of information
    columns.name.appenchild(
        //concantentate teh full name: "last_name", "first_name"
        document.createTextNode(assignment.last_name + "," + assignment.first_name)
    );
    columns.grade = document.createElement('td'); //second column will be the grade
    columns.grade.appendchild(
        //Just put the name in text, you could be fancy and figure out letter grades here
        //with eithrer a bunch of conditions, or a javascript switch statement
    )
    //add the table data columns to the table row
    HTMLTableRowElement.appendChild(columns.name);
    HTMLTableRowElement.appendChild(columns.grade);
    //add the row to the table itself to make the data visible
    tableElm.appendChild(row);
});.bind(this); 
xhr.open("get", apiRoute, true);
xhr.send();
}
//Todo remove this
//call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradedata);
//End Remove