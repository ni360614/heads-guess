input.onGesture(Gesture.LogoUp, function () {
    let text_list2: number[] = []
    index = randint(0, text_list2.length - 1)
    basic.showString("" + (text_list2[index]))
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
let index = 0
let text_list = ["PUPPY", "CLOCK", "NIGHT"]
game.startCountdown(30000)
