
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://iermfbynl5.execute-api.us-east-1.amazonaws.com/dev_0/', true);

//initialize all the form parameters
var form_name = document.getElementById("form-name");
var form_fname = document.getElementById("form-fname");
var form_gender = document.getElementById("form-gender");
var form_age = document.getElementById("form-age");
var form_diagnose = document.getElementById("form-diagnose");
var form_doctor = document.getElementById("form-doctor");
var form_store = document.getElementById("form-store");
var form_services = document.getElementById("form-services");
var form_wayToPay = document.getElementById("form-wayToPay");
var form_price = document.getElementById("form-price");
var form_status = document.getElementById("form-status");
var form_duePayment = document.getElementById("form-duePayment");
var form_discount = document.getElementById("form-discount");
var form_note = document.getElementById("form-note");

var storename = document.getElementById("storename");
var storega = document.getElementById("storega");
var storeaddress= document.getElementById("storeaddress");
var storeemail = document.getElementById("storeemail");
var storephone = document.getElementById("storephone");

var tag = document.getElementsByTagName("label");
var input
var i = 0
var dt = new Date().getTime();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

today = mm + '/' + dd + '/' + yyyy;

//Initialize all buttons

//Delete Button
// var delete_button = document.getElementById("delete");
// delete_button.addEventListener("click", function () { mydelete(this.value); });

//Edit Button
var edit_button3 = document.getElementById("edit3");
edit_button3.addEventListener("click", function () { myedit3(this.value); });

//Add Button
var add_form = document.getElementById("submit-form");
add_form.addEventListener("click", function () { myform(); });

//Cancel Button
var cancel1_button = document.getElementById("cancel1");
cancel1_button.addEventListener("click", function () { mycancel1(this.value); });

//Cancel Buttn
// var cancel2_button = document.getElementById("cancel2");
// cancel2_button.addEventListener("click", function () { mycancel2(this.value); });



// function myedit3(s) {
//     // Create a request variable and assign a new XMLHttpRequest object to it.
//     var request3 = new XMLHttpRequest();

//     // Open a new connection, using the GET request on the URL endpoint
//     request3.open('GET', 'https://iermfbynl5.execute-api.us-east-1.amazonaws.com/dev_0/query?param1=' + s, true);

//     request3.onload = function () {
//         arr = JSON.parse(this.response);
//         //console.log(arr.name);


//         document.getElementById("form-store").value = arr.name;
//         //console.log(document.getElementById("name").value);

//         $('#verticalcenter3').modal('hide');
//     }
//     // Send request
//     request3.send();
// }

// function mycancel1(s) {
//     edit_button2.value = "";
//     // delete_button.value = "";
// }

// function mycancel2(s) {

