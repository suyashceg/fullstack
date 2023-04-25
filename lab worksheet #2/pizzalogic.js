function calculate()
{
    let sizepizza = document.getElementById("size").value;
    let deep = document.getElementById("deeppan").value;
    let top = document.getElementById("topping").value;
    let hd = document.getElementById("home").value;
    let total = 0;
    if(sizepizza == '1')
        total+=99;
    else if(sizepizza == '2')
        total+=199;
    else if(sizepizza == '3')
        total+=399;
    if(deep=='1')
        total+=20;
    else
        total+=0
    if(top=='1')
        total+=0
    else if(top=='2')
        total+=15
    else if(top=='3')
        total+=30
    else if(top=='4')
        total+=20
    else if(top=='5')
        total+=10
    if(hd=='1')
        total+=25
    document.getElementById("result").innerHTML = "Price: "+total;
}