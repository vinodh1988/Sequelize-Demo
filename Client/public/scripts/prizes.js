


$(document).ready(function(){
    $('#y').click(function(){

        let year=Number($('#year').val());
        if(year>=1900 && year<=2019)
            {
                    $.get("http://localhost:4344/prizes/all/"+year,function(data){
                        let code="";
                        printAwards(data);
                    });
            }
        else
            alert('invalid year');

    });

    $('#c').click(function(){

    });

    $('#ync').click(function(){

    });
})

function printAwards(data){
    let code="";
    for(let x=0;x<data.length;x++){
        code+="<div class='alert alert-warning'>";
        code+="<h4>"+data[x].year+"</h4>";
        code+="<h5> Category:"+data[x].category+"</h5>";
        code+="<h5>Laureates</h5>";
        for(let y in data[x].laureates){
            
            code+="<hr>";
            code+="<br><b>Name</b>"+data[x].laureates[y].firstname;
            code+="<br><b>Motivation</b>"+data[x].laureates[y].motivation;
        }
        code+="</div>";
    }
    $('#data').html(code);
}