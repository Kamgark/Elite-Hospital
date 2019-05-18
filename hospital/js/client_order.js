

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://bwlf2cpbd4.execute-api.us-east-1.amazonaws.com/dev_0/', true);

//initialize all the form parameters
var name = document.getElementById("name");
var family_name = document.getElementById("family_name");
var gender = document.getElementById("gender");
var mdate = document.getElementById("bdate");
var street = document.getElementById("street");
var city = document.getElementById("city");
var state = document.getElementById("state");
var country = document.getElementById("country");
var zipcode = document.getElementById("zipcode");
var email = document.getElementById("email");
var phone = document.getElementById("phone");

var mname = document.getElementById("mname");
var mga = document.getElementById("mga");
var maddress = document.getElementById("maddress");
var memail = document.getElementById("memail");
var mphone = document.getElementById("mphone");

var tag = document.getElementsByTagName("label");
var input
var i = 0
var dt = new Date().getTime();

//Initialize all buttons

//Delete Button
// var delete_button = document.getElementById("delete");
// delete_button.addEventListener("click", function () { mydelete(this.value); });

//Edit Button
var edit_button = document.getElementById("edit");
edit_button.addEventListener("click", function () { addToform(this.value); });

//Add Button
var add_button = document.getElementById("add");
add_button.addEventListener("click", function () { myadd(); });

//Cancel Button
var cancel1_button = document.getElementById("cancel1");
cancel1_button.addEventListener("click", function () { mycancel1(this.value); });

//Cancel Buttn
var cancel2_button = document.getElementById("cancel2");
cancel2_button.addEventListener("click", function () { mycancel2(this.value); });



function addToform(s) {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request3 = new XMLHttpRequest();
    // console.log("id",s);
    // Open a new connection, using the GET request on the URL endpoint
    request3.open('GET', 'https://bwlf2cpbd4.execute-api.us-east-1.amazonaws.com/dev_0/get-item?param1=' + s, true);

    request3.onload = function () {
        arr = JSON.parse(this.response);
        console.log(arr);


        document.getElementById("form-name").value = arr.name;
        //console.log(document.getElementById("name").value);
        document.getElementById("form-fname").value = arr.family_name;
        document.getElementById("form-gender").value = arr.gender;
        document.getElementById("form-clientEmail").value = arr.email;
        var DOB=arr.date;
        var age=getAge(DOB);
        function getAge(DOB) {
            // console.log("DOB ",DOB);
            var today = new Date();
            var birthDate = new Date(DOB);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age = age - 1;
            }

            return age;
        }
        document.getElementById("form-age").value=age;
        $('#verticalcenter').modal('hide');
    }
    // Send request
    request3.send();
}

function mycancel1(s) {
    edit_button.value = "";
    // delete_button.value = "";
}

function mycancel2(s) {

    document.getElementById("name").value = "";
    //console.log(document.getElementById("name").value);
    family_name.value = "";
    gender.value = "";
    mdate.value = "";
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
    
//     arr2.client_id = s;
//     var json = JSON.stringify(arr2);
//     //alert(json);
//     // Create a request variable and assign a new XMLHttpRequest object to it.
//     var request2 = new XMLHttpRequest();

//     // Open a new connection, using the GET request on the URL endpoint
//     request2.open('DELETE', 'https://bwlf2cpbd4.execute-api.us-east-1.amazonaws.com/dev_0/', true);
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
function myadd() {

    //Validation Form
    if (document.getElementById("name").value == "" || family_name.value == "" || email.value == "") {

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
            var h5 = document.getElementById("h5");
            label.innerHTML = "*Porfavor de completar los espacios marcados en rojo"
            label.style.color = "red";
            h5.appendChild(label);
            i++;
        }

        //Change or complete the following input field
        if (document.getElementById("name").value == "") {
            tag[0].style.color = "red";
            tag[0].style.fontWeight = 'bold';
        }

        if (family_name.value == "") {
            tag[1].style.color = "red";
            tag[1].style.fontWeight = 'bold';
        }

        if (email.value == "") {
            tag[9].style.color = "red";
            tag[9].style.fontWeight = 'bold';
        }

    }

    //When there is no error call this else
    else {

        //set all attributes
        var arr = {};

        // if (edit_button.value != "") {
        //     arr.client_id = edit_button.value;
        // }
        // else {
            //uuid
            arr["client_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        // }

        

        arr.name = document.getElementById("name").value;
        arr.family_name = family_name.value;
        if (gender.value == "") { arr.gender = " "; } else { arr.gender = gender.value; }
        if (mdate.value == "") { arr.date = " "; } else { arr.date = mdate.value }
        if (street.value == "") { arr.street = " "; } else { arr.street = street.value }
        if (city.value == "") { arr.city = " "; } else { arr.city = city.value }
        if (state.value == "") { arr.state = " "; } else { arr.state = state.value }
        if (country.value == "") { arr.country = " "; } else { arr.country = country.value }
        if (zipcode.value == "") { arr.zipcode = " "; } else { arr.zipcode = zipcode.value }
        if (phone.value == "") { arr.phone = " "; } else { arr.phone = phone.value }
        arr.email = email.value;

        //Prepare var to REST call api
        var json = JSON.stringify(arr);
        console.log(json);
        //Make REST Api call
        var request = new XMLHttpRequest();
        request.open('POST', 'https://bwlf2cpbd4.execute-api.us-east-1.amazonaws.com/dev_0/', true);
        request.send(json);

        //Reload Document
        document.location.reload();

    }
}

//Modal function
function edit_delete_modal(data) {

    //Modal Information Config
    mname.textContent = data[1] + " " + data[2];
    mga.innerHTML = data[3];
    // maddress.innerHTML = "<address>" + data[7] + "  " + data[8] + "  " + data[9] + "  " + data[10] + "  " + data[11] + "</address>";
    mphone.textContent = "T: " + data[5];
    memail.textContent = "E: " + data[4];

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
                arr[i].client_id,
                arr[i].name,
                arr[i].family_name,
                arr[i].date,
                arr[i].email,
                arr[i].phone
            ]).draw(false);
        }

        //On select metod start process
        $('#myTable tbody').on('click', 'tr', function () {

            //Get the data On the Table
            var data = table.row(this).data();

            //Initialize both buttons for further use
            edit_button.value = data[0];
            // delete_button.value = data[0];

            //Call Function to start process
            edit_delete_modal(data);
        });

        table.column(0).visible(false);

    });
}
// Send request
request.send();