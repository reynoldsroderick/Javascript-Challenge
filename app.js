// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");
var dateinput = d3.select("#datetime");
var cityInput= d3.select ("#city");
var stateInput=d3.select ("#state");
var countryInput=d3.select ("#country");
var shapeInput=d3.select ("#shape")
var durationInput=d3.select ("#durationMinutes");
var searchBtn= d3.select("#filter-btn");

// Console.log the weather data from data.js
console.log(data);

// // Add Event Listener
searchBtn.on ("click", function () {
    console.log(dateinput.property("value"));
    console.log(cityInput.property("value"));
    console.log(stateInput.property)("value");
    console.log(countryInput.property)("value");
    console.log(shapeInput.property("value");
    console.log(durationInput.property)("value");
    var filterData = tableData;
    filteredData = filterTest (dateinput, filteredData);
    filteredData = filterTest (cityInput, filteredData);
    filteredData = filterTest (stateInput,filterData);
    filteredData = filterTest (countryInput, filteredData);
    filteredData = filterTest (shapeInput, filteredData);
    filteredData = filterTest (durationInput,filteredData);
    populationTable(filteredData);

})
function filterTest (filteer_term, arr){
    var userinput = filteer_term.property("value")
    var id = filteer_term.attr("id")
    if (userinput){
      arr = arr.filter (obj=>obj [id]===userinput)
      console.log (arr);



    }
    return arr;
}