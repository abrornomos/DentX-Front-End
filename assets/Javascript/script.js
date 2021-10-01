var date = new Date()
var current_year = date.getFullYear()
var month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]


$("#birth_year_1").on("click",function(){
    if ($("#year_holder").val()==""){
        $("#year_holder").val(1900)
    }
    else if (parseInt($("#year_holder").val())>=current_year){
        $("#year_holder").val(1900)
    }
    else{
        $("#year_holder").val(parseInt($("#year_holder").val())+1)
    }
    
})


$("#birth_year_2").on("click",function(){
    if ($("#year_holder").val()==""){
        $("#year_holder").val(1900)
    }
    else if (parseInt($("#year_holder").val())<=1900){
        $("#year_holder").val(current_year)
    }
    else{
        $("#year_holder").val(parseInt($("#year_holder").val())-1)
    }
    
})

$("#birth_month_1").on("click",function(){
    if ($("#month_holder").val()==""){
        $("#month_holder").val("Январь")
    }
    
    else{
        for (var i=0;i<month.length;i++){
            if (i==month.length-1){
                $("#month_holder").val(month[0])
                break
            }
            else if ($("#month_holder").val()==month[i]){
                $("#month_holder").val(month[i+1])
                break
            }
        }
    }
})


$("#birth_month_2").on("click",function(){
    if ($("#month_holder").val()==""){
        $("#month_holder").val("Январь")
    }
    
    else{
        for (var i=month.length;i>=0;i--){
            if (i==0){
                $("#month_holder").val(month[month.length-1])
                break
            }
            else if ($("#month_holder").val()==month[i]){
                $("#month_holder").val(month[i-1])
                break
            }
        }
    }
    
})


$("#birth_day_1").on("click",function(){
    if ($("#day_holder").val()==""){
        $("#day_holder").val(1)
    }
    else if (parseInt($("#day_holder").val())>=31){
        $("#day_holder").val(1)
    }
    else{
        $("#day_holder").val(parseInt($("#day_holder").val())+1)
    }
    
})

$("#birth_day_2").on("click",function(){
    
    if ($("#day_holder").val()==""){
        $("#day_holder").val(1)
    }
    else if (parseInt($("#day_holder").val())<=1){
        $("#day_holder").val(31)
    }
    else {
        $("#day_holder").val(parseInt($("#day_holder").val())-1)
    }
    
})

$("#allergy_selector").change(function(){
    if ($("#allergy_selector").val()==1){
        $("#allergy_input").addClass("display_block").removeClass("display_none")
    }
    else{
        $("#allergy_input").removeClass("display_block").addClass("display_none")
    }
})

$("#other_illnes").change(function(){
    if ($("#other_illnes").is(":checked")){
        $("#other_illnes_holder").addClass("display_block").removeClass("display_none")
    }
    else{
        $("#other_illnes_holder").removeClass("display_block").addClass("display_none")
    }
})


$("#medicine_selector").change(function(){
    if ($("#medicine_selector").val()==1){
        $("#medicine_input").addClass("display_block").removeClass("display_none")
    }
    else{
        $("#medicine_input").removeClass("display_block").addClass("display_none")
    }
})


$("#pregnancy_selector").change(function(){
    if ($("#pregnancy_selector").val()==1){
        $("#pregnancy_input_1").addClass("display_block").removeClass("display_none")
        $("#pregnancy_input_2").addClass("display_block").removeClass("display_none")
    }
    else{
        $("#pregnancy_input_1").removeClass("display_block").addClass("display_none")
        $("#pregnancy_input_2").removeClass("display_block").addClass("display_none")
    }
})

$("#my_profile_btn").on("click",function(){
    if ($("#my_dropdown").hasClass("display_none")){
        $("#my_dropdown").addClass("display_absolute").removeClass("display_none")
    }
    else{
        $("#my_dropdown").removeClass("display_absolute").addClass("display_none")
    }
})
$("#full-screen").on("click",function(){
    if ($("#full-screen2").hasClass("display_none")){
        $("#full-screen2").addClass("display_absolute").removeClass("display_none")
        $("#full-screen").addClass("display_none")
        $(".overflow").addClass("full")
        $(".controls").addClass("full-con")
    }
    else{
        $("#full-screen2").removeClass("display_absolute").addClass("display_none")
    }
})
$("#full-screen2").on("click",function(){
    if ($("#full-screen").hasClass("display_none")){
        $("#full-screen").addClass("display_absolute").removeClass("display_none")
        $("#full-screen2").addClass("display_none")
        $(".overflow").removeClass("full")
        $(".controls").removeClass("full-con")
    }
    else{
        $("#full-screen").removeClass("display_absolute").addClass("display_none")
    }
})
$("td").on("dblclick",function(){
    if ($(".modal-form").hasClass("display_none")){
        $(".modal-form").addClass("display_absolute").removeClass("display_none")
    }
    else{
        $(".modal-form").removeClass("display_absolute").addClass("display_none")
    }
})
$(".times").on("click",function(){
    if ($(".modal-form").hasClass("display_absolute")){
        $(".modal-form").addClass("display_none").removeClass("display_absolute")
    }
    else{
        $(".modal-form").removeClass("display_absolute").addClass("display_none")
    }
})


$("#birth_year_1").change(function(){
    if (parseInt(this.val())>=current_year){
        this.val(current_year)
    }
})
/*
$("#my_search").change(function(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("search_result").innerHTML =
        this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}) 
*/
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("search_result").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
  }