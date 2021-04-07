'use strict';
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let branches = [];
function BranchS(name, minCust, maxCust, avgCooki) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCooki = avgCooki;
  this.perHourArray = [];
  this.total = 0;
  branches.push(this);
}
BranchS.prototype.perHour = function () {
  for (let i = 0; i < hour.length; i++) {
    this.perHourArray.push(Math.floor(randomNumber(this.minCust, this.maxCust) * this.avgCooki));
    this.total += this.perHourArray[i];
    // console.log(this.total);
    // console.log(this.perHourArray);
  }
};

const seatl = new BranchS('seatl', 23, 65, 6.3);
// seatl.perHour();
const tokyo = new BranchS('tokyo', 3, 24, 1.2);
// tokyo.perHour();
const Dubai = new BranchS('Dubai', 11, 38, 3.7);
// Dubai.perHour();
const Paris = new BranchS('Paris', 20, 38, 2.3);
// Paris.perHour();
const Lima = new BranchS('Lima', 2, 16, 4.6);
// Lima.perHour();
console.log(branches);

let main = document.getElementById('parent');
let table = document.createElement('table');
main.appendChild(table);

function makingHeader() {
  let headingRow = document.createElement('tr');
  table.appendChild(headingRow);
  let fThElement = document.createElement('th');
  headingRow.appendChild(fThElement);
  fThElement.textContent = 'name';

  for (let i = 0; i < hour.length; i++) {
    fThElement = document.createElement('th');
    headingRow.appendChild(fThElement);
    fThElement.textContent = hour[i];

  }
  let finalTh = document.createElement('th');
  headingRow.appendChild(finalTh);
  finalTh.textContent = 'Daily Location total';
}

BranchS.prototype.render = function () {
  let shopeRow = document.createElement('tr');
  table.appendChild(shopeRow);
  let nameTd = document.createElement('td');
  shopeRow.appendChild(nameTd);
  nameTd.textContent = this.name;

  for (let i = 0; i < hour.length; i++) {
    let tdRow = document.createElement('td');
    shopeRow.appendChild(tdRow);

    tdRow.textContent = `${this.perHourArray[i]}`;

  }
  let totalTd = document.createElement('td');
  shopeRow.appendChild(totalTd);
  totalTd.textContent = `${this.total}`;
};

function makingFoter() {
  let foterRow = document.createElement('tr');
  table.appendChild(foterRow);
  let fTh = document.createElement('th');
  foterRow.appendChild(fTh);
  fTh.textContent = 'Total';
  let totalEachHour;
  let finaltotal = 0;
  for (let i = 0; i < hour.length; i++) {
    totalEachHour = 0;
    for (let j = 0; j < branches.length; j++) {
      totalEachHour += branches[j].perHourArray[i];
      finaltotal += branches[j].perHourArray[i];

    }
    let foterTh = document.createElement('th');
    foterRow.appendChild(foterTh);
    foterTh.textContent = totalEachHour;

  }
  let allTotalTh = document.createElement('th');
  foterRow.appendChild(allTotalTh);
  allTotalTh.textContent = finaltotal;


}
let cookiform = document.getElementById('cookisform');
console.log(cookiform);

cookiform.addEventListener('submit', submiter);

function submiter(event) {
  event.preventDefault();
  console.log(event);
  let name = event.target.nameField.value;
  console.log(name);

  let avgCooki = event.target.avgaCooki.value;
  console.log(avgCooki);
  let minCust = event.target.minCust.value;
  console.log(minCust);
  let maxCust = event.target.maxCust.value;
  console.log(maxCust);
  let newStor = new BranchS(name, minCust, maxCust, avgCooki);
  console.log(newStor);
  let shops = document.getElementById('parent');
  console.log(shops);

  table.textContent = '';
  for (let i = 0; i < branches.length; i++) {
    branches[i].perHour();

    branches[i].render();


  } makingFoter();
}
makingHeader();
for (let i = 0; i < branches.length; i++) {
  branches[i].perHour();

  branches[i].render();

}
makingFoter();



//form lab9//






//old from lab 6
// let Seattle={
//   name:'seatl',
//   randomCustS:[],
//   minCust:23,
//   maxCust:65,
//   avgCookieSale:6.3,
//   solde:[],
//   total:0,
//   customersPer:function(){
//     for (let i = 0; i < hour.length; i++) {

//       this.randomCustS.push(randomNumber(this.minCust,this.maxCust));

//     }
//     console.log(this.randomCustS);

//   },
//   soldCooki:function(){
//     for (let i = 0; i < this.randomCustS.length; i++) {
//       let mult=this.randomCustS[i] * this.avgCookieSale;
//      mult=Math.floor(mult);
//       this.solde.push (mult) ;
//       this.total+=mult;
//     }

//   }

//   render:function(){
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     let nameElement=document.createElement('h3');
//     parent.appendChild(nameElement);
//     nameElement.textContent=this.name;
//     let ultElement=document.createElement('ul');
//     parent.appendChild(ultElement);
//     for (let i = 0; i < hour.length; i++) {

//       let liElement=document.createElement('li');
//       ultElement.appendChild(liElement);
//       liElement.textContent=`${hour[i]}: ${this.randomCustS[i]} cookis`;
//     }
//     let totalElement=document.createElement('li');
//     ultElement.appendChild(totalElement);
//     totalElement.textContent=`total: ${this.total}`;
//   }
// };
// Seattle.customersPer();
// Seattle.soldCooki();
// console.log(Seattle.solde);
// console.log(Seattle.total);
// / Seattle.render();
// let Tokyo={
//   name:'Tokyo',
//   randomCustS:[],
//   minCust:23,
//   maxCust:65,
//   avgCookieSale:6.3,
//   solde:[],
//   total:0,
//   customersPer:function(){
//     for (let i = 0; i < hour.length; i++) {

