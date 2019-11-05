// from data.js

var tableData = data;

// Get a reference to the table body

var tbody = d3.select("tbody");

var dateinput= d3.select("#datetime");

var cityInput=d3.select ("#city");

var stateInput=d3.select ("#state");

var countryInput=d3.select ("#country");

var shapeInput=d3.select ("#shape");

var durationInput= d3.select("#durationMinutes");

var searchBtn= d3.select("#filter-btn");



// Console.log the weather data from data.js

console.log(data);



// // Add event listener to the searchbutton, 

searchBtn.on ("click",function (){

    console.log(dateinput.property("value"));

    console.log(cityInput.property("value"));

    console.log(stateInput.property("value"));

    console.log(countryInput.property("value"));

    console.log(shapeInput.property("value"));

    console.log(durationInput.property("value"));

    var filteredData = tableData;

    filteredData=filterTest (dateinput,filteredData);

    filteredData=filterTest (cityInput,filteredData);

    filteredData=filterTest (stateInput,filteredData);

    filteredData=filterTest (countryInput,filteredData);

    filteredData=filterTest (shapeInput,filteredData);

    filteredData=filterTest (durationInput,filteredData);

    populateTable(filteredData);



    

    

    

})

function filterTest (filter_term,arr){

    var userinput = filter_term.property("value")

    var id = filter_term.attr("id")

    if (userinput){ 

        arr = arr.filter (obj=>obj[id]===userinput)

        console.log (arr);

        



    } 

    return arr;

}





// BONUS: Refactor to use Arrow Functions!

function populateTable (data){

    tbody.html ("")

data.forEach((weatherReport) => {

  var row = tbody.append("tr");

  Object.entries(weatherReport).forEach(([key, value]) => {

    var cell = row.append("td");

    cell.text(value);

  });

});

}

populateTable(tableData)

