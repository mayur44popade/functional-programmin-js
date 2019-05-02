const volcanoes = require('./volcano.json');

class VolcanoAnalyzer {
  eruptedInEighties() {
    // TODO: return the volcanoes that erupted in the 1980s.
    let result;
    result = volcanoes.filter(function(input){
      return 1980 <= input.Year && input.Year < 1990;
    });
    console.log(result);
  }

  highVEI() {
    // TODO: return an array of the names of volcanoes that have a VEI of 6 or higher.
    let result;
    result = volcanoes.filter(function(input){
      return input.VEI >= 6;
    });
    result = result.map(x => x.Name);
    console.log(result);
  }

  mostDeadly() {
    // TODO: return the volcano with the highest recorded deaths.
    let result;
    result = volcanoes.reduce(function(prev, curr){
      return (prev.DEATHS > curr.DEATHS) ? prev : curr;
    });
    console.log(result);
  }

  causedTsunami() {
    // TODO: return the percentage of volcanoes that caused tsunamis.
    let result;
    let total = volcanoes.length;
    let temp = volcanoes.filter(function(input){
      return input.TSU === "TSU";
    });
    result = temp.length / total * 100;
    console.log(result);
  }

  mostCommonType() {
    // TODO: return the most common type of volcano in the list
    let result;
    let arr = volcanoes.map(x => x.Type);
    let map = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    //console.log(map);
    result = Object.keys(map).reduce(function(prev, curr){
      return map[prev] > map[curr] ? prev : curr;
    });
    console.log(result);
  }

  eruptionsByCountry(country) {
    // TODO: return the number of eruptions when supplied a country as an argument
    let result;
    result = volcanoes.reduce(function(input){
      return input.Country == country;
    });
    result = result.length;
    console.log(result);
  }

  averageElevation() {
    // TODO: return the average elevation of all volcanoes
    let result;
    result = volcanoes.map(x => x.Elevation);
    let temp = result.length;
    result = result.reduce((a, b) => a + b);
    result = result/temp;
    console.log(result.toFixed(2));
  }

  volcanoTypes() {
    // TODO: return an array of types of volcanoes
    let result;
    result = volcanoes.map(x => x.Type);
    result = result.filter((value, index, self) => self.indexOf(value) === index);
    console.log(result);
  }

  percentNorth() {
    // TODO: return the percentage of eruptions that occurred in the Northern hemisphere
    let result;
    result = volcanoes.filter(function(input){
      return input.Latitude > 0;
    })
    result = result.length / volcanoes.length * 100;
    console.log(result);
  }

  manyFilters() {
    // TODO: return names of eruptions that occurred after 1800, that did not cause a tsunami, happened in the Southern hemisphere, and had a VEI of 5.
    let result;
    result = volcanoes.filter(function(input){
      return input.Year > 1800 && input.TSU == "" && input.Latitude < 0 && input.VEI == 5;
    });
    result = result.map(x => x.Name);
    console.log(result);
  }

  elevatedVolcanoes(elevation) {
    // TODO: return names of eruptions that occurred at or above an elevation passed as an argument
    let result;
    result = volcanoes.filter(function(input){
      return input.Elevation >= elevation;
    });
    result = result.map(x => x.Name);
    console.log(result);
  }

  topAgentsOfDeath() {
    // TODO: return the unique agents of death in the top ten deadliest eruptions
    let result;
    // function compareBasedOnNumberOfDeaths(a, b){
    //   if(a.DEATHS > b.DEATHS){
    //     return -1;
    //   }else if(a.DEATHS < b.DEATHS){
    //     return 1;
    //   }else{
    //     return 0;
    //   }
    // }
    // let tempVolcanoes = volcanoes;
    // tempVolcanoes.sort(compareBasedOnNumberOfDeaths);
    // let topTenVolcanoes = tempVolcanoes.slice(0, 10);
    // //console.log(topTenVolcanoes.length);
    // //Get all the agents
    // let allAgents = topTenVolcanoes.map((x) => {
    //   if(x.Agent == ''){
    //
    //   }else if(x.Agent.length != 1){
    //     let splitArray = x.Agent.split(',');
    //     //console.log("Split array is: ", splitArray);
    //     return splitArray;
    //   }else if(x.Agent.length == 1){
    //     return x.Agent;
    //   }
    // });
    // //console.log("All agents is: ", allAgents);
    // //Filter to remove undefined
    // allAgents = allAgents.filter(function(agent){
    //   if(agent != undefined){
    //     return agent;
    //   }
    // });
    // //console.log("All agents is: ", allAgents);
    // //Flatten arrays
    // var flatArray = allAgents.reduce((a, b) => a.concat(b), []);
    // //console.log(flatArray);
    // //Select unique elements
    // result = flatArray.filter(function(value, index, self){
    //   return self.indexOf(value) === index;
    // });
    console.log(result);
  }
}

module.exports = VolcanoAnalyzer;

var obj = new VolcanoAnalyzer();
obj.topAgentsOfDeath();
