$(document).on("mousemove", function (event) {

  $("img.i_have").css("width", event.pageX)
  $("img.i_have").css("height", event.pageY)

  $("img.nothing").css("width", $(window).width() - event.pageX)
  $("img.nothing").css("height", event.pageY)

  $("img.to").css("width", event.pageX)
  $("img.to").css("height", $(window).height() - event.pageY)

  $("img.say").css("width", $(window).width() - event.pageX)
  $("img.say").css("height", $(window).height() - event.pageY)

})
