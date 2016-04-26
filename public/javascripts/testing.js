$(function(){
    var key = 'juana';
    getObject(key);
});

function dataSample(){
    return {
        cuco: {color: "green"},
        juana: {color: "blue"},
        pepe: {color: "yellow"}
    };
}
function getObject(key){
    var data = dataSample();
    console.log(data[key]);
}
