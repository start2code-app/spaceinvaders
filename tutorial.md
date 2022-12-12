# Space Invaders

## Introduction @unplugged

A simple game - Space Invaders

## Step 1

Create 4 ``||variables||`` for our game. **Player**, **Enemy**, **Shoot**(Player shooting Enemy), and **EnemyFire**(Enemy shooting Player).

```blocks
let Shoot = 0
let Player = 0
let Enemy = 0
let EnemyFire = 0
```
## Step 2

Initialise the games with the ```||game||```

```blocks
let Shoot = 0
let Player = 0
let Enemy = 0
let EnemyFire = 0

let Player = game.createSprite(2, 4)
let Shoot = game.createSprite(0, -4) 
```

## Step 3 

Programming Buttons ```||input||``` : Moving Player

```blocks
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Player: game.LedSprite = null
let Enemy = 0
let EnemyFire = 0
Player = game.createSprite(2, 4)
let Shoot = game.createSprite(0, -4)
basic.forever(function () {
	
})
```