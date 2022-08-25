input.onGesture(Gesture.TiltRight, function () {
	
})
radio.onReceivedNumber(function (receivedNumber) {
    gegner_schuss = game.createSprite(receivedNumber, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        gegner_schuss.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.A, function () {
    spieler.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    schuss = game.createSprite(spieler.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        schuss.change(LedSpriteProperty.Y, -1)
    }
    radio.sendNumber(schuss.get(LedSpriteProperty.X))
    schuss.delete()
})
input.onButtonPressed(Button.B, function () {
    spieler.change(LedSpriteProperty.X, 1)
})
let schuss: game.LedSprite = null
let gegner_schuss: game.LedSprite = null
let spieler: game.LedSprite = null
spieler = game.createSprite(2, 4)
spieler.set(LedSpriteProperty.Brightness, 25)
radio.setGroup(4)
