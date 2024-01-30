$(document).ready(()=>
{
    // alert("it worked");
      $.get("/api/posts ",(results)=>{
        // console.log(results);
        outputPosts(results,$(".postsContainer"))

      })
})

function outputPosts(results,container){
        container.html("");

        results.forEach(result=>{
            var html = createPostHtml(result)
            container.append(html);
        });
        if(results.length ==0)
        {
            container.append("<span class='noResult'>Nothing to show Create a new ONe<span>");
        }
}
