input.onButtonPressed(Button.A, function () {
    basic.showString("Celcius : " + input.temperature())
})
input.onGesture(Gesture.TiltLeft, function () {
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Fahrenheit : " + (input.temperature() * 1.8 + 32))
})
input.onGesture(Gesture.TiltRight, function () {
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("C D E F G A B C5 ", 120)
    music.playMelody("C5 B A G F E D C ", 120)
    if (input.soundLevel() < 25) {
        music.ringTone(262)
        basic.showString("C ")
    } else if (input.soundLevel() < 50) {
        music.ringTone(294)
        basic.showString("D ")
    } else if (input.soundLevel() < 75) {
        music.ringTone(330)
        basic.showString("E ")
    } else if (input.soundLevel() < 100) {
        music.ringTone(349)
        basic.showString("F ")
    } else if (input.soundLevel() < 125) {
        music.ringTone(392)
        basic.showString("G ")
    } else if (input.soundLevel() < 150) {
        music.ringTone(440)
        basic.showString("A ")
    } else if (input.soundLevel() < 175) {
        music.ringTone(494)
        basic.showString("B ")
    } else {
        music.ringTone(523)
        basic.showString("High C ")
    }
})
