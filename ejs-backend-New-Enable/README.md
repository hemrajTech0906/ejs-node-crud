//newone final logic
// important keyPoints

// methodOverride pakage npm --->when we are deleted data in html form i.e.why need -->it wont support to delete 
      using in form tag inside-----> _method=DELETE

      <!-- <form action="/todos/<%= todo._id %>?_method=DELETE" method="POST" style="display:inline;">
  <button type="submit">Delete</button>
</form> -->

 HTML forms do not support the DELETE method directly. Instead, you can use a workaround by sending a POST request with a special parameter to indicate that the intent is to delete something. This is a common practice when working with web applications.


 // npm pakage of method-override--->that why used it allow to do in html page operation DELETE