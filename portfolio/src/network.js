var network
var ncount = -1
var interval = 25
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
  ctc = createCanvas(0.7*wd, 1.15*ht);
  // ctc = $('#defaultCanvas0')
  ctc.drawingContext.fillStyle = strokeColor

  network = new Network(width/2, height/2);
  

  x=-50; y=-400
  var s = new Neuron(x, y);
  var ml = new Neuron(x-180, y+150);
  var lg = new Neuron(x+300, y+200);
  var dv = new Neuron(x+50, y+560);
  
  var cp = new Neuron(x+180, y+330);
  var cc = new Neuron(x+180, y+450);
  var cs = new Neuron(x+320, y+380);
  var jv = new Neuron(x+400, y+300);

  var py = new Neuron(x-60, y+250);
  var kg = new Neuron(x-280, y+250);
  var dl = new Neuron(x-220, y+380);
  var oc = new Neuron(x-290, y+480);
  var nn = new Neuron(x-150, y+480);
  var fl = new Neuron(x-90, y+380);

  var wb = new Neuron(x-100, y+650);
  var it = new Neuron(x+180, y+650);

  var ht = new Neuron(x-250, y+620);
  var ph = new Neuron(x-200, y+780);
  var js = new Neuron(x-20, y+780);
  var sq = new Neuron(x+30, y+700);
  var xm = new Neuron(x+280, y+600);
  var wx = new Neuron(x+260, y+750);
  
  //skill
  network.connect(s , ml , 1);
  network.connect(s , lg , 1);
  network.connect(s , dv , 1);

  network.connect(ml , kg , 1);
  network.connect(ml , dl , 1);
  network.connect(ml , fl , 1);
  network.connect(ml , py , 1);

  network.connect(lg , py , 1);
  network.connect(lg , cp , 1);
  network.connect(lg , cs , 1);
  network.connect(lg , jv , 1);

  network.connect(dv , wb , 1);
  network.connect(dv , it , 1);

  network.connect(wb , fl , 1);
  network.connect(wb , ht , 1);
  network.connect(wb , ph , 1);
  network.connect(wb , js , 1);
  network.connect(wb , sq , 1);

  network.connect(it , xm , 1);
  network.connect(it , wx , 1);

  network.connect(dl , oc , 1);
  network.connect(dl , nn , 1);
  network.connect(cs , xm , 1);
  network.connect(cp , cc , 1);

network.addNeuron(s);
network.addNeuron(ml);
network.addNeuron(lg);
network.addNeuron(dv);
network.addNeuron(py);
network.addNeuron(cp);
network.addNeuron(cc);
network.addNeuron(cs);
network.addNeuron(jv);
network.addNeuron(kg);
network.addNeuron(dl);
network.addNeuron(oc);
network.addNeuron(nn);
network.addNeuron(fl);
network.addNeuron(wb);
network.addNeuron(it);
network.addNeuron(ht);
network.addNeuron(ph);
network.addNeuron(js);
network.addNeuron(sq);
network.addNeuron(xm);
network.addNeuron(wx);

  
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

