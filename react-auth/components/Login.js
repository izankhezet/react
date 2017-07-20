
class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			errors: false || this.props.errors
		};
	}

	/*getSession(url, data, method) {
		//console.log(this.props);
		this.props.ajaxRequest(url, data, method);
	}*/

	onSubmit(e) {
		e.preventDefault();
		var form = e.target;
		var data = {
			username: form.username.value,
			password: form.password.value
		};
		//$(form).find('button').addClass('disabled').attr('disabled',"disabled").append('...')
	
		this.setState(data);

		//send a ajax request to server
		//this.getSession($(form).attr('action'), data, $(form).attr('method'));

	}

	

	render() {
		return (
			<form onSubmit={(e)=>{this.onSubmit(e)}} action="http://localhost/react-auth/server.php" method="GET" clssName="row">
				{this.state.errors && <div className="alert alert-dismisseable fade show">
					<button className="close" data-target='alert' data-dissmis="alert">&times;</button>
					<p>errors somewhere</p>
				</div>}	
				<h3>{this.props.name}</h3>
				<div className="col-sm-4">
					<div className="form-group">
						<label htmlFor="username" className="form-laber"><i className="fa fa-unlock"></i> Username:</label>
						<input type="text" name="u" defaultValue={this.state.username} className="form-control" id="username"/>
					</div>
					<div className="form-group">
						<label htmlFor="password" className="form-laber"><i className="fa fa-key"></i> Password:</label>
						<input type="password" name="p" defaultValue={this.state.password} className="form-control" id="password"/>
					</div>
					<button className="btn btn-primary btn-lg" type="submit">Log In</button> or&nbsp;
					<Link to="/signup" className="btn btn-outline-success btn-lg">Register</Link> first!
				</div>
			</form>
		);
	}
}
