let left_t_strip: neopixel.Strip = null
let strip: neopixel.Strip = null
let left_b_strip: neopixel.Strip = null
input.onGesture(Gesture.EightG, function () {
    doC()
})
input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
})
function doB () {
    left_t_strip.show()
    left_t_strip.setPixelColor(48, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(47, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(32, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(31, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    strip.setPixelColor(167, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(152, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(135, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(120, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(24, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(185, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(166, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(153, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(134, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(121, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(102, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(57, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(38, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(25, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(250, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(229, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(218, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(197, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(186, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(165, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(154, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(133, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(122, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(101, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(90, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(69, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(58, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(37, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(26, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(251, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(228, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(219, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(196, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(187, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(164, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(155, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(132, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(123, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(91, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(100, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(68, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(59, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(36, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(27, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(252, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(227, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(220, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(195, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(188, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(163, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(156, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(131, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(124, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(99, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(92, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(67, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(60, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(35, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(28, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(253, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(254, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(255, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(226, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(225, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(224, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(221, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(222, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(223, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(194, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(193, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(192, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(189, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(190, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(191, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(162, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(161, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(160, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(157, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(158, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(159, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(130, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(129, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(128, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(125, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(126, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(127, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(98, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(97, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(96, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(93, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(94, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(95, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(66, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(65, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(64, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(61, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(62, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(63, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(34, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(33, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(32, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(29, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(30, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(31, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(249, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.show()
    left_b_strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
}
input.onSound(DetectedSound.Loud, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    left_b_strip.showColor(neopixel.colors(NeoPixelColors.Black))
    left_t_strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
function doA () {
    left_t_strip.show()
    left_t_strip.setPixelColor(50, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(45, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(34, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(29, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(49, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(30, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(48, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(31, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
    left_t_strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.show()
    left_b_strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.setPixelColor(32, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.setPixelColor(33, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.setPixelColor(29, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.setPixelColor(34, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.setPixelColor(50, neopixel.colors(NeoPixelColors.Blue))
    left_b_strip.setPixelColor(61, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    strip.setPixelColor(245, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(234, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(170, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(149, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(138, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(117, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(85, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(74, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(53, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(42, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(233, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(201, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(169, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(118, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(86, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(41, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(247, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(232, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(168, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(119, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(87, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(40, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(231, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(167, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(120, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(88, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(39, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(230, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(198, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(166, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(121, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(89, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(38, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(250, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(229, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(165, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(154, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(133, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(122, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(90, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(69, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(58, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(37, neopixel.colors(NeoPixelColors.Blue))
}
function doC () {
    left_b_strip.setBrightness(10)
    left_b_strip.showRainbow(200, 270)
    left_t_strip.setBrightness(10)
    left_t_strip.showRainbow(200, 270)
    strip.setBrightness(10)
    strip.showRainbow(200, 270)
}
basic.forever(function () {
    doA()
})
