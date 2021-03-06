// app render and router 

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false
		};
	}

	componentWillMount() {
		//
	}

	ajaxRequest(url, data, method) {
		$.ajax({
			url: url,
			type: method,
			data: data
		})
		.done(function(response, status) {
			console.log("response");
		})
		.fail(function(xhr,e) {
			console.log("error", xhr, "e: ",e);
		});
	}

	render() {
		return (
			<Router basename="/" hashType="slash">
				<div>
					<Navigation />
					<Route exact path="/" render={ () =>(
						this.state.loggedIn? 
							(<Redirect to="/dashboard" />) :
							(<LogIn ajaxRequest={this.ajaxRequest.bind(this)} name="dayen" />)						
					)}/>
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/login" render={ props => <LogIn name="dayen" a={this.ajaxRequest} />} />
					<Route path="/signup" component={SignUp} />
				</div>
			</Router>
		);
	}

}
