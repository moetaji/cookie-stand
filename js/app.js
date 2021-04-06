'use strict';
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let branches = [];
function BranchS(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.maxCust = maxCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.brancHour = [];

  let seatl = new BranchS('seatl', 23, 65, 6.3);
  let tokyo = new BranchS('tokyo', 3, 24, 1.2);
  let Dubai = new BranchS('Dubai', 11, 38, 3.7);
  let Paris = new BranchS('Paris', 20, 38, 2.3);
  let Lima = new BranchS('Lima', 2, 16, 4.6);
  branches.push(this);

  console.log(seatl);
  console.log(tokyo);
  console.log(Dubai);
  console.log(Paris);
  console.log(Lima);
}
BranchS.prototype.getRandomN = function () {
  for (let i = 0; i < hour.length; i++) {
    this.brancHour.push = (Math.floor(randomNumber(this.minCust, this.maxCust)) * this.avgCookieSale);
  }
  //   this.getRandomN();
  // };

  BranchS.prototype.render = function () {
    let parentElement = document.getElementById('salmon');
    console.log(parentElement);
  };

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
// Seattle.customersPer();
// Seattle.soldCooki();
// console.log(Seattle.solde);
// console.log(Seattle.total);
// Seattle.render();

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
