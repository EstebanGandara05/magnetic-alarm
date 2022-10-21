input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.X))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.X) < 150) {
        basic.showIcon(IconNames.Angry)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
