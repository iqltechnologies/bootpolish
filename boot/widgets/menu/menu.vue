<script>
export default ({
    props: {
    },
    data() {
       
    }
})
</script>

<style scoped>



/*--------------------------------------------------------------
# Desktop Navigation 
--------------------------------------------------------------*/
@media (min-width: 1280px) {
  .navbar {
    padding: 0;
    position: relative;
  }
  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }
  .navbar li {
    position: relative;
  }
  .navbar > ul > li {
    white-space: nowrap;
  }
  .navbar a, .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    font-family: var(--font-secondary);
    font-size: 16px;
    font-weight: 400;
    color: rgba(var(--color-secondary-dark-rgb), 0.7);
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
  }
  .navbar a i, .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }
  .navbar > ul > li > a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-primary);
    visibility: hidden;
    transition: all 0.3s ease-in-out 0s;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  .navbar a:hover:before, .navbar li:hover > a:before, .navbar .active:before {
    visibility: visible;
    transform: scaleX(0.7);
  }
  .navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
    color: var(--color-primary);
  }
  .navbar .dropdown a:hover:before, .navbar .dropdown:hover > a:before, .navbar .dropdown .active:before {
    visibility: hidden;
  }
  .navbar .dropdown a:hover, .navbar .dropdown .active, .navbar .dropdown .active:focus, .navbar .dropdown:hover > a {
    color: var(--color-white);
    background: var(--color-secondary);
  }
  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 0;
    top: 100%;
    margin: 0;
    padding: 0 0 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: var(--color-secondary);
    transition: 0.3s;
  }
  .navbar .dropdown ul li {
    min-width: 200px;
  }
  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    font-weight: 400;
    color: rgba(var(--color-white-rgb), 0.5);
  }
  .navbar .dropdown ul a i {
    font-size: 12px;
  }
  .navbar .dropdown ul a:hover, .navbar .dropdown ul .active, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
    color: var(--color-white);
    background: var(--color-primary);
  }
  .navbar .dropdown:hover > ul {
    opacity: 1;
    visibility: visible;
  }
  .navbar .megamenu {
    position: static;
  }
  .navbar .megamenu ul {
    right: 0;
    padding: 10px;
    display: flex;
  }
  .navbar .megamenu ul li {
    flex: 1;
  }
  .navbar .megamenu ul li a, .navbar .megamenu ul li:hover > a {
    color: rgba(var(--color-white-rgb), 0.5);
    background: none;
  }
  .navbar .megamenu ul li a:hover, .navbar .megamenu ul li .active, .navbar .megamenu ul li .active:hover {
    color: var(--color-white);
    background: var(--color-primary);
  }
  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }
  .navbar .dropdown .dropdown:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }


}
@media (min-width: 1280px) and (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }

  
}
/*--------------------------------------------------------------
# Mobile Navigation
--------------------------------------------------------------*/
@media (max-width: 1279px) {
  .navbar {
    position: fixed;
    top: 0;
    left: -100%;
    width: calc(100% - 70px);
    bottom: 0;
    transition: 0.3s;
    z-index: 9997;
  }
  .navbar ul {
    position: absolute;
    inset: 0;
    padding: 10px 0;
    margin: 0;
    background: rgba(var(--color-secondary-rgb), 0.9);
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
  }
  .navbar a, .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(var(--color-white-rgb), 0.7);
    white-space: nowrap;
    transition: 0.3s;
  }
  .navbar a i, .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }
  .navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
    color: var(--color-white);
  }
  .navbar .dropdown ul, .navbar .dropdown .dropdown ul {
    position: static;
    display: none;
    padding: 10px 0;
    margin: 10px 20px;
    transition: all 0.5s ease-in-out;
    border: 1px solid rgba(var(--color-secondary-light-rgb), 0.3);
  }
  .navbar .dropdown > .dropdown-active, .navbar .dropdown .dropdown > .dropdown-active {
    display: block;
  }

  .mobile-nav-toggle {
    display: block !important;
    color: var(--color-secondary);
    font-size: 28px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
    position: fixed;
    top: 20px;
    z-index: 9999;
    right: 20px;
  }
  .mobile-nav-toggle.bi-x {
    color: var(--color-white);
  }

  .mobile-nav-active {
    overflow: hidden;
    z-index: 9995;
    position: relative;
  }
  .mobile-nav-active .navbar {
    left: 0;
  }
  .mobile-nav-active .navbar:before {
    content: "";
    position: fixed;
    inset: 0;
    background: rgba(var(--color-secondary-rgb), 0.8);
    z-index: 9996;
  }
}


</style>
<template>

    <div class="container d-flex align-items-center justify-content-between"> <a href="index.html" class="logo d-flex align-items-center scrollto me-auto me-lg-0"><h1>HeroBiz<span>.</span></h1> </a>
	<nav id="navbar" class="navbar">
		<ul>
			<li class="dropdown"><a href="#"><span>Home</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
				<ul>
					<li><a href="index.html" class="active">Home 1 - index.html</a></li>
					<li><a href="index-2.html">Home 2 - index-2.html</a></li>
					<li><a href="index-3.html">Home 3 - index-3.html</a></li>
					<li><a href="index-4.html">Home 4 - index-4.html</a></li>
				</ul>
			</li>
			<li><a class="nav-link scrollto" href="index.html#team">Team</a></li>
			<li><a href="blog.html">Blog</a></li>
			<li class="dropdown megamenu"><a href="#"><span>Mega Menu</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
				<ul>
					<li> <a href="#">Column 1 link 1</a> <a href="#">Column 1 link 2</a> <a href="#">Column 1 link 3</a></li>
					<li> <a href="#">Column 2 link 1</a> <a href="#">Column 2 link 2</a> <a href="#">Column 3 link 3</a></li>
					<li> <a href="#">Column 3 link 1</a> <a href="#">Column 3 link 2</a> <a href="#">Column 3 link 3</a></li>
					<li> <a href="#">Column 4 link 1</a> <a href="#">Column 4 link 2</a> <a href="#">Column 4 link 3</a></li>
				</ul>
			</li>
			<li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
				<ul>
					<li><a href="#">Drop Down 1</a></li>
					<li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
						<ul>
							<li><a href="#">Deep Drop Down 1</a></li>
							<li><a href="#">Deep Drop Down 2</a></li>
							<li><a href="#">Deep Drop Down 3</a></li>
							<li><a href="#">Deep Drop Down 4</a></li>
							<li><a href="#">Deep Drop Down 5</a></li>
						</ul>
					</li>
					<li><a href="#">Drop Down 2</a></li>
					<li><a href="#">Drop Down 3</a></li>
					<li><a href="#">Drop Down 4</a></li>
				</ul>
			</li>
			<li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li>
		</ul> <i class="bi bi-list mobile-nav-toggle d-none"></i></nav> <a class="btn-getstarted scrollto" href="index.html#about">Get Started</a></div>


</template>
