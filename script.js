function Additem()
{
    var p=$("#input");
    var v=p.val();
    v=v.substr(0,1).toUpperCase()+v.substr(1).toLowerCase();
    p.val("");
    $("#a").html(v+" Added To The List");
    $("#a").slideDown(function(){
                       $("#a").slideUp(2000);
    });
    var p=document.createElement("p");
    p.innerHTML=v;
    $("#h2").after(p)
    $("p").click(function(){
      $(this).hide();
});
}
function remove()
{
     $("p").hide();
     $("#b").slideDown(function(){
             $("#b").slideUp(2000);
     });
}
