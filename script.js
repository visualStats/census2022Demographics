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
    $("#county-map-wrapper").show();
    $('#county-map').empty();
    //get a list of ed'd for more efficient query

    $.getJSON("maps/counties/" + $("#select-county").val() + ".geojson", function (data) {
        var mapConfig = $.extend(true, {}, config.countyMap);
        $.each(data.features, function (index, feature) {
            mapConfig.data.datasets[0].api.query.data.params.dimension["C04167V04938"].category.index.push(feature.properties.ED_GUID);
        });

        mapConfig.options.geojson = "maps/counties/" + $("#select-county").val() + ".geojson";
        mapConfig.data.datasets[0].api.query.data.params.dimension["C03738V04487"].category.index = [$("#select-sex").val()];
        mapConfig.data.datasets[0].api.query.data.params.dimension["C03737V04485"].category.index = [$("#select-age").val()];
        mapConfig.tooltipTitle = $("#select-sex option:selected").text() + " : " + $("#select-age option:selected").text();
        pxWidget.draw.init("map", "county-map", mapConfig);

        $("#download-ed-data").on("click", function () {
            var csvConfig = $.extend(true, {}, mapConfig.data.datasets[0].api.query.data);
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
                error: function (jqXHR, textStatus, errorThrown) {

                }
            });



        })
    });


}
renderEdMap = function (guid, areaName) {

    $('#ed-map').empty();

    //get a list of ed'd for more efficient query

    $.getJSON("maps/eds/" + guid + ".geojson", function (data) {
        var edMapConfig = $.extend(true, {}, config.edMap);
        var myModal = new bootstrap.Modal(document.getElementById('ed-modal'));
        myModal.show();
        var edMapConfig = $.extend(true, {}, config.edMap);
        $.each(data.features, function (index, feature) {
            edMapConfig.data.datasets[0].api.query.data.params.dimension["C04172V04943"].category.index.push(feature.properties.SA_GUID_2022);
        });
        edMapConfig.options.geojson = "maps/eds/" + guid + ".geojson";
        edMapConfig.data.datasets[0].api.query.data.params.dimension["C03738V04487"].category.index = [$("#select-sex").val()];
        edMapConfig.data.datasets[0].api.query.data.params.dimension["C03737V04485"].category.index = [$("#select-age").val()];
        edMapConfig.tooltipTitle = $("#select-sex option:selected").text() + " : " + $("#select-age option:selected").text();
        pxWidget.draw.init("map", "ed-map", edMapConfig);

        $("#download-sa-data").on("click", function () {
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
                    a.download = areaName + ".csv"; // File name
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                },
                error: function (jqXHR, textStatus, errorThrown) {

                }
            });



        })
    });
}