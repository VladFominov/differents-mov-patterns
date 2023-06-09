/** @type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

CANVAS_WIDTH = canvas.width = 400;
CANVAS_HEIGHT = canvas.height = 1000;

CANVAS_WIDTH2 = canvas2.width = 400;
CANVAS_HEIGHT2 = canvas2.height = 1000;

CANVAS_WIDTH3 = canvas3.width = 400;
CANVAS_HEIGHT3 = canvas3.height = 1000;


const numberOfEnemies = 30;
const enemiesArray = [];
const enemiesArray2 = [];
const enemiesArray3 = [];

let gameFrame = 0;

const enemyImage1 = new Image();
enemyImage1.src = "./assets/enemy1.png";

const enemyImage2 = new Image();
enemyImage2.src = "./assets/enemy2.png";

const enemyImage3 = new Image();
enemyImage3.src = "./assets/enemy3.png";

const enemyImage4 = new Image();
enemyImage4.src = "./assets/enemy4.png";

class Enemy {
  constructor(image, spriteWidth, spriteHeight) {  
    this.image = image;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.width = this.spriteWidth / 2.5;
    this.height =  this.spriteHeight  / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y =Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1); 
  }
  update() {
    // animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
};


class Enemy1 extends Enemy {
  constructor(image, spriteWidth, spriteHeight) {
    super(image, spriteWidth, spriteHeight);
    this.image = image;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;  
    
    };
    update () {
      super.update();
      this.x += Math.random() * 5 - 2.5;
      this.y += Math.random() * 5 - 2.5;
    };
  };

class Enemy2 extends Enemy {
  constructor(image, spriteWidth, spriteHeight) {
    super(image, spriteWidth, spriteHeight);
    this.image = image;
    spriteWidth = 266;
    spriteHeight = 188;
    this.speed = Math.random() * 4 + 1;
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.2;
    this.curve = Math.random() * 7;
  }
  update () {
    super.update();
    this.width = this.spriteWidth / 2.5;
    this.x -= this.speed;
    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;
    if(this.x + this.width<0) this.x = CANVAS_WIDTH2;
  };
};

class Enemy3 extends Enemy {
  constructor(image, spriteWidth, spriteHeight) {
    super(image, spriteWidth, spriteHeight);
    this.image = image;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight; 
    this.speed = Math.random() * 4 + 1;
    this.angle = Math.random() * 500; 
    this.angleSpeed = Math.random() * 0.5 + 0.5;
    // this.curve = Math.random() * 200 + 50;
    
    };
    update () {
      super.update();
      this.x = canvas.width / 2 * Math.cos(this.angle * Math.PI / 180) + (canvas.width / 2 - this.width/2);
      this.y = canvas.height / 2 * Math.sin(this.angle * Math.PI / 200) + (canvas.height / 2 - this.height/2);
      this.angle += this.angleSpeed;
    };
  };

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy1(enemyImage1, 293, 155));
  enemiesArray2.push(new Enemy2(enemyImage2, 266, 188));
  enemiesArray3.push(new Enemy3(enemyImage3, 218, 177));
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw(ctx);
  });
  gameFrame++;
  window.requestAnimationFrame(animate);
}
animate();

function animate2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  enemiesArray2.forEach((enemy) => {
    enemy.update();
    enemy.draw(ctx2);
  });

  gameFrame++;
  window.requestAnimationFrame(animate2);
}

animate2();

function animate3() {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);

  enemiesArray3.forEach((enemy) => {
    enemy.update();
    enemy.draw(ctx3);
  });

  gameFrame++;
  window.requestAnimationFrame(animate3);
}

animate3();



