(function(){
    createDonutChart();
    semanticInitialization();
    activateSidebar();
})();

function createDonutChart(){
    new Chartist.Pie('.ct-chart', {
        series: [
            {
                value: 25,
                className: 'github-serie'},
            {
                value: 25,
                className: 'linkedin-serie'},
            {
                value: 25,
                className: 'google-serie'},
            {
                value: 25,
                className: 'null-serie'}
        ]
    }, {
        donut: true,
        chartPadding: 0,
        donutWidth: 25,
        startAngle: 270,
        total: 100,
        showLabel: false
    });
}
function semanticInitialization(){
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });
}
function activateSidebar(){
    $('.sidebar-link').click(function () {
        $('.ui.sidebar').sidebar('toggle');
    });
}
