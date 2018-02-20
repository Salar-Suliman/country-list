class countriesList {

  constructor() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://restcountries.eu/rest/v2/all", false);
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    this.countries = response;
    console.log(this.countries)
  }

  printCountries() {
    if(document.getElementById("searchcountry").value !== ""){
      this.countries = this.countries.filter(i => i.name === document.getElementById("searchcountry").value)
    }

    var countries = document.getElementById("countries");
    let i;
    let worldpopulation = 7600000000;
    let str = "";
    //this.countries.forEach((country, index) => console.log(country, index))
    if (window.location.search.substr(1) === "sort=asc") {
      this.countries.sort((a, b) => b.population - a.population)
    } else if (window.location.search.substr(1) === "sort=desc") {
      this.countries.sort((a, b) => a.population - b.population)
    }
    for (i = 0; i < this.countries.length; i++) {
      str += ` <tr>
        <td>${i+1}</td>
        <td width= 20%>${this.countries[i].name} </td>
        <td  width= 20%> <img src = " ${this.countries[i].flag} " width= 50%"" >  </td>
          <td>${this.countries[i].capital}</td>
          <td>${this.countries[i].population}</td>
          <td>${this.countries[i].region}</td>

          <td>${ (this.countries[i].population / worldpopulation *100).toFixed(5) } %</td>
        </tr > `


    }

    countries.innerHTML = str;
  }

  //console.log(str)
  searching() {

    var search = document.getElementById("search")

    search.addEventListener('click', (e) => {
      e.preventDefault()
      this.printCountries()
    })

  }
}
var objCountriesList = new countriesList();
objCountriesList.printCountries();
objCountriesList.searching();

