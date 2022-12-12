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

Initialise the games with the ```||sprite||```

```blocks
let Shoot = 0
let Player = 0
let Enemy = 0
let EnemyFire = 0

let Player = game.createSprite(2, 4)
let Shoot = game.createSprite(0, -4)

```


