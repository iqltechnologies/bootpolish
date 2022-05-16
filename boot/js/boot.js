//var path = document.URL.split('/').slice(0, -1).join('/');
const debug = 1; 

    var path  = "https://"+window.location.hostname;

    // async function process(data, target){
    //     console.log(data, target);
    //     $(target).html("hey")
    // }

    function load(target){
        

    }
    
    async function boot(url, target){
       
        url = url+'?rand='+Math.random(0,9999);

        let storagename = $(target).prop("tagName").toLowerCase() + $(target).prop('classList');
        let old_target_content = localStorage.getItem(storagename);

        $(target).html( old_target_content);

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if(this.responseText!==old_target_content){
                    $(target).html(this.responseText);
                    localStorage.setItem(storagename,this.responseText); 
                    console.log("fresh load")
            }
            else{
                console.log("old load")
            }
        }
        xhttp.open("GET", url, false);
        xhttp.send();

    }

    ////////////   load header footer and sidebar

    $('.boot').each(function(){
        boot($(this).attr('from'), this); 
    })

    $('header, .header').each(function(){
        boot('/boot/includes/header.html', this); 
    })

    $('footer, .footer').each(function(){
        boot('/boot/includes/footer.html', this); 
    })

    $('.sidebar').each(function(){
        boot('/boot/includes/sidebar.html', this); 
    })

    ////////////  Add active classes to menu and links

    var url = window.location.pathname,
    urlRegExp = new RegExp(url.replace(/\/$/,''));    

    $('a').each(function(){
        if(urlRegExp.test(this.href)){
            $(this).addClass('active');
            console.log(this.href)
        }
    });

    $('li a').each(function(){
        if(urlRegExp.test(this.href) ){
            $(this).addClass('active');
            
        }
    });

    /////// url management

    // window.history.pushState("object or string", "Title", "/new-url");


    ///////////  Vue Widgets 


        
    const options = {
      
        moduleCache: {
          vue: Vue,
        },
        
        getFile(url) {
          return fetch(url).then(response => response.ok ? response.text() : Promise.reject(response));
        },
        
        addStyle(styleStr) {
          const style = document.createElement('style');
          style.textContent = styleStr;
          const ref = document.head.getElementsByTagName('style')[0] || null;
          document.head.insertBefore(style, ref);
        },
        
        log(type, ...args) {
          console.log(type, ...args);
        }
      }
      
      const { loadModule, version } = window["vue3-sfc-loader"];
      
      const app = Vue.createApp({
        data(){
            return{
                message: 'Hello Vue!',
            }
            
        },
        components: {
            'topbar': Vue.defineAsyncComponent(() => loadModule('/boot/widgets/topbar/topbar.vue', options)),
            'copyright': Vue.defineAsyncComponent(() => loadModule('/boot/widgets/copyright/copyright.vue', options)),
            'newsletter': Vue.defineAsyncComponent(() => loadModule('/boot/widgets/newsletter/newsletter.vue', options)),
            'menuz': Vue.defineAsyncComponent(() => loadModule('/boot/widgets/menu/menu.vue', options)),
            'social': Vue.defineAsyncComponent(() => loadModule('/boot/widgets/social/social.vue', options)),
        }
      });
      
      app.mount('#app');