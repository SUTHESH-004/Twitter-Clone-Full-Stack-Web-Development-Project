// $(document).ready(()=>{
//     // alert("you are ready");

// })
$("#postTextarea").keyup((event)=>
{
    var textbox=$(event.target);
    var value =textbox.val().trim();
    console.log(value);
    var submitbutton =$("#submitPostButton");
    if(submitbutton.length==0)
    {
        return alert("No submit button found");
    }
       if(value==""){
       submitbutton.prop("disabled",true);
       return;
       }
       submitbutton.prop("disabled",false);
})
$("#submitPostButton").click((event)=>
{
     var button = $(event.target);
     var textbx =$("#postTextarea");

     var data = {
        content:textbox.val()
     }
     $.post("/api/posts ",data,(postdata,status,xhr)=>{
        
      alert(postData);
     }
    //  xhr xml http request
    // $.post is a ajax code

 ) })
