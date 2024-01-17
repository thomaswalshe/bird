let sprite: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
basic.forever(function () {
	
})
