(function(){
    createDonutChart();
    semanticInitialization();
    activateSidebar();
    activateModal();
    closeSendEmailModal();
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
        total: 125,
        showLabel: false
    });
}
function semanticInitialization(){
    $('.ui.dropdown').dropdown({
        on: 'hover'
    });
    $('.sidebar .ui.dropdown').dropdown();
}
function activateSidebar(){
    $('.sidebar-link').click(function () {
        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
    });
}
function activateModal(){
    $('#openInvitationModal').click(function(){
        $('.ui.modal')
            .modal('setting', 'transition', 'horizontal flip')
            .modal('show');
    });
}
function closeSendEmailModal() {
    $('#closeEmailModal').click(function(){
        $('.ui.modal').modal('hide');
    })
}
