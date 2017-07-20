class SignUp extends React.Component {
	
	constructor(props) {
		super(props);
		this.state ={}
	}

	render() {
		return (
			<form action="server.php" method="post" clssName="row">
				<div className="col-sm-4">
					<div className="form-group">
						<label htmlFor="username" className="form-laber"><i className="fa fa-user"></i> Username:</label>
						<input type="text" defaultValue='' className="form-control" id="username"/>
					</div>
					<div className="form-group">
						<label htmlFor="passwors" className="form-laber"><i className="fa fa-key"></i> Password:</label>
						<input type="password" defaultValue='' className="form-control" id="passwors"/>
					</div>
					<div className="form-group">
						<label htmlFor="confirmation" className="form-laber"><i className="fa fa-key"></i> Confirmation:</label>
						<input type="password" defaultValue='' className="form-control" id="confirmation"/>
					</div>
					<button className="btn btn-primary btn lg" type="submit">Sign Up</button>
				</div>
			</form>
		);
	}
}