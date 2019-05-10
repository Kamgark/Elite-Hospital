// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://f05q1or3v6.execute-api.us-east-1.amazonaws.com/dev_0/', true);

//initialize all the form parameters
var product = document.getElementById("product");
var provider = document.getElementById("provider");
var type = document.getElementById("type");
var quantity = document.getElementById("quantity");
var unit = document.getElementById("unit");
var price = document.getElementById("price");


var mname = document.getElementById("mname");
// var mprovider = document.getElementById("provider");
var mtype = document.getElementById("mtype");
var mqu = document.getElementById("mqu");
var mprice = document.getElementById("mprice");

var tag = document.getElementsByTagName("label");
var input
var i = 0
var dt = new Date().getTime();

//Initialize all buttons

//Delete Button
var delete_button = document.getElementById("delete");
delete_button.addEventListener("click", function () { mydelete(this.value); });

//Edit Button
var edit_button = document.getElementById("edit");
// edit_button.addEventListener("click", function () { myedit(this.value); });

//Add Button
var add_button = document.getElementById("add1");
add_button.addEventListener("click", function () { myadd(); });

//Cancel Button
var cancel1_button = document.getElementById("cancel1");
cancel1_button.addEventListener("click", function () { mycancel1(this.value); });

//Cancel Buttn
var cancel2_button = document.getElementById("cancel2");
cancel2_button.addEventListener("click", function () { mycancel2(this.value); });



function myedit(s) {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request3 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request3.open('GET', 'https://f05q1or3v6.execute-api.us-east-1.amazonaws.com/dev_0/get-item?param1=' + s, true);

    request3.onload = function () {
        arr = JSON.parse(this.response);


        document.getElementById("product").value = arr.name;
        provider.value = arr.provider;
        type.value = arr.type;
        quantity.value = arr.quantity;
        unit.value = arr.unit;
        price.value = arr.price;


        $('#verticalcenter').modal('hide');
    }
    // Send request
    request3.send();
}

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
    arr2.product_id = s;
    var json = JSON.stringify(arr2);
    //alert(json);
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request2 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request2.open('DELETE', 'https://f05q1or3v6.execute-api.us-east-1.amazonaws.com/dev_0/', true);
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
    if (document.getElementById("mname").value == "" || mprovider.value == "" || mqu.value == "" || mtype.value == "" || mprice.value == "Selecciona un Opcion") {

        //Initialize tags
        tag[0].style.color = "black";
        tag[0].style.fontWeight = 'normal';
        tag[1].style.color = "black";
        tag[1].style.fontWeight = 'normal';
        tag[2].style.color = "black";
        tag[2].style.fontWeight = 'normal';
        tag[3].style.color = "black";
        tag[3].style.fontWeight = 'normal';
        tag[4].style.color = "black";
        tag[4].style.fontWeight = 'normal';
        tag[5].style.color = "black";
        tag[5].style.fontWeight = 'normal';

        //Complete form Message
        if (i == 0) {
            var label = document.createElement("label");
            var h5 = document.getElementById("h5");
            label.innerHTML = "*Porfavor de completar los espacios marcados en rojo"
            label.style.color = "red";
            h5.appendChild(label);
            i++;
        }

        //Change or complete the following input field
        if (document.getElementById("product").value == "") {
            tag[0].style.color = "red";
            tag[0].style.fontWeight = 'bold';
        }

        if (provider.value == "") {
            tag[1].style.color = "red";
            tag[1].style.fontWeight = 'bold';
        }

        if (type.value == "") {
            tag[2].style.color = "red";
            tag[2].style.fontWeight = 'bold';
        }

        if (quantity.value == "") {
            tag[3].style.color = "red";
            tag[3].style.fontWeight = 'bold';
        }

        if (unit.value == "") {
            tag[4].style.color = "red";
            tag[4].style.fontWeight = 'bold';
        }

        if (price.value == "") {
            tag[5].style.color = "red";
            tag[5].style.fontWeight = 'bold';
        }

    }

    //When there is no error call this else
    else {

        //set all attributes
        var arr = {};

        // if (edit_button.value != "") {
        //     arr.product_id = edit_button.value;
        // }
        // else {
            //uuid
            arr["product_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        // }

        arr.name = document.getElementById("mname").value;
        arr.provider = mprovider.value;
        arr.type = mtype.value;
        arr.quantity = mqu.value;
        // arr.unit = unit.value;
        // arr.price = price.value;

        //Prepare var to REST call api
        var json = JSON.stringify(arr);
        console.log(json);
        //Make REST Api call
        var request = new XMLHttpRequest();
        request.open('POST', 'https://7ly68131u9.execute-api.us-east-1.amazonaws.com/dev_0/', true);
        request.send(json);

        //Reload Document
        document.location.reload();

    }
}

//Modal function
function edit_delete_modal(data) {

    //Modal Information Config
    mname.textContent = data[1];
    mprovider.innerHTML = data[2];
    mtype.innerHTML = "<address>" + data[3] + "</address>";
    mqu.textContent = data[4] + " " + data[5];
    mprice.textContent = data[6];

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
                arr[i].product_id,
                arr[i].name,
                arr[i].provider,
                arr[i].type,
                arr[i].quantity,
                arr[i].unit,
                arr[i].price
            ]).draw(false);
        }

        //On select metod start process
        $('#myTable tbody').on('click', 'tr', function () {

            //Get the data On the Table
            var data = table.row(this).data();

            //Initialize both buttons for further use
            // edit_button.value = data[0];
            delete_button.value = data[0];

            //Call Function to start process
            edit_delete_modal(data);
        });

        table.column(0).visible(false);

    });
}

// Send request
request.send();










