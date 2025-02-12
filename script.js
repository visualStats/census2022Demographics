$(document).ready(function () {
    // Your code here
    renderCountySelect();
    $('#select-county,#select-sex,#select-age ').change(renderCountyMap);
    $("#download-ed-data").on("click", downloadCountyCsv);
    $("#download-sa-data").on("click", downloadEdCsv);

});

var countyMapConfig = {};
var edMapConfig = {};
var edSelectedName = "";

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
};

renderCountyMap = function () {
    $("#spinner-overlay").fadeIn(); // Show the spinner overlay
    $("#county-map-wrapper .card-header").text($("#select-county option:selected").text() + " - " + $("#select-sex option:selected").text() + " : " + $("#select-age option:selected").text());
    $("#county-map-wrapper").show();
    $('#county-map').empty();
    //get a list of ed'd for more efficient query

    $.getJSON("maps/counties/" + $("#select-county").val() + ".geojson", function (data) {
        countyMapConfig = $.extend(true, {}, config.countyMap);
        $.each(data.features, function (index, feature) {
            countyMapConfig.data.datasets[0].api.query.data.params.dimension["C04167V04938"].category.index.push(feature.properties.ED_GUID);
        });

        countyMapConfig.options.geojson = "maps/counties/" + $("#select-county").val() + ".geojson";
        countyMapConfig.data.datasets[0].api.query.data.params.dimension["C03738V04487"].category.index = [$("#select-sex").val()];
        countyMapConfig.data.datasets[0].api.query.data.params.dimension["C03737V04485"].category.index = [$("#select-age").val()];
        countyMapConfig.tooltipTitle = $("#select-sex option:selected").text() + " : " + $("#select-age option:selected").text();
        pxWidget.draw.init("map", "county-map", countyMapConfig, function () {
            $("#spinner-overlay").fadeOut(); // Hide spinner after AJAX completes
        });
    });


};

downloadCountyCsv = function () {
    $("#spinner-overlay").fadeIn(); // Show the spinner overlay
    var csvConfig = $.extend(true, {}, countyMapConfig.data.datasets[0].api.query.data);
    csvConfig.params.extension.format = {
        "type": "CSV",
        "version": "1.0"
    };
    $.ajax({
        url: "https://ws.cso.ie/public/api.jsonrpc",
        type: "POST",
        dataType: "json",
        data: JSON.stringify(csvConfig),
        success: function (response) {
            const csvData = response.result; // Assuming response.result contains CSV text
            const blob = new Blob([csvData], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = $("#select-county option:selected").text() + ".csv"; // File name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
        complete: function () {
            $("#spinner-overlay").fadeOut(); // Hide spinner after AJAX completes 
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

renderEdMap = function (guid, areaName, value) {
    edSelectedName = areaName;
    $("#spinner-overlay").fadeIn(); // Show the spinner overlay
    $('#ed-map').empty();

    //get a list of ed'd for more efficient query

    $.getJSON("maps/eds/" + guid + ".geojson", function (data) {
        edMapConfig = $.extend(true, {}, config.edMap);
        var myModal = new bootstrap.Modal(document.getElementById('ed-modal'));
        $("#ed-modal .modal-title").text(areaName + " - " + $("#select-sex option:selected").text() + " : " + $("#select-age option:selected").text() + " (Total : " + value + ")");
        myModal.show();
        $.each(data.features, function (index, feature) {
            edMapConfig.data.datasets[0].api.query.data.params.dimension["C04172V04943"].category.index.push(feature.properties.SA_GUID_2022);
        });
        edMapConfig.options.geojson = "maps/eds/" + guid + ".geojson";
        edMapConfig.data.datasets[0].api.query.data.params.dimension["C03738V04487"].category.index = [$("#select-sex").val()];
        edMapConfig.data.datasets[0].api.query.data.params.dimension["C03737V04485"].category.index = [$("#select-age").val()];
        edMapConfig.tooltipTitle = $("#select-sex option:selected").text() + " : " + $("#select-age option:selected").text();
        pxWidget.draw.init("map", "ed-map", edMapConfig, function () {
            $("#spinner-overlay").fadeOut(); // Hide spinner after AJAX completes
        });
    });
};

downloadEdCsv = function () {
    $("#spinner-overlay").fadeIn(); // Show the spinner overlay
    var csvConfig = $.extend(true, {}, edMapConfig.data.datasets[0].api.query.data);
    csvConfig.params.extension.format = {
        "type": "CSV",
        "version": "1.0"
    };


    $.ajax({
        url: "https://ws.cso.ie/public/api.jsonrpc",
        type: "POST",
        dataType: "json",
        data: JSON.stringify(csvConfig),
        success: function (response) {
            const csvData = response.result; // Assuming response.result contains CSV text
            const blob = new Blob([csvData], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = edSelectedName.replace(/[ ,]/g, '_').toLowerCase() + "_" + $("#select-sex option:selected").text().toLowerCase() + "_" + $("#select-age option:selected").text().toLowerCase() + ".csv"; // File name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
        complete: function () {
            $("#spinner-overlay").fadeOut(); // Hide spinner after AJAX completes 
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
};
