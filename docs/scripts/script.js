window.onload = function () {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')
    const introMusic = document.getElementById('introMusic');

    let game;


    
    introMusic.play()
    startButton.addEventListener('click', function() {
        startGame();
        introMusic.pause();
    });

    restartButton.addEventListener('click', function () {
        location.reload();
    })


    function startGame() {
        game = new Game();

        game.start();
    }


    function handleKeyDown(event) {
        const key = event.key;

        const possibleKeyStrokes = [
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            ' '
        ];

        if (possibleKeyStrokes.includes(key)) {
            event.preventDefault();

            if (game) {
                switch (key) {
                    case 'ArrowLeft':
                        game.player.directionX = -8;
                        break;
                    case 'ArrowRight':
                        game.player.directionX = 8;
                        break;
                    case 'ArrowUp':
                    case ' ':
                        if(game.player.top >= 449){
                            game.player.jump();
                            console.log('jump') 
                            break;
                        }       
                }       
            }
        } 
    }
    

    function handleKeyUp(event) {
        const key = event.key;

        const possibleKeyStrokes = [
            'ArrowLeft',
            'ArrowUp',
            'ArrowRight',
            ' '
        ];

        if (possibleKeyStrokes.includes(key)) {
            event.preventDefault();

            if (game) {
                switch (key) {
                    case 'ArrowLeft':
                        game.player.directionX = 0;
                        break;
                    case 'ArrowUp':
                    case ' ':
                        game.player.directionY = 0;
                        break;    
                    case 'ArrowRight':
                        game.player.directionX = 0;
                        break;    
                }        
            }
        } 
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

}
