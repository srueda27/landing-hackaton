$('#inicio-span').click(function() {
    var elmnt = document.getElementById('CaliHacktech');
    elmnt.scrollIntoView(true);
});

$('#inscripcion-span').click(function() {
    var elmnt = document.getElementById('Inscripcion');
    elmnt.scrollIntoView(false);
});

$('#patrocinadores-span').click(function() {
    var elmnt = document.getElementById('Patrocinadores');
    elmnt.scrollIntoView(true);
});

$('#retos-span').click(function() {
    var elmnt = document.getElementById('Retos');
    elmnt.scrollIntoView(true);
});

$('#jurados-span').click(function() {
    var elmnt = document.getElementById('Jurados');
    $("#Mentores").addClass('inactive');
    $("#Jurados").removeClass('inactive');
    elmnt.scrollIntoView(true);
});

$('#mentores-span').click(function() {
    var elmnt = document.getElementById('Mentores');
    $("#Mentores").removeClass('inactive');
    $("#Jurados").addClass('inactive');
    elmnt.scrollIntoView(true);
});

$(document).ready(function(){
    $('.toggle-btn').click(function() {
        $('#Mentores').toggleClass('inactive');
        $('#Jurados').toggleClass('inactive');
    });
});