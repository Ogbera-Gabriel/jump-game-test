class Enemy {
    constructor(gameScreen, enemyImg) {
        this.gameScreen = gameScreen;
        this.left = 1300;
        this.top = 500;
        this.width = 70;
        this.height = 100;
        this.ememyImage = enemyImg;
        
        this.element = document.createElement('img');
        
        this.element.src = './docs/images/enemy.png';
        this.element.style.position = 'absolute';
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        this.gameScreen.appendChild(this.element);
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }

    move() {
        this.left -= 5;
        this.updatePosition();
    }

    collidedWithPlayer(player) {
        const playerRect = player.container.getBoundingClientRect();
        const enemyRect = this.container.getBoundingClientRect();

        if (
            playerRect.left < enemyRect.right &&
            playerRect.right > enemyRect.left &&
            playerRect.top < enemyRect.bottom &&
            playerRect.bottom > enemyRect.top
        ) {
            return true;
        }

        return false;
    }
}