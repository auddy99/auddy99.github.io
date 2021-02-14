var network
var ncount = -1
var interval = 15
var lineweight = 2
var bgcolor = '#0F1A20'
var circleSizeChangeSpeed = 0.1
var circleSize = 25
var movingCircleSize = 10
var moveSpeed = 0.07
var strokeColor = 'white'
var target = '#skills'
var skillStart = 0;

function setup() {
  wd = window.innerWidth
  ht = window.innerHeight
  ctc = createCanvas(0.95*wd, 0.8*ht);
  ctc.drawingContext.fillStyle = strokeColor

  network = new Network(width/2, height/2);
  
  x=0;y=-420
  // var a = new Neuron(x, y);
  var b = new Neuron(x, y+200);
  var c = new Neuron(x, y+340);
  var d = new Neuron(x, y+480);
  var e = new Neuron(x, y+620);
  
  //skill
  // network.connect(a , b , 1);//Data Science
  network.connect(b , c , 1);//Coding
  network.connect(c , d , 1);//Web dev
  network.connect(d , e , 1);//Others

  // network.addNeuron(a);
  network.addNeuron(b);
  network.addNeuron(c);
  network.addNeuron(d);
  network.addNeuron(e);

  //UNCOMMENT THESE TO USE TARGET
  canv = $("#defaultCanvas0")
  $(target).append(canv)

}

function draw() {
  strokeStyle = strokeColor;
  background(bgcolor);
  network.update();
  network.display();
  
  if (frameCount%30==0 && skillStart==1) {
    network.feedforward(1); //originate speed
  }
}

function Connection(from, to,w) {
  
  this.a = from;
  this.b = to;
  this.weight = w;
  this.sending = false;
  this.sender = null;
  this.output = 0;
  
  
  this.feedforward = function(val) {
    this.output = val*this.weight;
    this.sender = this.a.position.copy();
    this.sending = true;
  }
  
  this.update = function() {
    if (this.sending) {
      this.sender.x = lerp(this.sender.x, this.b.position.x, moveSpeed);
      this.sender.y = lerp(this.sender.y, this.b.position.y, moveSpeed);
      var d = p5.Vector.dist(this.sender, this.b.position);
      if (d < 1) {
        this.b.feedforward(this.output);
        this.sending = false;
      }
    }
  }
  
  this.display = function() {
    stroke(strokeColor);
    strokeWeight(this.weight*lineweight);
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);
    
    if (this.sending) {
      fill(strokeColor);
      strokeWeight(1);
      ellipse(this.sender.x, this.sender.y, movingCircleSize, movingCircleSize);
    }
  }
}

function Network(x, y) {
  
  this.neurons = [];
  this.connections = [];
  this.position = createVector(x, y);
  
  this.addNeuron = function(n) {

    this.neurons.push(n);
  }
  
  this.connect = function(a, b, weight) {
    var c = new Connection(a, b, weight);
    a.addConnection(c);
    this.connections.push(c);
  }
  
  this.feedforward = function(input) {
    ncount++;
    if(ncount%interval != 0 && ncount%interval!=1){
      // console.log(ncount);
      return;
    }
    var start = this.neurons[0];
    start.feedforward(input);
  }
  
  this.update = function() {
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].update();
    }
  }
  
  this.display = function() {
    push();

    translate(this.position.x, this.position.y);
    for (var i = 0; i < this.neurons.length; i++) {
      this.neurons[i].display();
    }
    
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].display();
    }
    pop();
  }
}

function Neuron(x, y) {
  
  this.position = createVector(x, y);
  this.connections = [];
  this.sum = 0;
  this.r = 32;
  
  this.addConnection = function(c) {
    this.connections.push(c);
  }
  
  this.feedforward = function(input) {
    this.sum += input;
    if (this.sum > 1) {
      this.fire();
      this.sum = 0;
    }
  }
  
  this.fire = function() {
    this.r = 64;
    
    for (var i = 0; i < this.connections.length; i++) {
       this.connections[i].feedforward(this.sum);
    }
  }
  
  this.display = function() {
    stroke(9);
    strokeWeight(0.5);
    var b = map(this.sum,0,1,255,0);
    // fill(b);
    ellipse(this.position.x, this.position.y, this.r, this.r);
    
    this.r = lerp(this.r*1,circleSize,circleSizeChangeSpeed);
    // console.log(this.r)
  }
}