import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoringDataService {

  allData: any = [];

    scores: any = [];
  
    beachFlags: any = [];
    beachFlagsAdults: any = [{'competitors': [], 'genders': []}];
    beachFlagsJR: any = [{'competitors': [], 'genders': []}];
  
    ironguard: any = [];
    ironguardJR: any = [{'competitors': [], 'genders': []}];
    ironguardAdults: any = [{'competitors': [], 'genders': []}];
  
    boardRace: any = [];
    boardRaceJR: any = [{'competitors': [], 'genders': []}];
    boardRaceAdults: any = [{'competitors': [], 'genders': []}];
  
    runSwimRun: any = [];
    runSwimRunJR: any = [{'competitors': [], 'genders': []}];
    runSwimRunAdults: any = [{'competitors': [], 'genders': []}];
  
    surfSwimRace: any = [];
    surfSwimRaceJR: any = [{'competitors': [], 'genders': []}];
    surfSwimRaceAdults: any = [{'competitors': [], 'genders': []}];
  
    rescueRaceJG: any = [{'competitors': [], 'genders': []}];
    rescueRaceU19: any = [{'competitors': [], 'genders': []}];
    
    runRelay: any = [{'competitors': [], 'genders': []}];
    beachRun: any = [{'competitors': [], 'genders': []}];
    surfRace: any = [{'competitors': [], 'genders': []}];
    surfSkiRace: any = [{'competitors': [], 'genders': []}];
    americanIronperson: any = [{'competitors': [], 'genders': []}];
    ironperson: any = [{'competitors': [], 'genders': []}];
    surfBoatRace: any = [{'competitors': [], 'genders': []}];
    rescueRace: any = [{'competitors': [], 'genders': []}];
    swimRelay: any = [{'competitors': [], 'genders': []}];
    distanceRun: any = [{'competitors': [], 'genders': []}];
    ironpersonU19: any = [{'competitors': [], 'genders': []}];
    surfSkiU19: any = [{'competitors': [], 'genders': []}];
  
    competitors: any = [];
  
    individualMen: any = [];
    individualWomen: any = [];
  
    chapterNames: any = [];
    regionNames: any = [];
    chapterData: any = [];
    aTeam: any = [];
    bTeam: any = [];
    openTeam: any = [];
    openRegion: any = [];

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    return this.http.get('https://api.mongolab.com/api/1/databases/vista_apps/collections/uslaScores?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB')
    .subscribe(data => {
      this.eventSection(data);
    });
  }

  eventSection(data: any) {
    this.allData = data;
    
    //var openEvents: any = [];
    var compIds: any = [];
    var chapNames: any = [];

    for (var x = 0; x < data.length; x++) {

      if (data[x].regionName !== "International") {
          

        if(!chapNames.includes(data[x].chapter)) {
          chapNames.push(data[x].chapter);
          this.chapterNames.push({ 'chapter': data[x].chapter, 'type': data[x].chapterType });
        }

        if(!this.regionNames.includes(data[x].regionName)) {
          this.regionNames.push(data[x].regionName);
        }

        if(!compIds.includes(data[x].id)) {
          compIds.push(data[x].id);
          this.competitors.push(data[x]);
        }

        if (!this.beachFlagsJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
          this.beachFlagsJR[0]['genders'].push(data[x].eventGender.toUpperCase());
        }

        if (data[x].eventGroup == "Beach Flags") {
          
          this.beachFlags.push(data[x]);
          if(data[x].ageGroupName == "") {

            this.beachFlagsJR[0]['competitors'].push(data[x]);
            if (!this.beachFlagsJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.beachFlagsJR[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          } else {

            this.beachFlagsAdults[0]['competitors'].push(data[x]);
            if (!this.beachFlagsAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.beachFlagsAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          }

        } else if (data[x].eventGroup == "Rescue Race-JG") {
          
          this.rescueRaceJG[0]['competitors'].push(data[x]);
          if (!this.rescueRaceJG[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.rescueRaceJG[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Rescue Race-U19") {

          this.rescueRaceU19[0]['competitors'].push(data[x]);
          if (!this.rescueRaceU19[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.rescueRaceU19[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Ironguard") {
          
          this.ironguard.push(data[x]);

          if(data[x].ageGroupName == "") {

            this.ironguardJR[0]['competitors'].push(data[x]);
            if (!this.ironguardJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.ironguardJR[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          } else {

            this.ironguardAdults[0]['competitors'].push(data[x]);
            if (!this.ironguardAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.ironguardAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          }

        } else if (data[x].eventGroup == "Board Race") {

          this.boardRace.push(data[x]);

          if(data[x].ageGroupName == "") {

            this.boardRaceJR[0]['competitors'].push(data[x]);
            if (!this.boardRaceJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.boardRaceJR[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          } else {

            this.boardRaceAdults[0]['competitors'].push(data[x]);
            if (!this.boardRaceAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.boardRaceAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          }

        } else if (data[x].eventGroup == "4 x 100 Run Relay") {

          this.runRelay[0]['competitors'].push(data[x]);
          if (!this.runRelay[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.runRelay[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "2K Beach Run") {

          this.beachRun[0]['competitors'].push(data[x]);
          if (!this.beachRun[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.beachRun[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Surf Race") {

          this.surfRace[0]['competitors'].push(data[x]);
          if (!this.surfRace[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.surfRace[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Run-Swim-Run") {

          this.runSwimRun.push(data[x]);

          if(data[x].ageGroupName == "") {

            this.runSwimRunJR[0]['competitors'].push(data[x]);
            if (!this.runSwimRunJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.runSwimRunJR[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          } else {

            this.runSwimRunAdults[0]['competitors'].push(data[x]);
            if (!this.runSwimRunAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.runSwimRunAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          }

        } else if (data[x].eventGroup == "Surf Ski Race") {

          this.surfSkiRace[0]['competitors'].push(data[x]);
          if (!this.surfSkiRace[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.surfSkiRace[0]['genders'].push(data[x].eventGender.toUpperCase());
          }
          
        } else if (data[x].eventGroup == "American Ironperson") {
          
          this.americanIronperson[0]['competitors'].push(data[x]);
          if (!this.americanIronperson[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.americanIronperson[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Ironperson") {

          this.ironperson[0]['competitors'].push(data[x]);
          if (!this.ironperson[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.ironperson[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Surf Boat Race") {

          this.surfBoatRace[0]['competitors'].push(data[x]);
          if (!this.surfBoatRace[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.surfBoatRace[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Rescue Race") {

          this.rescueRace[0]['competitors'].push(data[x]);
          if (!this.rescueRace[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.rescueRace[0]['genders'].push(data[x].eventGender.toUpperCase());
          }
          
        } else if (data[x].eventGroup == "Swim Relay") {

          this.swimRelay[0]['competitors'].push(data[x]);
          if (!this.swimRelay[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.swimRelay[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Distance Run") {

          this.distanceRun[0]['competitors'].push(data[x]);
          if (!this.distanceRun[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.distanceRun[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Surf Swim Race") {

          this.surfSwimRace.push(data[x]);

          if(data[x].ageGroupName == "") {

            this.surfSwimRaceJR[0]['competitors'].push(data[x]);
            if (!this.surfSwimRaceJR[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.surfSwimRaceJR[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          } else {

            this.surfSwimRaceAdults[0]['competitors'].push(data[x]);
            if (!this.surfSwimRaceAdults[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
              this.surfSwimRaceAdults[0]['genders'].push(data[x].eventGender.toUpperCase());
            }

          }

        } else if (data[x].eventGroup == "Ironperson-U19") {

          this.ironpersonU19[0]['competitors'].push(data[x]);
          if (!this.ironpersonU19[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.ironpersonU19[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } else if (data[x].eventGroup == "Surf Ski-U19") {

          this.surfSkiU19[0]['competitors'].push(data[x]);
          if (!this.surfSkiU19[0]['genders'].includes(data[x].eventGender.toUpperCase())) {
            this.surfSkiU19[0]['genders'].push(data[x].eventGender.toUpperCase());
          }

        } 
      }

      /*if (data[x].eventGender == 'O'){
        if (!openEvents.includes(data[x].eventGroup)) {
          openEvents.push(data[x].eventGroup);
        }
        
      }*/
    }

    //console.log(this.beachFlagsAdults);
    //console.log(this.surfBoatRace);
    //console.log(openEvents);
    //console.log(this.swimRelay);


    this.popIndividualScores();

    this.popTeamScores();

  }

  popTeamScores() {
    //console.log(this.chapterNames);
    for (var x = 0; x < this.chapterNames.length; x++) {
      var points: any = 0;
      var count = 0;
      var totalReg = 0;
      var type = '';
      var chapter = '';
      var chapIds: any = [];

      for (var y = 0; y < this.allData.length; y++) {
        if(this.chapterNames[x].chapter == this.allData[y].chapter) {
          if(this.allData[y].ageGroupName != "") {
            if (count == 0) {
              chapter = this.chapterNames[x].chapter;
              type = this.allData[y].chapterType;
            }

            if(!chapIds.includes(this.allData[y].id)) {
              chapIds.push(this.allData[y].id);
            }

            count++;
            points = parseFloat(points) + parseFloat(this.allData[y].points);

          }
        }

      }

      totalReg = chapIds.length;

      var chapData = { 'chapter': chapter, 'points': points, 'totalReg': totalReg, 'chapterType': type };

      if (type == 'A') {
        this.aTeam.push(chapData);
      } else if (type == 'B') {
        this.bTeam.push(chapData);
      }

    }
    
    this.aTeam.sort((item1: any, item2: any) => { 
      return this.orderByComparator(item2['points'], item1['points']);
    });

    var rank = 1;
    var addRank = 0;
    
    for (var a = 0; a < this.aTeam.length; a++) {
      if (a == 0) {
        this.aTeam[a].rank = rank;
      } else {
        if (this.aTeam[(a - 1)].points == this.aTeam[a].points) {
          this.aTeam[a].rank = rank;
          addRank++;
        } else {
          rank++;
          rank = rank + addRank;
          this.aTeam[a].rank = rank;
          addRank = 0;
        }
      }
      
    }

    this.bTeam.sort((item1: any, item2: any) => { 
      return this.orderByComparator(item2['points'], item1['points']);
    });

    rank = 1;
    addRank = 0;
    
    for (var b = 0; b < this.bTeam.length; b++) {
      if (b == 0) {
        this.bTeam[b].rank = rank;
      } else {
        if (this.bTeam[(b - 1)].points == this.bTeam[b].points) {
          this.bTeam[b].rank = rank;
          addRank++;
        } else {
          rank++;
          rank = rank + addRank;
          this.bTeam[b].rank = rank;
          addRank = 0;
        }
      }
      
    }

    for (var z = 0; z < this.chapterNames.length; z++) {
      var points: any = 0;
      var count = 0;
      var totalReg = 0;
      var type = '';
      var chapter = '';
      var chapIds: any = [];

      for (var n = 0; n < this.allData.length; n++) {
        if(this.chapterNames[z].chapter == this.allData[n].chapter) {
          if(this.allData[n].ageGroupName == "OPEN" || this.allData[n].ageGroupName == "OPEN 3+") {
            if (count == 0) {
              chapter = this.chapterNames[z].chapter;
              type = this.allData[n].chapterType;
            }

            if(!chapIds.includes(this.allData[n].id)) {
              chapIds.push(this.allData[n].id);
            }

            count++;
            points = parseFloat(points) + parseFloat(this.allData[n].points);

          }
        }

      }

      if (chapter != "" && points != 0) {
        totalReg = chapIds.length;

        var chapData = { 'chapter': chapter, 'points': points, 'totalReg': totalReg, 'chapterType': type };

        this.openTeam.push(chapData);
      }

    }

    this.openTeam.sort((item1: any, item2: any) => { 
      return this.orderByComparator(item2['points'], item1['points']);
    });

    rank = 1;
    addRank = 0;
    
    for (var f = 0; f < this.openTeam.length; f++) {
      if (f == 0) {
        this.openTeam[f].rank = rank;
      } else {
        if (this.openTeam[(f - 1)].points == this.openTeam[f].points) {
          this.openTeam[f].rank = rank;
          addRank++;
        } else {
          rank++;
          rank = rank + addRank;
          this.openTeam[f].rank = rank;
          addRank = 0;
        }
      }
      
    }

    for (var r = 0; r < this.regionNames.length; r++) {
      var points: any = 0;
      var count = 0;
      var totalReg = 0;
      var region = '';
      var regIds:any = [];

      for (var p = 0; p < this.allData.length; p++) {
        if(this.regionNames[r] == this.allData[p].regionName) {
          if(this.allData[p].ageGroupName !== "") {
            if (count == 0) {
              region = this.regionNames[r];
              //console.log(region);
            }

            if(!regIds.includes(this.allData[p].id)) {
              regIds.push(this.allData[p].id);
            }

            count++;
            points = parseFloat(points) + parseFloat(this.allData[p].points);

          }
        }

      }

      totalReg = regIds.length;

      var regData = { 'region': region, 'points': points, 'totalReg': totalReg };

      this.openRegion.push(regData);
    }

    this.openRegion.sort((item1: any, item2: any) => { 
      return this.orderByComparator(item2['points'], item1['points']);
    });

    rank = 1;
    addRank = 0;
    
        for (var p = 0; p < this.openRegion.length; p++) {
          if (p == 0) {
            this.openRegion[p].rank = rank;
          } else {
            if (this.openRegion[(p - 1)].points == this.openRegion[p].points) {
              this.openRegion[p].rank = rank;
              addRank++;
            } else {
              rank++;
              rank = rank + addRank;
              this.openRegion[p].rank = rank;
              addRank = 0;
            }
          }
          
        }    
    //console.log(this.openTeam);

  }

  popIndividualScores() {
    for( var x = 0; x < this.competitors.length; x++) {
      var points: any = 0;
      var count = 0;
      var first = '';
      var last = '';
      var chapter = '';
      var gender = '';
      
      for(var y = 0; y < this.allData.length; y++) {
        if (this.allData[y].id == this.competitors[x].id) {
          if(this.allData[y].ageGroupName == "OPEN" || this.allData[y].ageGroupName == "OPEN 3+") {
            if (count == 0) {
              first = this.allData[y].first;
              last = this.allData[y].last;
              chapter = this.allData[y].chapter;
              gender = this.allData[y].gender;
            }
            count++;
            points = parseFloat(points) + parseFloat(this.allData[y].points);
          
          }

        }
      }

      var compData = { 'id': this.competitors[x].id, 'first': first, 'last': last, 'chapter': chapter, 'gender': gender, 'points': points };

      if (gender.toUpperCase() == 'M') {
        this.individualMen.push(compData);
      }

      if (gender.toUpperCase() == 'F') {
        this.individualWomen.push(compData);
      }

    }

    this.individualMen.sort((item1: any, item2: any) => { 
      return this.orderByComparator(item2['points'], item1['points']);
    });
    
    var rank = 1;
    var addRank = 0;

    for (var g = 0; g < this.individualMen.length; g++) {
      if (g == 0) {
        this.individualMen[g].rank = rank;
      } else {
        if (this.individualMen[(g - 1)].points == this.individualMen[g].points) {
          this.individualMen[g].rank = rank;
          addRank++;
        } else {
          rank++;
          rank = rank + addRank;
          this.individualMen[g].rank = rank;
          addRank = 0;
        }
      }
      
    }

    this.individualWomen.sort((item1: any, item2: any) => { 
      return this.orderByComparator(item2['points'], item1['points']);
    });
    
    rank = 1;
    addRank = 0;

    for (var g = 0; g < this.individualWomen.length; g++) {
      if (g == 0) {
        this.individualWomen[g].rank = rank;
      } else {
        if (this.individualWomen[(g - 1)].points == this.individualWomen[g].points) {
          this.individualWomen[g].rank = rank;
          addRank++;
        } else {
          rank++;
          rank = rank + addRank;
          this.individualWomen[g].rank = rank;
          addRank = 0;
        }
      }
      
    }

  }

  orderByComparator(a:any, b:any):number{
    
      if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
        //Isn't a number so lowercase the string to properly compare
        if(a.toLowerCase() < b.toLowerCase()) return -1;
        if(a.toLowerCase() > b.toLowerCase()) return 1;
      }
      else{
        //Parse strings as numbers to compare properly
        if(parseFloat(a) < parseFloat(b)) return -1;
        if(parseFloat(a) > parseFloat(b)) return 1;
        }
  
      return 0; //equal each other
  }

  getATeam() {
    return this.aTeam.slice();
  }

  getBTeam() {
    return this.bTeam.slice();
  }

  getOpenTeam() {
    return this.openTeam.slice();
  }

  getRegionData() {
    return this.openRegion.slice();
  }

  getCompetitors() {
    return this.competitors.slice();
  }

  getIndividualMen() {
    return this.individualMen.slice();
  }

  getIndividualWomen() {
    return this.individualWomen.slice();
  }

  getBeachFlagsAdults() {
    return this.beachFlagsAdults.slice();
  }

  getBeachFlagsJR() {
    return this.beachFlagsJR.slice();
  }

  getRescueRaceJG() {
    return this.rescueRaceJG.slice();
  }

  getRescueRaceU19() {
    return this.rescueRaceU19.slice();
  }

  getIronguardAdults() {
    return this.ironguardAdults.slice();
  }

  getIronguardJR() {
    return this.ironguardJR.slice();
  }

  getBoardRaceAdults() {
    return this.boardRaceAdults.slice();
  }

  getBoardRaceJR() {
    return this.boardRaceJR.slice();
  }

  getRunRelay() {
    return this.runRelay.slice();
  }

  getBeachRun() {
    return this.beachRun.slice();
  }

  getSurfRace() {
    return this.surfRace.slice();
  }

  getRunSwimRunAdults() {
    return this.runSwimRunAdults.slice();
  }

  getRunSwimRunJR() {
    return this.runSwimRunJR.slice();
  }

  getSurfSkiRace() {
    return this.surfSkiRace.slice();
  }

  getAmericanIronperson() {
    return this.americanIronperson.slice();
  }

  getIronperson() {
    return this.ironperson.slice();
  }

  getSurfBoatRace() {
    return this.surfBoatRace.slice();
  }

  getRescueRace() {
    return this.rescueRace.slice();
  }

  getSwimRelay() {
    return this.swimRelay.slice();
  }

  getDistanceRun() {
    return this.distanceRun.slice();
  }

  getSurfSwimRaceAdults() {
    return this.surfSwimRaceAdults.slice();
  }

  getSurfSwimRaceJR() {
    return this.surfSwimRaceJR.slice();
  }

  getIronpersonU19() {
    return this.ironpersonU19.slice();
  }

  getSurfSkiU19() {
    return this.surfSkiU19.slice();
  }
}
