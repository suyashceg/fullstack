function order(){
    let city = document.getElementById('city').value;
    let max = 0;
    if(city=="Chennai")
    {
        max = 15;
    }

    else if(city=='Coimbatore')
    {
        max = 12;
    }
    else if(city=='Madurai')
    {
        max = 12;
    }
    else if(city=='Salem')
    {
        max = 8;
    }
    else if(city=='Trichy')
    {
        max = 6;
    }
    else if(city=='Thoothukudi')
    {
        max = 2;
    }
    let orderform = '<br><br><h4> Order form for '+city+'</h4>';
    for(var i=1;i<=max;i++)
    {
        orderform+='<label>Product name: </label><input type="text"><label> &nbspEnter quantity: </label><input type="number"><br><br>'
    }
    document.getElementById('myform').innerHTML = orderform;
}