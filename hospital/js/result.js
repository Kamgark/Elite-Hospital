// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://wk8zqmti4g.execute-api.us-east-1.amazonaws.com/dev_0/', true);

//initialize all the form parameters
var product = document.getElementById("product");
var provider = document.getElementById("provider");
var type = document.getElementById("type");
var quantity = document.getElementById("quantity");
var unit = document.getElementById("unit");
var price = document.getElementById("price");


var mname = document.getElementById("mname");
var mprovider = document.getElementById("mprovider");
var mtype = document.getElementById("mtype");
var mqu = document.getElementById("mqu");
var mprice = document.getElementById("mprice");
var mstatus=document.getElementById("mstatus");
var newpay=document.getElementById("newpay")

var tag = document.getElementsByTagName("label");
var input
var i = 0
var dt = new Date().getTime();
var fulldata={}
//Initialize all buttons

//Delete Button
var delete_button = document.getElementById("delete");
delete_button.addEventListener("click", function () { mydelete(this.value); });

//Edit Button
// var edit_button = document.getElementById("edit");
// edit_button.addEventListener("click", function () { myedit(this.value); });

//Add Button
var add_button = document.getElementById("add");
add_button.addEventListener("click", function () { myadd(); });

var upload_button = document.getElementById("upload");
upload_button.addEventListener("click", function () { uploadFile(); });

//Cancel Button
var cancel1_button = document.getElementById("cancel1");
cancel1_button.addEventListener("click", function () { mycancel1(this.value); });

//Cancel Buttn
// var cancel2_button = document.getElementById("cancel2");
// cancel2_button.addEventListener("click", function () { mycancel2(this.value); });



    // function myedit(s) {
    //     // Create a request variable and assign a new XMLHttpRequest object to it.
    //     var request3 = new XMLHttpRequest();

    //     // Open a new connection, using the GET request on the URL endpoint
    //     request3.open('GET', 'https://wk8zqmti4g.execute-api.us-east-1.amazonaws.com/dev_0/get-item?param1=' + s, true);

    //     request3.onload = function () {
    //         arr = JSON.parse(this.response);

    //         document.getElementById("product").value = arr.name;
    //         provider.value = arr.family_name;
    //         type.value = arr.store;
    //         quantity.value = arr.quantity;
    //         unit.value = arr.status;
    //         price.value = arr.due_payment;


    //         $('#verticalcenter').modal('hide');
    //     }
    //     // Send request
    //     request3.send();
    // }

function mycancel1(s) {
    // edit_button.value = "";
    delete_button.value = "";
}

function mycancel2(s) {

    document.getElementById("product").value = "";
    //console.log(document.getElementById("name").value);
    provider.value = "";
    type.value = "";
    quantity.value = "";
    unit.value = "";
    price.value = "";
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
        // if (edit_button.value == "") {
        //     edit_button.value = "";
        //     delete_button.value = "";
        // } else {
            add_button.value = "";
            delete_button.value = "";
            document.location.reload();
        // }


    };
    request2.send(json);
}
function uploadFile() {
            
    //set all attributes
    var arr = {};

        //uuid
        arr["result_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        
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
    // document.location.reload();


}
//Add Doctor to db method
function myadd() {

        //set all attributes
        var arr = {};

        if (add_button.value != "") {
            arr.result_id = add_button.value;
        }
        else {
            //uuid
            arr["result_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }
        // arr.date = fulldata[1];
        // arr.time = fulldata[2];
        // arr.name = fulldata[3];
        // arr.family_name = fulldata[4];
        // arr.client_email = fulldata[5];
        // arr.store = fulldata[6];
        // arr.doctor_name = fulldata[7];
        // arr.doctor_email = fulldata[8];
        // arr.service_name = fulldata[9];
        arr.status = mstatus.value;
        arr.due_payment = newpay.value;
        // arr.price = fulldata[12];
        // arr.result = fulldata[13];



        //Prepare var to REST call api
        var json = JSON.stringify(arr);
        console.log(json);
        //Make REST Api call
        var request = new XMLHttpRequest();
        request.open('POST', 'https://wk8zqmti4g.execute-api.us-east-1.amazonaws.com/dev_0/', true);
        request.send(json);

        //Reload Document
        document.location.reload();

    
}
 
//Modal function
function edit_delete_modal(data) {

    //Modal Information Config
    mname.textContent = data[3];
    mprovider.innerHTML = data[4];
    mtype.innerHTML = data[5];
    mqu.textContent = data[6];
    mdate.textContent = data[1];
    mtime.textContent = data[2];
    mcemail.textContent = data[12];
    mdemail.textContent = data[13];
    moprice.textContent = data[10];
    mprice.textContent = data[7];
    mresult.textContent = data[11];

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
                arr[i].due_payment,
                arr[i].price,
                arr[i].result,
                arr[i].client_email,
                arr[i].doctor_email
            ]).draw(false);
        }

        //On select metod start process
        $('#myTable tbody').on('click', 'tr', function () {

            //Get the data On the Table
            var data = table.row(this).data();
            fulldata=table.row(this).data();
            
            //Initialize both buttons for further use
            add_button.value = data[0];
            delete_button.value = data[0];

            //Call Function to start process
            edit_delete_modal(data);
        });

        table.column(0).visible(false);

    });
}

// Send request
request.send();










