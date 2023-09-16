function opensb()
{
    var x=document.getElementById("sidebar");
    x.style.flexDirection="column";
    x.style.paddingTop = "10%";
    x.style.display="flex";
}

function closesb()
{
    var x=document.getElementById("sidebar");
    x.style.display = "none";
}

var index=1;
showdiv(index);

function next(n)
{
    showdiv(index+=n);
}

function current(n)
{
    showdiv(index=n)
}

function showdiv(n)
{
    var i;
    var x=document.getElementsByClassName("slide");
    var dots=document.getElementsByClassName("dot");
    if(n>x.length)
    {
        index=1;
    }
    if(n<1)
    {
        index=x.length;
    }
    for(i=0;i<x.length;i++)
    {
        x[i].style.display="none";
    }
    for(i=0;i<dots.length;i++)
    {
        dots[i].style.color="grey";
    }
    x[index-1].style.display="block";
    dots[index-1].style.color="white";
}

