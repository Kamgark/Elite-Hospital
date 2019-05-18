
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ug4lc0jiwg.execute-api.us-east-1.amazonaws.com/dev_0/', true);

//initialize all the form parameters
var docname = document.getElementById("docname");
var docfamily_name = document.getElementById("docfamily_name");
var medic = document.getElementById("medic");
var licence = document.getElementById("licence");
var street = document.getElementById("street");
var city = document.getElementById("city");
var state = document.getElementById("state");
var country = document.getElementById("country");
var zipcode = document.getElementById("zipcode");
var docemail = document.getElementById("docemail");
var phone = document.getElementById("phone");

var dname = document.getElementById("dname");
var dmedic = document.getElementById("dmedic");
var daddress= document.getElementById("daddress");
var demail = document.getElementById("demail");
var dphone = document.getElementById("dphone");

var tag = document.getElementsByTagName("label");
var input
var i = 0
var dt = new Date().getTime();

//Initialize all buttons

//Delete Button
// var delete_button = document.getElementById("delete");
// delete_button.addEventListener("click", function () { mydelete(this.value); });

//Edit Button
var edit_button1 = document.getElementById("edit1");
edit_button1.addEventListener("click", function () { myedit(this.value); });

//Add Button
var add_button = document.getElementById("add1");
add_button.addEventListener("click", function () { myadd1(); });

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
    request3.open('GET', 'https://ug4lc0jiwg.execute-api.us-east-1.amazonaws.com/dev_0/query?param1=' + s, true);

    request3.onload = function () {
        arr = JSON.parse(this.response);
        //console.log(arr.name);


        document.getElementById("form-doctor").value = arr.name;
        //console.log(document.getElementById("name").value);
        // document.getElementById("form-store").value = arr.medic;
        document.getElementById("form-doctorId").value = arr.doctor_id;
        document.getElementById("form-doctorEmail").value = arr.email;

        $('#verticalcenter1').modal('hide');
    }
    // Send request
    request3.send();
}

function mycancel1(s) {
    edit_button1.value = "";
    // delete_button.value = "";
}

function mycancel2(s) {

    document.getElementById("name").value = "";
    //console.log(document.getElementById("name").value);
    family_name.value = "";
    medic.value = "";
    licence.value = "";
    street.value = "";
    city.value = "";
    state.value = "";
    country.value = "";
    zipcode.value = "";
    phone.value = "";
    email.value = "";
}

// function mydelete(s) {
//     var arr2 = {};
//     arr2.doctor_id = s;
//     var json = JSON.stringify(arr2);
//     //alert(json);
//     // Create a request variable and assign a new XMLHttpRequest object to it.
//     var request2 = new XMLHttpRequest();

//     // Open a new connection, using the GET request on the URL endpoint
//     request2.open('DELETE', 'https://ug4lc0jiwg.execute-api.us-east-1.amazonaws.com/dev_0/', true);
//     request2.onload = function () {
//         // Do something with the retrieved data ( found in xmlhttp.response )
//         if (edit_button.value == "") {
//             edit_button.value = "";
//             delete_button.value = "";
//         } else {
//             edit_button.value = "";
//             delete_button.value = "";
//             document.location.reload();
//         }


//     };
//     request2.send(json);
// }

//Add Doctor to db method
function myadd1() {

    //Validation Form
    if (document.getElementById("docname").value == "" || docfamily_name.value == "" || docemail.value == "") {

        //Initialize tags
        tag[0].style.color = "black";
        tag[0].style.fontWeight = 'normal';
        tag[1].style.color = "black";
        tag[1].style.fontWeight = 'normal';
        tag[9].style.color = "black";
        tag[9].style.fontWeight = 'normal';

        //Complete form Message
        if (i == 0) {
            var label = document.createElement("label");
            var h5 = document.getElementById("h6");
            label.innerHTML = "*Porfavor de completar los espacios marcados en rojo"
            label.style.color = "red";
            h5.appendChild(label);
            i++;
        }

        //Change or complete the following input field
        if (document.getElementById("docname").value == "") {
            tag[0].style.color = "red";
            tag[0].style.fontWeight = 'bold';
        }

        if (docfamily_name.value == "") {
            tag[1].style.color = "red";
            tag[1].style.fontWeight = 'bold';
        }

        if (docemail.value == "") {
            tag[9].style.color = "red";
            tag[9].style.fontWeight = 'bold';
        }

    }

    //When there is no error call this else
    else {

        //set all attributes
        var arr = {};

        if (edit_button1.value != "") {
            arr.doctor_id = edit_button1.value;
        }
        else {
            //uuid
            arr["doctor_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }

        arr.name = document.getElementById("name").value;
        arr.family_name = family_name.value;
        if (medic.value == "") { arr.medic = " "; } else { arr.medic = medic.value; }
        if (licence.value == "") { arr.licence = " "; } else { arr.licence = licence.value }
        if (street.value == "") { arr.street = " "; } else { arr.street = street.value }
        if (city.value == "") { arr.city = " "; } else { arr.city = city.value }
        if (state.value == "") { arr.state = " "; } else { arr.state = state.value }
        if (country.value == "") { arr.country = " "; } else { arr.country= country.value }
        if (zipcode.value == "") { arr.zipcode = " "; } else { arr.zipcode = zipcode.value }
        if (phone.value == "") { arr.phone = " "; } else { arr.phone = phone.value }
        arr.email = email.value;

        //Prepare var to REST call api
        var json = JSON.stringify(arr);
        console.log(json);
        //Make REST Api call
        var request = new XMLHttpRequest();
        request.open('POST', 'https://ug4lc0jiwg.execute-api.us-east-1.amazonaws.com/dev_0/', true);
        request.send(json);

        //Reload Document
        document.location.reload();
        
    }
}

//Modal function
function edit_delete_modal1(data) {

    //Modal Information Config
    dname.textContent = data[1];
    dmedic.innerHTML = data[2];
    maddress.innerHTML = data[3];
    dphone.textContent = "T: " + data[5];
    demail.textContent = "E: " + data[4];

    //Start Modal
    $('#verticalcenter1').modal();
}

request.onload = function () {
    // Begin accessing JSON data here

    //Access the Respone
    var arr = JSON.parse(this.response);

    //Initializer to use the data base
    $(document).ready(function () { 

        //Initialize Table and put select attr
        var table = $('#myTable1').DataTable({

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
                arr[i].doctor_id,
                arr[i].name,
                arr[i].family_name,
                arr[i].medic,
                arr[i].email,
                arr[i].phone
            ]).draw(false);
        }

        //On select metod start process
        $('#myTable1 tbody').on('click', 'tr', function () {

            //Get the data On the Table
            var data = table.row(this).data();

            //Initialize both buttons for further use
            edit_button1.value = data[0];
            // delete_button.value = data[0];

            //Call Function to start process
            edit_delete_modal1(data);
        });

        table.column(0).visible(false);

    });
}
// Send request
request.send();










