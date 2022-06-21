$("#button_1").on("click", function(){
    fetch("https://grizzly-opalescent-dry.glitch.me/HW_5/json/degrees.json")
    .then((response) => response.json())
    .then((data) => $(function () {
        var dat = $(data.my_degrees[0]);
        $("th.program").html(dat[0].program);
        $("th.degree_name").html(dat[0].type);
        $("th.year").html(dat[0].year);
        $("th.school").html(dat[0].school);
    }));
    })

$("#button_2").on("click", function(){
    fetch("https://grizzly-opalescent-dry.glitch.me/HW_5/json/degrees.json")
    .then((response) => response.json())
    .then((data) => $(function () {
        var dat = $(data.my_degrees[1]);
        $("th.program").html(dat[0].program);
        $("th.degree_name").html(dat[0].type);
        $("th.year").html(dat[0].year);
        $("th.school").html(dat[0].school);
    }));
    })

$("#button_3").on("click", function(){
    fetch("https://grizzly-opalescent-dry.glitch.me/HW_5/json/degrees.json")
    .then((response) => response.json())
    .then((data) => $(function () {
        var dat = $(data.my_degrees[2]);
        $("th.program").html(dat[0].program);
        $("th.degree_name").html(dat[0].type);
        $("th.year").html(dat[0].year);
        $("th.school").html(dat[0].school);
    }));
    })

$("#button_1").on("click", function() {
    document.getElementById("button_1").className="dead";
    document.getElementById("button_2").className="live";
    document.getElementById("button_3").className="live";
})

$("#button_2").on("click", function() {
    document.getElementById("button_1").className="live";
    document.getElementById("button_2").className="dead";
    document.getElementById("button_3").className="live";
})

$("#button_3").on("click", function() {
    document.getElementById("button_1").className="live";
    document.getElementById("button_2").className="live";
    document.getElementById("button_3").className="dead";
})