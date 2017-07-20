const Navigation = () => (
	<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
	  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
	    <Link className="navbar-brand" to="/">Home</Link>
	    <ul className="mr-auto mt-2 mt-lg-0"></ul>
	    <ul className="navbar-nav form-inline my-2 my-lg-0">
	      <li className="nav-item">
	        <Link className="nav-link" to={"/login"}>Log-in</Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/signup">Sign up</Link>
	      </li>
	    </ul>
	  </div>
	</nav>	
);
