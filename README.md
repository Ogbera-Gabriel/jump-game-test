# Jumping Game

## Description
Jumping Game is a simple web-based game built with JavaScript and HTML. The game challenges players to navigate through obstacles while collecting points. It features basic controls and an intuitive interface.

## How to Play
1. Press the "Start Game" button to begin.
2. Use directional keys for movement.
3. Hold the 'Up-key' or 'Space-Bar' to hover briefly.
4. Avoid enemies and obstacles.
5. Collect points to increase your score.
6. The game ends when you lose all your lives. Press "Try Again!" to restart.

## Installation
1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.

## Game Code Structure
The game consists of several components:

### HTML
The main HTML file `index.html` contains the structure of the game interface and includes necessary CSS and JavaScript files.

### JavaScript
#### Player Class (`player.js`)
The `Player` class handles the player's movement and interactions within the game environment. It includes methods for movement, jumping, collision detection, and rendering.

#### Enemy Class (`enemy.js`)
The `Enemy` class represents the obstacles in the game that the player must avoid. It handles their movement, collision detection with the player, and rendering.

#### Game Class (`game.js`)
The `Game` class manages the game state, including player status, score tracking, obstacle generation, and game over conditions. It orchestrates the game loop and handles user input.

### CSS
The `styles.css` file contains styles for the game interface, including layout, colors, and animations.

## Dependencies
- None

## Credits
- Fonts: [Cyberpunk Is Not Dead](https://fonts.cdnfonts.com/css/cyberpunk-is-not-dead)
- Background Music: [BackGroundMusic.mp3](./docs/audio/BackGroundMusic.mp3)
- Game Over Music: [GameOver.mp3](./docs/audio/GameOver.mp3)
- Sound Effects: [Damaged.mp3](./docs/audio/Damaged.mp3)

## Preview Link
https://ogbera-gabriel.github.io/jump-game-test/
