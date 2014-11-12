var employees = [
        {
            name : "David",
            phone: "800-555-5555"

        },

        {
            name : "Bob",
            phone: "303-123-4567"

        }
    ];



/*
                       d8b          
                       Y8P          
                                    
88888b.d88b.   8888b.  888 88888b.  
888 "888 "88b     "88b 888 888 "88b 
888  888  888 .d888888 888 888  888 
888  888  888 888  888 888 888  888 
888  888  888 "Y888888 888 888  888 

)
*/


$(document).ready(function(){
    render_employee_table(employees)
    


    $("#add").click(function() {
         console.log('clicked!');
         render_edit_box();
    });



})


function terminate_employee(index){ 
    console.log(index);

    employees.splice(index, 1);

    render_employee_table(employees)
   


}



function render_edit_box(){

    var html = '<div><label>name</label><input id="edit_name"></div><div><label>phone</label> <input id="edit_phone"></div>';

    html += "<button id='addit'>Add It</button>";
    
    $('#edit_box').html(html); 


    $('#addit').click(function(){
        console.log("addit");
        var e = { 
            name : $("#edit_name").val(),
            phone: $("#edit_phone").val()

        }

        employees.push(e);
        render_employee_table(employees)
         
        $("#edit_box").html('');

    })

      
}



function render_employee_table(data){


    console.log('render employee table')
    var html;

    html = "<table>";


    data.forEach(function(employee, index){

        html += "<tr>";
        html += "<td>"+ employee.name +"</td>";
        html += "<td>"+ employee.phone +"</td>";
        html += "<td><button class='delete' index='"+index+"'>Del</button></td>";
        html += "</tr>";
    })


    html += "</table>";

    $("#employee_list").html(html); 

    $(".delete").click(function(){
       console.log('delete clicked');
       terminate_employee($(this).attr("index"));
    })

    


}