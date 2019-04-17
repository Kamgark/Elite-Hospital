// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://f05q1or3v6.execute-api.us-east-1.amazonaws.com/dev_0/', true);

//initialize all the form parameters
var product = document.getElementById("product");
var quantity = document.getElementById("quantity");



var tag = document.getElementsByTagName("label");
var input
var i = 0
var dt = new Date().getTime();
var myarr;
//Initialize all buttons


//Add Button
var add_button = document.getElementById("add");
add_button.addEventListener("click", function () { myadd(); });

//Cancel Buttn
var cancel2_button = document.getElementById("cancel2");
cancel2_button.addEventListener("click", function () { mycancel2(this.value); });

// Create a request variable and assign a new XMLHttpRequest object to it.
var request2 = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request2.open('GET', 'https://f05q1or3v6.execute-api.us-east-1.amazonaws.com/dev_0/', true);

request2.onload = function () {

    myarr = JSON.parse(this.response);
    
    for (var i = 0; i < myarr.length; i++) {
        var opt = document.createElement("option");
        opt.textContent = myarr[i].name;
        product.appendChild(opt);
    }

}

// Send request
request2.send();
function mycancel2(s) {

    document.getElementById("product").value = "";
    //console.log(document.getElementById("name").value);
    quantity.value = "";
}


//Add Doctor to db method
function myadd() {

    //Validation Form
    if (document.getElementById("quantity").value == "" || product.value == "Selecciona un Opcion") {

        //Initialize tags
        tag[0].style.color = "black";
        tag[0].style.fontWeight = 'normal';
        tag[1].style.color = "black";
        tag[1].style.fontWeight = 'normal';


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
        if (document.getElementById("quantity").value == "") {
            tag[0].style.color = "red";
            tag[0].style.fontWeight = 'bold';
        }

        if (product.value == "Selecciona un Opcion") {
            tag[1].style.color = "red";
            tag[1].style.fontWeight = 'bold';
        }

    }

    //When there is no error call this else
    else {

        //set all attributes
        var arr = {};

            //uuid
            arr["product_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        

        arr.quantity = document.getElementById("quantity").value;
        arr.product = product.value;
        for (var i = 0; i < myarr.length; i++) {
            if (product.value == myarr[i].name) {
                arr.product_id = myarr[i].product_id;
                arr.unit = myarr[i].unit;
                arr.provider = myarr[i].provider;
            }
        }




        //Prepare var to REST call api
        var json = JSON.stringify(arr);
        console.log(json);
        //Make REST Api call
        var request = new XMLHttpRequest();
        request.open('POST', 'https://f05q1or3v6.execute-api.us-east-1.amazonaws.com/dev_0/', true);
        request.send(json);

        //Reload Document
        document.location.reload();

    }
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
                arr[i].quantity,
                arr[i].unit,
            ]).draw(false);
        }

        table.column(0).visible(false);


    });
}

// Send request
request.send();