var Bee = function(age,color,job) {
  job = job || 'keep on growing';
  age = age || 5;
  color = color || 'yellow';
  Grub.call(this,age,color);
  this.job = job;
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