//     document.getElementById("name").value = "";
//     //console.log(document.getElementById("name").value);
//     family_name.value = "";
//     medic.value = "";
//     licence.value = "";
//     street.value = "";
//     city.value = "";
//     state.value = "";
//     country.value = "";
//     zipcode.value = "";
//     phone.value = "";
//     email.value = "";
// }

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
function myform() {

    //Validation Form
    if (document.getElementById("form-name").value == "" || form_fname.value == "" || form_gender.value == "" || form_age.value == ""|| form_store.value == ""|| form_services.value == ""|| form_wayToPay.value == ""|| form_price.value == ""|| form_status.value == ""|| form_discount.value == "") {

        //Initialize tags
        tag[0].style.color = "black";
        tag[0].style.fontWeight = 'normal';
        tag[1].style.color = "black";
        tag[1].style.fontWeight = 'normal';
        tag[2].style.color = "black";
        tag[2].style.fontWeight = 'normal';
        tag[3].style.color = "black";
        tag[3].style.fontWeight = 'normal';
        tag[6].style.color = "black";
        tag[6].style.fontWeight = 'normal';
        tag[7].style.color = "black";
        tag[7].style.fontWeight = 'normal';
        tag[8].style.color = "black";
        tag[8].style.fontWeight = 'normal';
        tag[9].style.color = "black";
        tag[9].style.fontWeight = 'normal';
        tag[10].style.color = "black";
        tag[10].style.fontWeight = 'normal';
        // tag[11].style.color = "black";
        // tag[11].style.fontWeight = 'normal';
        tag[12].style.color = "black";
        tag[12].style.fontWeight = 'normal';

        //Complete form Message
        if (i == 0) {
            var label = document.createElement("label");
            var h5 = document.getElementById("h7");
            label.innerHTML = "*Porfavor de completar los espacios marcados en rojo"
            label.style.color = "red";
            h5.appendChild(label);
            i++;
        }

        //Change or complete the following input field
        if (document.getElementById("form-name").value == "") {
            tag[0].style.color = "red";
            tag[0].style.fontWeight = 'bold';
        }

        if (form_fname.value == "") {
            tag[1].style.color = "red";
            tag[1].style.fontWeight = 'bold';
        }

        if (form_gender.value == "") {
            tag[2].style.color = "red";
            tag[2].style.fontWeight = 'bold';
        }
        if (document.getElementById("form-age").value == "") {
            tag[3].style.color = "red";
            tag[3].style.fontWeight = 'bold';
        }
        if (document.getElementById("form-store").value == "") {
            tag[6].style.color = "red";
            tag[6].style.fontWeight = 'bold';
        }
        if (document.getElementById("form-services").value == "") {
            tag[7].style.color = "red";
            tag[7].style.fontWeight = 'bold';
        }
        if (document.getElementById("form-wayToPay").value == "") {
            tag[8].style.color = "red";
            tag[8].style.fontWeight = 'bold';
        }
        if (document.getElementById("form-price").value == "") {
            tag[9].style.color = "red";
            tag[9].style.fontWeight = 'bold';
        }
        if (document.getElementById("form-status").value == "") {
            tag[10].style.color = "red";
            tag[10].style.fontWeight = 'bold';
        }
        // if (document.getElementById("form-duePayment").value == "") {
        //     tag[11].style.color = "red";
        //     tag[11].style.fontWeight = 'bold';
        // }
        if (document.getElementById("form-discount").value == "") {
            tag[12].style.color = "red";
            tag[12].style.fontWeight = 'bold';
        }

    }

    //When there is no error call this else
    else {

        //set all attributes
        var arr = {};

      
            //uuid
            arr["order_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
      

        arr.name = document.getElementById("form-name").value;
        arr.family_name = form_fname.value;
        arr.doctor_name= form_doctor.value;
        arr.doctor_id=document.getElementById("form-doctorId").value;
        arr.service_name=document.getElementById("form-services").value;
        arr.service_id=document.getElementById("form-serviceId").value;
        arr.age=document.getElementById("form-age").value;
        arr.diagnostic=document.getElementById("form-diagnose").value;
        arr.due_payment=document.getElementById("form-duePayment").value;
        arr.gender=document.getElementById("form-gender").value;
        arr.payment_method=document.getElementById("form-wayToPay").value;
        arr.doctor_email=document.getElementById("form-doctorEmail").value;
        arr.client_email=document.getElementById("form-clientEmail").value;
        arr.status=document.getElementById("form-status").value;
        arr.store=document.getElementById("form-store").value;
        arr.price=document.getElementById("form-price").value;
        arr.Discount=document.getElementById("form-discount").value;
        arr.date=today;
        arr.time=time;
        arr.Commission ="";
        arr.note = document.getElementById("form-note").value;

        //Prepare var to REST call api
        var json = JSON.stringify(arr);
        console.log(json);
        //Make REST Api call
        var request = new XMLHttpRequest();
        request.open('POST', 'https://arvixe3616.execute-api.us-east-1.amazonaws.com/dev_0/', true);
        request.send(json);

        //Reload Document
        document.location.reload();
        
    }
}

//Modal function
function edit_delete_modal3(data) {

    document.getElementById("form-store").value = data[1];

    //Start Modal
    // $('#verticalcenter3').modal();
}

request.onload = function () {
    // Begin accessing JSON data here

    //Access the Respone
    var arr = JSON.parse(this.response);

    //Initializer to use the data base
    $(document).ready(function () { 

        //Initialize Table and put select attr
        var table = $('#myTable2').DataTable({

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
                arr[i].store_id,
                arr[i].name,
                arr[i].street,
                arr[i].city,
                arr[i].email,
                arr[i].phone
            ]).draw(false);
        }

        //On select metod start process
        $('#myTable2 tbody').on('click', 'tr', function () {

        //     //Get the data On the Table
            var data = table.row(this).data();

        //     //Initialize both buttons for further use
            edit_button3.value = data[0];
        //     // delete_button.value = data[0];

        //     //Call Function to start process
            edit_delete_modal3(data);
        });

        table.column(0).visible(false);

    });
}
// Send request
request.send();










