


function myadd() {
    if (document.getElementById("name").value == "" || family_name.value == "" || email.value == "") {

        tag[0].style.color = "black";
        tag[0].style.fontWeight = 'normal';
        tag[1].style.color = "black";
        tag[1].style.fontWeight = 'normal';
        tag[9].style.color = "black";
        tag[9].style.fontWeight = 'normal';

        if (i == 0) {
            var label = document.createElement("label");
            var h5 = document.getElementById("h5");
            label.innerHTML = "*Porfavor de completar los espacios marcados en rojo"
            label.style.color = "red";
            h5.appendChild(label);
            i++;
        }

        if (name.value == "") {
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
    } else {

        var arr = {};

        /* if (edit_button.value != "") {
             //alert("im inside   " + edit_button.value);
             arr.doctor_id = edit_button.value;
             var t = edit_button.value;
             edit_button.value = "";
 
         }
 
         else {
 
             arr["doctor_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                 var r = (dt + Math.random() * 16) % 16 | 0;
                 dt = Math.floor(dt / 16);
                 return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
             });
 
         }*/
        arr["doctor_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

        //alert("else  " + arr.doctor_id);
        arr.name = document.getElementById("name").value;
        arr.family_name = family_name.value;
        arr.medic = medic.value;
        arr.licence = licence.value;
        arr.street = street.value;
        arr.city = city.value;
        arr.state = state.value;
        arr.country = country.value;
        arr.zipcode = zipcode.value;
        arr.phone = phone.value;
        arr.email = email.value;
        alert(JSON.stringify(arr));
        var json = JSON.stringify(arr);

        var http = new XMLHttpRequest();
        http.open('POST', 'https://ug4lc0jiwg.execute-api.us-east-1.amazonaws.com/dev_0/', true);
        http.onload = function () {
            document.location.reload();
        }
        http.send(json);

    }

}

function mycancel1(s) {
    edit_button.value = "";
    delete_button.value = "";
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

function myedit(s) {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request3 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request3.open('GET', 'https://ug4lc0jiwg.execute-api.us-east-1.amazonaws.com/dev_0/query?param1=' + s, true);

    request3.onload = function () {
        arr = JSON.parse(this.response);
        //console.log(arr.name);


        document.getElementById("name").value = arr.name;
        //console.log(document.getElementById("name").value);
        family_name.value = arr.family_name;
        medic.value = arr.medic;
        licence.value = arr.licence;
        street.value = arr.street;
        city.value = arr.city;
        state.value = arr.state;
        country.value = arr.country;
        zipcode.value = arr.zipcode;
        phone.value = arr.phone;
        email.value = arr.email;

        $('#verticalcenter').modal('hide');
    }
    // Send request
    request3.send();
}

function mydelete(s) {
    var arr2 = {};
    arr2.doctor_id = s;
    var json = JSON.stringify(arr2);
    //alert(json);
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request2 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request2.open('DELETE', 'https://ug4lc0jiwg.execute-api.us-east-1.amazonaws.com/dev_0/', true);
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