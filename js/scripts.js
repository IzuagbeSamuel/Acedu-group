$(document).ready(function(){
  $("#formOne").submit(function(event){

    let noun = $("#noun").val();
    let adjective = $("#adjective").val();
    let verb = $("#verb").val();
    let pasttense = $("#past-tense").val();
    let adverb = $("#adverb").val();

    $(".noun").append(noun);
    $(".adjective").append(adjective);
    $(".verb").append(verb);
    $(".past-tense").append(pasttense);
    $(".adverb").append(adverb);

    $("#story").show();
    event.preventDefault();
  })
})

$(document).ready(function(){
  $("#formTwo").submit(function(event){
    let name = $("#name").val();
    let address = $("#address").val();

    $(".name").append(name);
    $(".address").append(address);

    $("#letter").show();
    $("#formTwo").hide();
    $("h1").hide();
    event.preventDefault();
    
  })
})

$(document).ready(function(){
$("button#hello").click(
  function(){
  $("ul#victor").prepend("<li>hello</li>")

  $("ul#webpage").prepend("<li>hello</li>")
});

$("button#goodbye").click(
  function(){
  $("ul#victor").append("<li>goodbye</li>")

  $("ul#webpage").append("<li>goodbye</li>")
  });

  $("button#stop").click(
    function(){
    $("ul#victor").append("<li>stop copying me</li>")
  
    $("ul#webpage").append("<li>stop copying me</li>")
    });
});