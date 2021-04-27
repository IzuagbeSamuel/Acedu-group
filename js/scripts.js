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