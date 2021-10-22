motoboy1 = {
    store: " ",
    requests: "",
    delivery_value: "",
    gain: ""
}

motoboy2 = {
    store: "",
    requests: "",
    delivery_value: "",
    gain: ""
}

motoboy3 = {
    store: "",
    requests: "",
    delivery_value: "",
    gain: ""
}

motoboy4 = {
    store: "",
    requests: "",
    delivery_value: "",
    gain: ""
}

motoboy5 = {
    store: "",
    requests: "",
    delivery_value: "",
    gain: ""
}

function store1() {
    var request1 = 50 + (50 * 0.05)
    var request2 = 50 + (50 * 0.05)
    var request3 = 50 + (50 * 0.05)

    this.motoboy4 += " Store 1 "
    this.motoboy4.requests += 2
    this.motoboy4.delivery_value += request1 + request2
    this.motoboy4.gain += 2

    this.motoboy1.store += " Store1 "
    this.motoboy1.requests += 1
    this.motoboy1.delivery_value += request3
    this.motoboy1.gain += 2
}

function store2() {
    var request1 = 50 + (50 * 0.05)
    var request2 = 50 + (50 * 0.05)
    var request3 = 50 + (50 * 0.05)
    var request4 = 50 + (50 * 0.05)

    this.motoboy2.store += " Store 2" 
    this.motoboy2.requests += 2
    this.motoboy2.delivery_value += request1 + request3
    this.motoboy2.gain += 2

    this.motoboy1.store += " Store 2 "
    this.motoboy1.requests += 1
    this.motoboy1.delivery_value += request2
    this.motoboy1.gain += 2

    this.motoboy3.store += " Store 2 "
    this.motoboy3.requests += 1
    this.motoboy3.delivery_value += request4
    this.motoboy3.gain += 2
}

function store3() {
    var request1 = 50 + (50 * 0.15)
    var request2 = 50 + (100 * 0.15)
    var request3 = 100 + (100 * 0.15)

    this.motoboy5.store += " Store 3 "
    this.motoboy5.requests += 2
    this.motoboy5.delivery_value += request1 + request3
    this.motoboy5.gain += 3

    this.motoboy3.store += " Store 3 "
    this.motoboy3.requests += 1
    this.motoboy3.delivery_value += request2
    this.motoboy3.gain += 2
}

function search() {
    store1()
    store2()
    store3()

    var choose = Number(document.getElementById("motoboy").value)

    switch(choose) {
        case 1:
            document.writeln("<b>Motoboy 1</b><br>");
            document.writeln("<b>Quantity of orders:</b> " + motoboy1.requests + "<br>")
            document.writeln("<b>Stores:</b> " + motoboy1.store + "<br>");
            document.writeln("<b>Total received:</b> R$ " + motoboy1.delivery_value + "<br>");
            document.write("<b>Total earnings:</b> R$ " + motoboy1.gain + "<br>");
            break;
            
        case 2:
            document.writeln("<b>Motoboy 2</b><br>");
            document.writeln("<b>Quantity of orders</b>: " + motoboy2.requests + "<br>");
            document.writeln("<b>Stores:</b> " + motoboy2.store + "<br>");
            document.writeln("<b>Total received:</b> R$ " + motoboy2.delivery_value + "<br>");
            document.write("<b>Total earnings:</b> R$ " + motoboy2.gain + "<br>");
            break;
            
        case 3:
            document.writeln("<b>Motoboy 3</b><br>");
            document.writeln("<b>Quantity of orders:</b> " + motoboy3.requests + "<br>");
            document.writeln("<b>Stores:</b> " + motoboy3.store + "<br>");
            document.writeln("<b>Total received:</b> R$ " + motoboy3.delivery_value + "<br>");
            document.write("<b>Total earnings:</b> R$ " + motoboy3.gain + "<br>");
            break;
            
        case 4:
            document.writeln("<b>Motoboy 4</b><br>");
            document.writeln("<b>Quantity of orders:</b> " + motoboy4.requests + "<br>");
            document.writeln("<b>Stores:</b> " + motoboy4.store + "<br>");
            document.writeln("<b>Total received:</b> R$ " + motoboy4.delivery_value + "<br>");
            document.write("<b>Total earnings:</b> R$ " + motoboy4.gain + "<br>");
            break;
            
        case 5:
            document.writeln("<b>Motoboy 5</b><br>");
            document.writeln("<b>Quantity of orders:</b> " + motoboy5.requests + "<br>");
            document.writeln("<b>Stores:</b> " + motoboy5.store + "<br>");
            document.writeln("<b>Total received:</b> R$ " + motoboy5.delivery_value + "<br>");
            document.write("<b>Total earnings:</b> R$ " + motoboy5.gain + "<br>");
            break; 
    }
}