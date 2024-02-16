class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');

        this.player = new Player(
            this.gameScreen,
            50,
            450,
            100,
            150,
            './docs/images/player-1.gif'
        );

        this.width = 1900;
        this.height = 700;

        this.obstacles = [];

        this.isPushingObstacle = false;

        this.score = 0;

        this.lives = 3;

        this.timer = 0;

        this.gameIsOver = false;

        this.backgroundMusic = document.createElement('audio');
        this.backgroundMusic.src = './docs/audio/playing-music.mp3';
        this.backgroundMusic.volume = 0.5;
        this.gameScreen.appendChild(this.backgroundMusic);

        this.endgameMusic = document.createElement('audio');
        this.endgameMusic.src = './docs/audio/GameOver.mp3';
        this.gameEndScreen.appendChild(this.endgameMusic);

        this.damageSound = new Audio('docs/audio/Damaged.mp3');

    }

    start() {
        this.backgroundMusic.play();
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.3;

        const updateTimer = () => {
            this.timer++;
        }

        setInterval(updateTimer, 1000);

        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.gameLoop();
    }

    gameLoop() {
       

        if (this.gameIsOver) {
            return;
        }

        this.update();

        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        let score = document.getElementById('score');
        let lives = document.getElementById('lives');

        score.innerHTML = this.score;
        lives.innerHTML = this.lives;

        if (this.lives === 0) {
            this.endGame();
        }

        this.player.move();
        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();
    
                if (this.player.didCollide(obstacle)) {
                    obstacle.element.remove(); 
                    this.obstacles.splice(i, 1);
                    this.lives--;
                    this.damageSound.play();
    
                    if (this.lives === 0) {
                        this.endGame();
                    }
                    } else if (obstacle.left < 0) {
                        obstacle.element.remove(); 
                        this.obstacles.splice(i, 1);
                        this.score++;
                } 
            }    
                if (this.timer < 30){
                    if(!this.obstacles.length && !this.isPushingObstacle){
                    this.isPushingObstacle = true;
                
                        setTimeout(() => {
                            const newObstacle = new Enemy(this.gameScreen, this.enemyImg,);
                            this.obstacles.push(newObstacle);
                            this.isPushingObstacle = false;
                        }, 100);
                    }
    
                }  else {
                    if(this.obstacles.length < 2 && !this.isPushingObstacle){
                        this.isPushingObstacle = true;
                    
                        setTimeout(() => {
                            const newObstacle = new Enemy(this.gameScreen, this.enemyImg,);
                            this.obstacles.push(newObstacle);
                            this.isPushingObstacle = false;
                        }, 1500);
                    } 
                }
            }


    endGame() {
        this.player.container.remove();

        this.obstacles.forEach((enemy) => {
            enemy.element.remove();
        }); 

        this.gameIsOver = true;
        this.gameScreen.style.display = 'none';
        this.gameEndScreen.style.display = 'block';

        this.backgroundMusic.pause();
        this.backgroundMusic = null;

        this.endgameMusic.play();
    }
}