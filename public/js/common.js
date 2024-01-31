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
     var textbox =$("#postTextarea");


     var data = {
        content:textbox.val() 
     }
     $.post("/api/posts ",data,(postdata)=>{
        
        var html = createPostHtml(postdata);
        $(".postsContainer").prepend(html);
        textbox.val("");
        button.prop("disabled",true);


      // console.log(postdata);
      // alert(postdata);
     }
    //  xhr xml http request
    // $.post is a ajax code

 ) })
  

 $(document).on("click",".likeButton",(event)=>
 {
    // alert("it worked");
    var button = $(event.target);
    var postId = getPostIdFromElement(button);
    console.log(postId);
      })
   //   add click in document  when you load a dynamic content
    function getPostIdFromElement(element)
    {
        var isRoot = element.hasClass('.post')

        var rootElement = isRoot ? element:element.closest(".post");
        var postId = rootElement.data().id;
        if(postId===undefined)
        return alert("postId undefined");
        return postId;
    }
    // data() method returns all the data in the class
    // closest() is method in jquery which will find the nearest class

 



   function createPostHtml(postdata)
   {
    
     var postedBy = postdata.postedBy;
     if(postedBy._id==undefined){
        return console.log("User object is not populated");
     }
     var displayName=postedBy.firstName +" "+postedBy.lastName;
     var timestamp =timeDifference(new Date(),new Date(postdata.createdAt));

    return `<div class="post" data-id=${postdata._id}>
        <div class="mainContentContainer">
            <div class="userImageContainer">
                <img src ="${postedBy.profilepic}">
        </div>
        <div class="postContentContainer">
            <div class="header">
                <a href="/profile/${postedBy.userName}" class="displayName">${displayName}</a>
                <span class = 'userName'>${postedBy.userName}</span>
                <span class = 'userName'>${timestamp}</span>

            </div>
            <div class="postBody">
                <span>${postdata.content}</span>
            </div>
            <div class="postFooter">
             <div class="postButtonContainer">
             <button>
                    <i class="fa-solid fa-comments-dollar"></i>
                    
             </button></div>
             <div class="postButtonContainer">
             <button>
                    <i class="fa-solid fa-repeat"></i>
                    
             </button></div>
             <div class="postButtonContainer">
             <button class="likeButton">
                    <i class="fa-regular fa-heart"></i>
             </button></div>
            </div>
        </div>
    </div>
    </div>`;
    // double ticks you can inject variable in javascript
    //you can use jquery as well

   }
   function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        if(elapsed/1000<30)
         return "Just now"
        return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}

