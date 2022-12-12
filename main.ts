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
