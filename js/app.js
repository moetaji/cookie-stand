'use strict';
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let hour =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let Seattle={
  name:'seatl',
  randomCustS:[],
  minCust:23,
  maxCust:65,
  avgCookieSale:6.3,
  solde:[],
  total:0,
  customersPer:function(){
    for (let i = 0; i < hour.length; i++) {

      this.randomCustS.push(randomNumber(this.minCust,this.maxCust));

    }
    console.log(this.randomCustS);

  },
  soldCooki:function(){
    for (let i = 0; i < this.randomCustS.length; i++) {
      let mult=this.randomCustS[i] * this.avgCookieSale;
      mult=Math.floor(mult);
      this.solde.push (mult) ;
      this.total+=mult;
    }

  }

};
Seattle.customersPer();
Seattle.soldCooki();
console.log(Seattle.solde);
console.log(Seattle.total);

//text content //
