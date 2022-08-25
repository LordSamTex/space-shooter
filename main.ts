radio.onReceivedNumber(function (receivedNumber) {
    gegner_schuss = game.createSprite(receivedNumber, 0)
    for (let index = 0; index < 5; index++) {
        basic.pause(200)
        gegner_schuss.change(LedSpriteProperty.Y, 1)
    }
    if (spieler.isTouching(gegner_schuss)) {
        leben += -1
        if (leben == 0) {
            radio.sendString("Gewonnen")
            basic.showIcon(IconNames.Sad)
            basic.pause(1000)
            game.gameOver()
        }
    }
    gegner_schuss.delete()
})
input.onButtonPressed(Button.A, function () {
    spieler.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    schuss = game.createSprite(spieler.get(LedSpriteProperty.X), 3)
    schuss.set(LedSpriteProperty.Brightness, 50)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        schuss.change(LedSpriteProperty.Y, -1)
    }
    radio.sendNumber(schuss.get(LedSpriteProperty.X))
    schuss.delete()
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString(receivedString)
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    spieler.change(LedSpriteProperty.X, 1)
})
let schuss: game.LedSprite = null
let gegner_schuss: game.LedSprite = null
let leben = 0
let spieler: game.LedSprite = null
spieler = game.createSprite(2, 4)
spieler.set(LedSpriteProperty.Brightness, 25)
radio.setGroup(100)
leben = randint(3, 7)
