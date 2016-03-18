(function(){
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
                className: 'facebook-serie'}
        ]
    }, {
        donut: true,
        chartPadding: 0,
        donutWidth: 20,
        startAngle: 270,
        total: 100,
        showLabel: false
    });
})();
