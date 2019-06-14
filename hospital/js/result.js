// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://wk8zqmti4g.execute-api.us-east-1.amazonaws.com/dev_0/', true);

//initialize all the form parameters
var ename = document.getElementById("ename");
var efamily = document.getElementById("efamily");
var estore = document.getElementById("estore");
var eservice = document.getElementById("eservice");
var equantity = document.getElementById("equantity");
var eprice = document.getElementById("eprice");
var estatus = document.getElementById("estatus");

var mname = document.getElementById("mname");
var mfamily = document.getElementById("mfamily");
var mdoctor = document.getElementById("mdoctor");
var mservice = document.getElementById("mservice");
var mstore = document.getElementById("mstore");
var mprice = document.getElementById("mprice");

var tag = document.getElementsByTagName("label");
var input
var i = 0
var dt = new Date().getTime();
var dataselected;

//Initialize all buttons
var send_button = document.getElementById("send");
send_button.addEventListener("click", function () { mysend(this.value); });

var send_result_button = document.getElementById("send_result");
send_result_button.addEventListener("click", function () { mysendresult(this.value); });

var resend_button = document.getElementById("resend");
resend_button.addEventListener("click", function () { myresend(this.value); });
//Delete Button
var delete_button = document.getElementById("delete");
delete_button.addEventListener("click", function () { mydelete(this.value); });

//Edit Button
var edit_button = document.getElementById("edit");
edit_button.addEventListener("click", function () { myedit(this.value); });

//Add Button
var add_button = document.getElementById("add");
add_button.addEventListener("click", function () { myadd(); });

//Cancel Button
var cancel1_button = document.getElementById("cancel1");
cancel1_button.addEventListener("click", function () { mycancel1(this.value); });

//Cancel Buttn
var cancel2_button = document.getElementById("cancel2");
cancel2_button.addEventListener("click", function () { mycancel2(this.value); });

var cancel3_button = document.getElementById("cancel3");
cancel3_button.addEventListener("click", function () { mycancel3(this.value); });

function mysend(s) {
        $('#verticalcenter').modal('hide');
}

function mysendresult() {
            
    //set all attributes
    var arr = {};

        //uuid
        arr["result_id"] = edit_button.value;
        
        var files = document.getElementById('input-file-now').files;
            if (files.length > 0) {
                getBase64(files[0]);
            }
            function getBase64(file) {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    arr.file=reader.result;
                    console.log(arr.file)
                };
                reader.onerror = function (error) {
                  console.log('Error: ', error);
                };
             }
    //Prepare var to REST call api
    var json = JSON.stringify(arr);
    console.log(json);
    //Make REST Api call
    var request = new XMLHttpRequest();
    request.open('POST', 'https://0jydgj6uc8.execute-api.us-east-1.amazonaws.com/dev_0', true);
    request.send(json);

    //Reload Document
    document.location.reload();


}
function myresend() {           
    //set all attributes
    var arr = {};

        //uuid
        arr["result_id"] = edit_button.value;
    //Prepare var to REST call api
    var json = JSON.stringify(arr);
    console.log(json);
    //Make REST Api call
    var request = new XMLHttpRequest();
    request.open('POST', 'https://0jydgj6uc8.execute-api.us-east-1.amazonaws.com/dev_0', true);
    request.send(json);

    //Reload Document
    document.location.reload();


}

function myedit(s) {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    // var request3 = new XMLHttpRequest();

    // // Open a new connection, using the GET request on the URL endpoint
    // request3.open('GET', 'https://wk8zqmti4g.execute-api.us-east-1.amazonaws.com/dev_0/get-item?param1=' + s, true);

    // request3.onload = function () {
    //     arr = JSON.parse(this.response);

        document.getElementById("ename").value = dataselected[3];
        efamily.value = dataselected[4];
        eservice.value = dataselected[7];
        estore.value = dataselected[6];
        equantity.value = dataselected[10];
        eprice.value = dataselected[9];


        $('#verticalcenter').modal('hide');
    // }
    // Send request
    // request3.send();
}

function mycancel1(s) {
    edit_button.value = "";
    delete_button.value = "";
}

function mycancel2(s) {
    dataselected="";
    document.getElementById("ename").value = "";
        efamily.value = "";
        eservice.value = "";
        estore.value = "";
        equantity.value = "";
        eprice.value = "";
}
function mycancel3(s) {
    edit_button.value = "";
    delete_button.value = "";
}

function mydelete(s) {
    var arr2 = {};
    arr2.result_id = s;
    var json = JSON.stringify(arr2);
    //alert(json);
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request2 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request2.open('DELETE', 'https://wk8zqmti4g.execute-api.us-east-1.amazonaws.com/dev_0/', true);
    request2.onload = function () {
        // Do something with the retrieved data ( found in xmlhttp.response )
        if (edit_button.value == "") {
            edit_button.value = "";
            delete_button.value = "";
        } else {
            edit_button.value = "";
            delete_button.value = "";
            document.location.reload();
        }


    };
    request2.send(json);
}