//       this.randomCustS.push(randomNumber(this.minCust,this.maxCust));

//     }
//     console.log(this.randomCustS);

//   },
//   soldCooki:function(){
//     for (let i = 0; i < this.randomCustS.length; i++) {
//       let mult=this.randomCustS[i] * this.avgCookieSale;
//       mult=Math.floor(mult);
//       this.solde.push (mult) ;
//       this.total+=mult;
//     }

//   },

//   render:function(){
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     let nameElement=document.createElement('h3');
//     parent.appendChild(nameElement);
//     nameElement.textContent=this.name;
//     let ultElement=document.createElement('ul');
//     parent.appendChild(ultElement);
//     for (let i = 0; i < hour.length; i++) {

//       let liElement=document.createElement('li');
//       ultElement.appendChild(liElement);
//       liElement.textContent=`${hour[i]}: ${this.randomCustS[i]} cookis`;
//     }
//     let totalElement=document.createElement('li');
//     ultElement.appendChild(totalElement);
//     totalElement.textContent=`total: ${this.total}`;
//   }
// };
// Tokyo.customersPer();
// Tokyo.soldCooki();
// console.log(Tokyo.total);
// Tokyo.render();

// let Dubai={
//   name:'Dubai',
//   randomCustS:[],
//   minCust:23,
//   maxCust:65,
//   avgCookieSale:6.3,
//   solde:[],
//   total:0,
//   customersPer:function(){
//     for (let i = 0; i < hour.length; i++) {

//       this.randomCustS.push(randomNumber(this.minCust,this.maxCust));

//     }
//     console.log(this.randomCustS);

//   },
//   soldCooki:function(){
//     for (let i = 0; i < this.randomCustS.length; i++) {
//       let mult=this.randomCustS[i] * this.avgCookieSale;
//       mult=Math.floor(mult);
//       this.solde.push (mult) ;
//       this.total+=mult;
//     }

//   },

//   render:function(){
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     let nameElement=document.createElement('h3');
//     parent.appendChild(nameElement);
//     nameElement.textContent=this.name;
//     let ultElement=document.createElement('ul');
//     parent.appendChild(ultElement);
//     for (let i = 0; i < hour.length; i++) {

//       let liElement=document.createElement('li');
//       ultElement.appendChild(liElement);
//       liElement.textContent=`${hour[i]}: ${this.randomCustS[i]} cookis`;
//     }
//     let totalElement=document.createElement('li');
//     ultElement.appendChild(totalElement);
//     totalElement.textContent=`total: ${this.total}`;
//   }
// };
// Dubai.customersPer();
// Dubai.soldCooki();
// Dubai.render();

// let Paris={
//   name:'Paris',
//   randomCustS:[],
//   minCust:23,
//   maxCust:65,
//   avgCookieSale:6.3,
//   solde:[],
//   total:0,
//   customersPer:function(){
//     for (let i = 0; i < hour.length; i++) {

//       this.randomCustS.push(randomNumber(this.minCust,this.maxCust));

//     }
//     console.log(this.randomCustS);

//   },
//   soldCooki:function(){
//     for (let i = 0; i < this.randomCustS.length; i++) {
//       let mult=this.randomCustS[i] * this.avgCookieSale;
//       mult=Math.floor(mult);
//       this.solde.push (mult) ;
//       this.total+=mult;
//     }

//   },

//   render:function(){
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     let nameElement=document.createElement('h3');
//     parent.appendChild(nameElement);
//     nameElement.textContent=this.name;
//     let ultElement=document.createElement('ul');
//     parent.appendChild(ultElement);
//     for (let i = 0; i < hour.length; i++) {

//       let liElement=document.createElement('li');
//       ultElement.appendChild(liElement);
//       liElement.textContent=`${hour[i]}: ${this.randomCustS[i]} cookis`;
//     }
//     let totalElement=document.createElement('li');
//     ultElement.appendChild(totalElement);
//     totalElement.textContent=`total: ${this.total}`;
//   }
// };
// Paris.customersPer();
// Paris.soldCooki();
// Paris.render();

// let Lima={
//   name:'Lima',
//   randomCustS:[],
//   minCust:23,
//   maxCust:65,
//   avgCookieSale:6.3,
//   solde:[],
//   total:0,
//   customersPer:function(){
//     for (let i = 0; i < hour.length; i++) {

//       this.randomCustS.push(randomNumber(this.minCust,this.maxCust));

//     }
//     console.log(this.randomCustS);

//   },
//   soldCooki:function(){
//     for (let i = 0; i < this.randomCustS.length; i++) {
//       let mult=this.randomCustS[i] * this.avgCookieSale;
//       mult=Math.floor(mult);
//       this.solde.push (mult) ;
//       this.total+=mult;
//     }

//   },

//   render:function(){
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     let nameElement=document.createElement('h3');
//     parent.appendChild(nameElement);
//     nameElement.textContent=this.name;
//     let ultElement=document.createElement('ul');
//     parent.appendChild(ultElement);
//     for (let i = 0; i < hour.length; i++) {

//       let liElement=document.createElement('li');
//       ultElement.appendChild(liElement);
//       liElement.textContent=`${hour[i]}: ${this.randomCustS[i]} cookis`;
//     }
//     let totalElement=document.createElement('li');
//     ultElement.appendChild(totalElement);
//     totalElement.textContent=`total: ${this.total}`;
//   }
// };
// Lima.customersPer();
// Lima.soldCooki();
// Lima.render();