function exclusion(word)
{
    return "un"+word;
}

function strengthen(word)
{
    return "plus"+word;
}

function emphasize(word)
{
    return "doubleplus"+word;
}

function showresult()
{
    let txt = document.getElementById("t1").value;
    let opsword = document.getElementById("ops").value;
    let result = document.getElementById("res").value;
    document.getElementById("res").innerHTML = opsword;
    if (opsword=='1')
    document.getElementById("res").innerHTML = exclusion(txt);
    if (opsword=='2')
    document.getElementById("res").innerHTML = strengthen(txt);
    if (opsword=='3')
    document.getElementById("res").innerHTML = emphasize(txt);
}