$(window).load(function() {
    //animate loader
    $("#loader").fadeOut("slow");
}
);

//accessing contents
var etycon=document.getElementById("etyc");
var taxcon=document.getElementById("taxc");
var biocon=document.getElementById("bioc");
var breecon=document.getElementById("breec");
var area=document.getElementById("field");
var clickCon=document.getElementById("cliToCon");

//accessing buttons
var etybtn=document.getElementById("etyb");
var taxbtn=document.getElementById("taxb");
var biobtn=document.getElementById("biob");
var breebtn=document.getElementById("breeb");

//putting all contents to none
etycon.style.display='none';
taxcon.style.display='none';
biocon.style.display='none';
breecon.style.display='none';
area.style.display='none';
clickCon.style.display='none';

//on-click functions
etybtn.addEventListener('click', function() {etydis();});
taxbtn.addEventListener('click', function() {taxdis();});
biobtn.addEventListener('click', function() {biodis();});
breebtn.addEventListener('click', function() {breedis();});

//functions
function etydis()
{
    if(etycon.style.display === "none")
    {
        etycon.style.display='block';
        etybtn.innerHTML="<a href='#ety'>Etymology</a>"+" (OPEN)";
    }
    else
    {
        etycon.style.display='none';
        etybtn.innerHTML="<a href='#ety'>Etymology</a>"+"<del> (OPEN)</del>";

    }
    if(etycon.style.display=== "block"|| taxcon.style.display=== "block" || biocon.style.display=== "block" || breecon.style.display=== "block")
    {
        clickCon.style.display='block';
        area.style.display='block';
    }
else
{
    clickCon.style.display='none';
area.style.display='none';
}

}
function taxdis()
{
    if(taxcon.style.display === "none")
    {
        taxcon.style.display='block';
        taxbtn.innerHTML="<a href='#tax'>Taxonomy</a>"+" (OPEN)";
    }
    else
    {
        taxcon.style.display='none';
        taxbtn.innerHTML="<a href='#tax'>Taxology</a>"+"<del> (OPEN)</del>";

    }
    if(etycon.style.display=== "block"|| taxcon.style.display=== "block" || biocon.style.display=== "block" || breecon.style.display=== "block")
    {
        clickCon.style.display='block';
        area.style.display='block';
    }
else
{
    clickCon.style.display='none';
area.style.display='none';
}

}
function biodis()
{
    if(biocon.style.display === "none")
    {
        biocon.style.display='block';
        biobtn.innerHTML="<a href='#bio'>Biology</a>"+" (OPEN)";
    }
    else
    {
        biocon.style.display='none';
        biobtn.innerHTML="<a href='#bio'>Biology</a>"+"<del> (OPEN)</del>";

    }
    if(etycon.style.display=== "block"|| taxcon.style.display=== "block" || biocon.style.display=== "block" || breecon.style.display=== "block")
    {
        clickCon.style.display='block';
        area.style.display='block';
    }
else
{
    clickCon.style.display='none';
area.style.display='none';
}

}
function breedis()
{
    if(breecon.style.display === "none")
    {
        breecon.style.display='block';
        breebtn.innerHTML="<a href='#bree'>Breeds</a>"+" (OPEN)";
    }
    else
    {
        breecon.style.display='none';
        breebtn.innerHTML="<a href='#bree'>Breeds</a>"+"<del> (OPEN)</del>";

    }
    if(etycon.style.display=== "block"|| taxcon.style.display=== "block" || biocon.style.display=== "block" || breecon.style.display=== "block")
    {
        clickCon.style.display='block';
        area.style.display='block';
    }
else
{
    clickCon.style.display='none';
area.style.display='none';
}


}
