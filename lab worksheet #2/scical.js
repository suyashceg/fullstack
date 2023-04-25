function mysin()
{
    var num = parseInt(document.getElementById("txt").value);
    document.getElementById("txt").value = Math.sin(num);
}

function mycos()
{
    var num = parseInt(document.getElementById("txt").value);
    document.getElementById("txt").value = Math.cos(num);
}
function mytan()
{
    var num = parseInt(document.getElementById("txt").value);
    document.getElementById("txt").value = Math.tan(num);
}
function mypow()
{
    var num = parseInt(document.getElementById("txt").value);
    document.getElementById("txt").value = Math.sin(num);
}
function myround()
{
    var num = parseInt(document.getElementById("txt").value);
    document.getElementById("txt").value = Math.round(num);
}
function mylog()
{
    var num = parseInt(document.getElementById("txt").value);
    document.getElementById("txt").value = Math.log(num);
}
function myabs()
{
    var num = parseInt(document.getElementById("txt").value);
    document.getElementById("txt").value = Math.abs(num);
}
function myfact()
{
    var num = parseInt(document.getElementById("txt").value);
    document.getElementById("txt").value = factorialize(num);
}

function factorialize(num) { if (num === 0 || num === 1) return 1; for (var i = num - 1; i >= 1; i--) { num *= i; } return num; }