$(document).ready(function () {
    // Your code here
    renderCountySelect();
    $('#select-county,#select-sex,#select-age ').change(renderCountyMap);

    var myModalEl = document.getElementById('ed-modal')

    myModalEl.addEventListener('hide.bs.modal', function () {
        // $('#ed-map-wrapper').empty();
    });
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
    $('#county-map').empty();
    //get a list of ed'd for more efficient query
    var mapConfig = $.extend(true, {}, config.countyMap);
    mapConfig.options.geojson = "maps/counties/" + $("#select-county").val() + ".geojson";
    mapConfig.data.datasets[0].api.query.data.params.dimension["C03738V04487"].category.index = [$("#select-sex").val()];
    mapConfig.data.datasets[0].api.query.data.params.dimension["C03737V04485"].category.index = [$("#select-age").val()];
    mapConfig.tooltipTitle = $("#select-sex option:selected").text() + " : " + $("#select-age option:selected").text();

    pxWidget.draw.init("map", "county-map", mapConfig)
}
renderEdMap = function (guid) {
    $('#ed-map').empty();
    const myModal = new bootstrap.Modal(document.getElementById('ed-modal'));
    myModal.show();
    // myModal.addEventListener('shown.bs.modal', function () {
    // $('#ed-map-wrapper').append(`<div id='ed-map-${guid}' class="pxwidget"></div>`);
    var edMapConfig = $.extend(true, {}, config.edMap);
    edMapConfig.options.geojson = "maps/eds/" + guid + ".geojson";
    edMapConfig.data.datasets[0].api.query.data.params.dimension["C03738V04487"].category.index = [$("#select-sex").val()];
    edMapConfig.data.datasets[0].api.query.data.params.dimension["C03737V04485"].category.index = [$("#select-age").val()];
    edMapConfig.tooltipTitle = $("#select-sex option:selected").text() + " : " + $("#select-age option:selected").text();

    pxWidget.draw.init("map", "ed-map", edMapConfig)
    //  });



}