//Add Doctor to db method
function myadd() {

    //Validation Form
    // if (document.getElementById("product").value == "" || provider.value == "" || price.value == "" || quantity.value == "" || type.value == "" || unit.value == "Selecciona un Opcion") {

    //     //Initialize tags
    //     tag[0].style.color = "black";
    //     tag[0].style.fontWeight = 'normal';
    //     tag[1].style.color = "black";
    //     tag[1].style.fontWeight = 'normal';
    //     tag[2].style.color = "black";
    //     tag[2].style.fontWeight = 'normal';
    //     tag[3].style.color = "black";
    //     tag[3].style.fontWeight = 'normal';
    //     tag[4].style.color = "black";
    //     tag[4].style.fontWeight = 'normal';
    //     tag[5].style.color = "black";
    //     tag[5].style.fontWeight = 'normal';

    //     //Complete form Message
    //     if (i == 0) {
    //         var label = document.createElement("label");
    //         var h5 = document.getElementById("h5");
    //         label.innerHTML = "*Porfavor de completar los espacios marcados en rojo"
    //         label.style.color = "red";
    //         h5.appendChild(label);
    //         i++;
    //     }

    //     //Change or complete the following input field
    //     if (document.getElementById("product").value == "") {
    //         tag[0].style.color = "red";
    //         tag[0].style.fontWeight = 'bold';
    //     }

    //     if (provider.value == "") {
    //         tag[1].style.color = "red";
    //         tag[1].style.fontWeight = 'bold';
    //     }

    //     if (type.value == "") {
    //         tag[2].style.color = "red";
    //         tag[2].style.fontWeight = 'bold';
    //     }

    //     if (quantity.value == "") {
    //         tag[3].style.color = "red";
    //         tag[3].style.fontWeight = 'bold';
    //     }

    //     if (unit.value == "") {
    //         tag[4].style.color = "red";
    //         tag[4].style.fontWeight = 'bold';
    //     }

    //     if (price.value == "") {
    //         tag[5].style.color = "red";
    //         tag[5].style.fontWeight = 'bold';
    //     }

    // }

    //When there is no error call this else
    // else {

        //set all attributes
        var arr = {};

        if (edit_button.value != "") {
            arr.result_id = edit_button.value;
        }
        else {
            //uuid
            arr["result_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }
        arr.date=dataselected[1];
        arr.time=dataselected[2];
        arr.name = dataselected[3];
        arr.family_name = dataselected[4];
        arr.client_email = dataselected[12];
        arr.store = dataselected[6];
        arr.doctor_name = dataselected[5];
        arr.doctor_email = dataselected[13];
        arr.service_name = dataselected[7];
        arr.status=document.getElementById("estatus").value;
        arr.due_payment=document.getElementById("equantity").value;
        arr.price = dataselected[9];
        arr.result=dataselected[11];



        //Prepare var to REST call api
        var json = JSON.stringify(arr);
        console.log(json);
        //Make REST Api call
        var request = new XMLHttpRequest();
        request.open('POST', 'https://wk8zqmti4g.execute-api.us-east-1.amazonaws.com/dev_0/', true);
        request.send(json);

        //Reload Document
        document.location.reload();

    // }
}

//Modal function
function edit_delete_modal(data) {

    //Modal Information Config
    mname.textContent = data[3];
    mfamily.innerHTML = data[4];
    mdoctor.innerHTML = data[5];
    mservice.textContent = data[7];
    mstore.textContent = data[6];
    mprice.textContent = data[9];
    //Start Modal
    $('#verticalcenter').modal();
}

request.onload = function () {
    // Begin accessing JSON data here

    //Access the Respone
    var arr = JSON.parse(this.response);

    //Initializer to use the data base
    $(document).ready(function () {

        //Initialize Table and put select attr
        var table = $('#myTable').DataTable({

            //Select a single Item
            select: {
                style: 'single'
            }
        });

        //Add every Item in the Response
        var i;
        for (i = 0; i < arr.length; i++) {

            //Add Row
            table.row.add([
                arr[i].result_id,
                arr[i].date,
                arr[i].time,
                arr[i].name,
                arr[i].family_name,
                arr[i].doctor_name,
                arr[i].store,
                arr[i].service_name,
                arr[i].status,
                arr[i].price,
                arr[i].due_payment,
                arr[i].result,
                arr[i].client_email,
                arr[i].doctor_email
            ]).draw(false);
        }
 
        //On select metod start process
        $('#myTable tbody').on('click', 'tr', function () {

            //Get the data On the Table
            var data = table.row(this).data();
            dataselected= table.row(this).data();
            //Initialize both buttons for further use
            edit_button.value = data[0];
            delete_button.value = data[0];

            //Call Function to start process
            edit_delete_modal(data);
        });

        table.column(0).visible(false);
        // table.column(12).visible(false);
        // table.column(13).visible(false);

    });
}

// Send request
request.send();










