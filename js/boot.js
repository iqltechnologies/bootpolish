//var path = document.URL.split('/').slice(0, -1).join('/');
    var path  = "https://"+window.location.hostname;


    async function boot(url, target){

        let storagename = $(target).prop("tagName").toLowerCase() + $(target).prop('classList');

        console.log("storage name is "+storagename)
        let old_target_content = localStorage.getItem(storagename);

        //to prevent caching
        url = url+'?rand='+Math.random(0,9999);

        console.log("requesting Content From: "+url)

        if(old_target_content && old_target_content!=''){
            console.log("content is not empty")
            $(target).html(old_target_content);
        }

        let reponse = await fetch(url);
        if(reponse.ok){
            html = await reponse.text()
            if(old_target_content == html ){
            }
            else{
                $(target).html(html);
                localStorage.setItem(storagename,html);
            }
        }

    }

 ////////////   load header footer and sidebar

    $('.boot').each(function(){
        boot($(this).attr('from'), this); 
    })

    $('header, .header').each(function(){
        boot('/includes/header.html', this); 
    })

    $('footer, .footer').each(function(){
        boot('/includes/footer.html', this); 
    })

    $('.sidebar').each(function(){
        boot('/includes/footer.html', this); 
    })


  ////////////  Add active classes to menu and links


  var url = window.location.pathname,
  urlRegExp = new RegExp(url.replace(/\/$/,''));    
  $('a').each(function(){
      if(urlRegExp.test(this.href)){
          $(this).addClass('active');
      }
  });

  $('li a').each(function(){
      if(urlRegExp.test(this.href)){
          $(this).addClass('active');
      }
  });

  /////// url management
  window.history.pushState("object or string", "Title", "/new-url");