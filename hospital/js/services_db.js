
//initialize all the form parameters
var name = document.getElementById("name");
var price = document.getElementById("price");
var product = document.getElementById("product");
var quantity = document.getElementById("quantity");
var unit = document.getElementById("unit");


var mname = document.getElementById("mname");
var mmedic = document.getElementById("mmedic");
var mlist = document.getElementById("mlist");


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

var room = 1;
var prod_arr;
var prod_form = [];


var prod_list = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
prod_list.open('GET', 'https://f05q1or3v6.execute-api.us-east-1.amazonaws.com/dev_0/', true);
prod_list.onload = function () {
    // Begin accessing JSON data here
    //Access the Respone
    prod_arr = JSON.parse(this.response);
    console.log(this.response);
    prod_arr.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })

    console.log("Array of products   " + JSON.stringify(prod_arr));
    init_elem(0);
}
prod_list.send();

function education_fields() {
    console.log("Creating new Form room = " + room);
    prod_form.push(room);

    var objTo = document.getElementById('education_fields')
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "form-group removeclass" + room);

    var row = document.createElement("div");
    row.setAttribute("class", "row");

    var col1 = document.createElement("div");
    col1.setAttribute("class", "col-sm-6 nopadding");

    var form = document.createElement("div");
    form.setAttribute("class", "form-group");

    var in1 = document.createElement("input");
    in1.setAttribute("class", "form-control");
    in1.setAttribute("type", "text");
    in1.setAttribute("id", "quantity");
    in1.setAttribute("name", "quantity");
    in1.setAttribute("value", "");
    in1.setAttribute("placeholder", "Cantidad");

    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-sm-6 nopadding");

    var form2 = document.createElement("div");
    form2.setAttribute("class", "form-group");

    var ing = document.createElement("div");
    ing.setAttribute("class", "input-group");

    var in2 = document.createElement("select");
    in2.setAttribute("class", "form-control");
    in2.setAttribute("id", "product");
    in2.setAttribute("name", "product");

    var opt = document.createElement("option");
    opt.textContent = "Insumo";

    var div3 = document.createElement("div");
    div3.setAttribute("class", "input-group-append");

    var but = document.createElement("button");
    but.setAttribute("class", "btn btn-danger");
    but.setAttribute("type", "button");
    but.setAttribute("onclick", "remove_education_fields(" + room + ");");

    var ic = document.createElement("i");
    ic.setAttribute("class", "fa fa-minus");


    but.appendChild(ic);
    div3.appendChild(but);
    in2.appendChild(opt);
    ing.appendChild(in2);
    ing.appendChild(div3);
    form2.appendChild(ing);
    col2.appendChild(form2);
    form.appendChild(in1);
    col1.appendChild(form);
    row.appendChild(col1);
    row.appendChild(col2);
    divtest.appendChild(row);
    objTo.appendChild(divtest);

    init_elem(room);
    room++;
    
}

function remove_education_fields(rid) {
    console.log("Removing Form room = " + rid);
    prod_form.splice(prod_form.indexOf(rid), 1);
    $('.removeclass' + rid).remove();
}

function remove_all_ed_f() {

    var i;
    for (i = 0; i < prod_form.length; i++) {     
        console.log("Removing Form room = " + prod_form[i]);
        $('.removeclass' + prod_form[i]).remove();
    }
    prod_form = [];

}

function init_elem(room) {
    console.log("Adding product list to select Form room = " + room);
    var select = document.getElementsByName("product");
    console.log(select);
    var i;
    for (i = 0; i < prod_arr.length; i++) {
        var myobj = document.createElement("option");
        myobj.textContent = prod_arr[i].name;
        console.log(select.length - 1);
        if (room == 0) {
            select[0].appendChild(myobj);
        } else {
            select[select.length - 2].appendChild(myobj);
        }
    }

}

function populate_elem(room, arr) {
    console.log("Populating room = " + room +"  with " + arr);
    var select = document.getElementById("product[" + room + "]");
    var q = document.getElementById("quantity[" + room + "]");
    var u = document.getElementById("unit[" + room + "]");

    q.value = arr.products[room];
    u.value = arr.unit[room];
    select.value = arr.products[room];
}

