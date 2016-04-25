var ForagerBee = function(age,color,job) {
  age = age || 10;
  //don't need to do the same for color, as default is undefined
  job = job || 'find pollen'; 

  Bee.call(this,age,color,job);
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(value){
  this.treasureChest.push(value);
}; 


