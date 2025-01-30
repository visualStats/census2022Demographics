$(document).ready(function () {
    // Your code here
    renderCountySelect();
    $('#select-county,#select-sex,#select-age ').change(renderCountyMap);
});

renderCountySelect = function () {
    config.counties.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
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
    mapConfig.data.datasets[0].api.query.data.params.dimension["C03738V04487"].category.index = [$("#select-sex").val()];
    mapConfig.data.datasets[0].api.query.data.params.dimension["C03737V04485"].category.index = [$("#select-age").val()];

    pxWidget.draw.init("map", "county-map", mapConfig)
}