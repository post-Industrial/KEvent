
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.448927, lng: 30.459067 },
        zoom: 15
    });
}
$(function () {
    $('#datetimepicker6').datetimepicker({
        sideBySide: true
    });
    $('#datetimepicker7').datetimepicker({
        useCurrent: false, //Important! See issue #1075
        sideBySide: true
    });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
});