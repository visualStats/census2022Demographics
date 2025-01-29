$(document).ready(function () {
    // Your code here
    renderCountySelect();
    $('#select-county').change(renderCountyMap);
});

renderCountySelect = function () {
    $.each(config.counties, function (index, county) {
        $('#select-county').append($('<option>', {
            value: county.code,
            text: county.name
        }));
    });
}

renderCountyMap = function () {
    var mapConfig = $.extend(true, {}, config.countyMap);
    mapConfig.options.geojson = "maps/counties/" + $("#select-county").val() + ".geojson";
    //mapConfig.options.geojson = "https://cdn.jsdelivr.net/gh/visualStats/gaaDemographics/maps/counties/2ae19629-14a8-13a3-e055-000000000001.geojson";
    pxWidget.draw.init("map", "county-map", mapConfig)
}