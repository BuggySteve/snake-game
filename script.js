var grid = [];
createGrid();

function createGrid () {
  for (var x = 0; x < 10; x++) {
    grid [x] = [];
    for (var y = 0; y < 10; y++) {
      addCell(x, y);
    }
  }
}

function addCell (x, y) {
  grid[x][y] = cell(x, y);
}

function cell (x, y) {
  return (x + ":" + y);
}

var snake = new Snake();
function Snake () {
  this.bodyLength = 2;
  this.heading = "w";
  this.body = [];
  this.head = function() {
    return this.body[0];
  }
  this.tail = function() {
    return this.body[this.body.length - 1];
  }
  this.startPostition = function(head, tail) {
    var head = [5,5];
    var tail = [5,6];
    this.body.push(head, tail);
  }
  this.turnLeft = function() {
    switch (this.heading) {
      case "w":
        this.heading = "s";
        break;
      case "s":
        this.heading = "e";
        break;
      case "e":
        this.heading = "n";
        break;
      case "n":
        this.heading = "w";
        break;
    }
  }
  this.turnRight = function() {
    switch (this.heading) {
      case "w":
        snake.heading = "n";
        break;
      case "n":
        snake.heading = "e";
        break;
      case "e":
        snake.heading = "s";
        break;
      case "s":
        snake.heading = "w";
        break;
    }
  }
  this.moveHead = () => {
    var head = this.head();
    var headX = head[1];
    var headY = head[0];
    if (this.heading === "w") {
      if (headX < 0) {
        this.body[0][1] = 9;
      }
      else if (headX > 0 && headX <= 9) {
        this.body[0][1]--;
      }
    }
    else if (this.heading === "e") {
      if (headX > 9) {
        this.body[0][1] = 0;
      }
      else if (headX > 0 && headX <= 9) {
        this.body[0][1]++;
      }
    }
    else if (this.heading === "n") {
      if (headY < 0) {
        this.body[0][0] = 9;
      }
      else if (headY > 0 && headY <= 9) {
        this.body[0][0]--;
      }
    }
    else if (this.heading === "s") {
      if (headY > 9) {
        this.body[0][0] = 0;
      }
      else if (headY > 0 && headY <= 9) {
        this.body[0][0]++;
      }
    }
  }
  this.moveBody = () => {
    var body = this.body;
    for (i = 1; i < body.length; i++) {
      var bodyPart = body[i];
      var bodyPartX = bodyPart[1];
      var bodyPartY = bodyPart[0];
      if (this.heading === "w") {
        if (bodyPartX < 0) {
          this.body[i][1] = 9;
        }
        else if (bodyPartX > 0 && bodyPartX <= 9) {
          this.body[i][1]--;
        }
      }
      else if (this.heading === "e") {
        if (bodyPartX > 9) {
          this.body[i][1] = 0;
        }
        else if (bodyPartX > 0 && bodyPartX <= 9) {
          this.body[i][1]++;
        }
      }
      else if (this.heading === "n") {
        if (bodyPartY < 0) {
          this.body[i][0] = 9;
        }
        else if (bodyPartY > 0 && bodyPartY <= 9) {
          this.body[i][0]--;
        }
      }
      else if (this.heading === "s") {
        if (bodyPartY > 9) {
          this.body[i][0] = 0;
        }
        else if (bodyPartY > 0 && bodyPartY <= 9) {
          this.body[i][0]++
        }
      }
    }
  }
}




