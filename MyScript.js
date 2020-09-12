var number,js_items;
on_load =()=>{
    number = prompt("Please enter number of item", 4);
    while ((number == null)|| (number<4)) {
        number = prompt("Please try again , at least choose 4 items ", 4);

    }
    onload_items();
}
onload_items=()=>{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let json_items = this.responseText;
            js_items = JSON.parse(json_items);
            for (let i =0 ; i <number;i++) {
                CreateNode(js_items.items[i].id,js_items.items[i].description,js_items.items[i].price,i);

            }

        }
    }

    xhttp.open("GET", "./examples.json" , true);
    xhttp.send();

}
CreateNode=(item_id,item_des,item_price,id)=>{
    document.getElementById("myUL").style.border="3px solid #ffb3ff";
    // alert(js_items.items[i].id);
    var li = document.createElement("li");
    li.className="itemList";
    // alert(js_items.items[i].id);
    var t = document.createTextNode(item_id);
    var div1 = document.createElement("DIV");
    var des =document.createTextNode(item_des);
    var span= document.createElement("SPAN");
    var Price=document.createTextNode(item_price);
    var img = document.createElement("IMG");
    var img2=document.createElement("IMG");
    var img3=document.createElement("IMG");
    var img4=document.createElement("IMG");
    img.setAttribute("src", "./images/close.png");
    img.setAttribute("id","closeId"+id);
    img2.setAttribute("src","./images/pencil.png");
    img2.setAttribute("id","editId"+id);
    img3.setAttribute("src","./images/done.png");
    img3.setAttribute("id","doneId"+id);
    img4.setAttribute("src","./images/delete.png");
    img4.setAttribute("id","deleteId"+id);

    span.className="price";
    span.setAttribute("id","priceId"+id);
    li.setAttribute("id","itemId"+id);
    div1.className = "listdes";
    img.className="close";
    img2.className="edit";
    img3.className="done";
    img4.className="delete";
    div1.appendChild(des);
    span.append(Price);
    li.appendChild(img3);
    li.appendChild(t);
    li.appendChild(img2);
    // li.appendChild(span);
    li.appendChild(img);
    li.appendChild(div1);
    li.appendChild(img4);
    document.getElementById("myUL").appendChild(li);
    // let y=document.getElementById("itemId");

}

AddItem =()=>{

}