function myedit(s) {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request3 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request3.open('GET', 'https://rufyedk586.execute-api.us-east-1.amazonaws.com/dev_0/get-item?param1=' + s, true);

    request3.onload = function () {
        arr = JSON.parse(this.response);
        //console.log(arr.name);
        var pselect = document.getElementsByName("product");
        var qselect = document.getElementsByName("quantity");
        remove_all_ed_f();
        document.getElementById("name").value = arr.name;
        price.value = arr.price;
        var i;
        for (i = 0; i < arr.products_id.length; i++) {
            
            if (i == 0) {
                pselect[i].value = arr.products[i];
                qselect[i].value = arr.quantity[i];
            } else {
                education_fields();
                pselect[pselect.length - 2].value = arr.products[i];
                qselect[qselect.length - 2].value = arr.quantity[i];
            }
        }

        $('#verticalcenter').modal('hide');
    }
    // Send request
    request3.send();
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

function mydelete(s) {
    var arr2 = {};
    arr2.service_id = s;
    var json = JSON.stringify(arr2);
    //alert(json);
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request2 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request2.open('DELETE', 'https://rufyedk586.execute-api.us-east-1.amazonaws.com/dev_0/', true);
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
    if (document.getElementById("name").value == "" || price.value == "") {

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
        if (document.getElementById("name").value == "") {
            tag[0].style.color = "red";
            tag[0].style.fontWeight = 'bold';
        }

        if (price.value == "") {
            tag[1].style.color = "red";
            tag[1].style.fontWeight = 'bold';
        }
    }

    //When there is no error call this else
    else {

        //set all attributes
        var arr = {};

        if (edit_button.value != "") {
            arr.service_id = edit_button.value;
        }
        else {
            //uuid
            arr["service_id"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }

        
        var pselect = document.getElementsByName("product");
        var qselect = document.getElementsByName("quantity");
        var i_products_id = [];
        var i_products = [];
        var i_quantity = [];
        var i_unit=[];

        var i;
        for (i = 0; i < pselect.length; i++) {
            for (var x = 0; x < prod_arr.length; x++) {
                if (prod_arr[x].name == pselect[i].value) {
                    i_products_id.push(prod_arr[x].product_id);
                    i_unit.push(prod_arr[x].unit)
                }
            }

            i_products.push(pselect[i].value);
            i_quantity.push(qselect[i].value);
        }

        console.log(i_products);
        console.log(i_products_id);
        console.log(i_quantity);
        console.log(i_unit);
        
        arr.name = document.getElementById("name").value;
        arr.price = price.value;
        arr.products_id = i_products_id;
        arr.products = i_products;
        arr.quantity = i_quantity;
        arr.unit = i_unit;

        console.log(arr);
        

        
        //Prepare var to REST call api
        var json = JSON.stringify(arr);
        console.log(json);
        //Make REST Api call
        var request = new XMLHttpRequest();
        request.open('POST', 'https://rufyedk586.execute-api.us-east-1.amazonaws.com/dev_0/', true);
        request.onload = function () {
            //Reload Document
            //document.location.reload();
        }
        request.send(json);

       

    }
}

//Modal function
function edit_delete_modal(data) {

    var s = data[4].toString();
    var prod = s.split(",");
    s = data[5].toString();
    var quan = s.split(",");
    s = data[6].toString();
    var unit = s.split(",");

    alert(prod);
    mlist.innerHTML = '';

    //Modal Information Config
    mname.textContent = data[1];
    mmedic.innerHTML = data[2];
    var i;
    for (i = 0; i < prod.length; i++) {
        var li = document.createElement("li");
        li.textContent = prod[i] + " - " + quan[i] + " " + unit[i];
        mlist.appendChild(li);
    }

    //Start Modal
    $('#verticalcenter').modal();
}



// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://rufyedk586.execute-api.us-east-1.amazonaws.com/dev_0/', true);
request.onload = function () {
    // Begin accessing JSON data here
    //Access the Respone
    var arr = JSON.parse(this.response);
    //alert(arr);
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
                arr[i].service_id,
                arr[i].name,
                "$"+ arr[i].price,
                arr[i].products_id,
                arr[i].products,
                arr[i].quantity,
                arr[i].unit
            ]).draw(false);
        }

        //On select metod start process
        $('#myTable tbody').on('click', 'tr', function () {

            //Get the data On the Table
            var data = table.row(this).data();

            //Initialize both buttons for further use
            edit_button.value = data[0];
            delete_button.value = data[0];

            //Call Function to start process
            edit_delete_modal(data);
        });

        table.column(0).visible(false);
        table.column(3).visible(false);
        table.column(5).visible(false);
        table.column(6).visible(false);

    });
}
// Send request
request.send();










