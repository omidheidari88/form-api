import React from 'react';
const App = () => {
	const postItems = (e) => {
		e.preventDefault();
		const form = document.querySelector('#form');
		const userInfo = {
			name: form.first_name.value,
			last_name: form.last_name.value,
		};
		return fetch(`https://imin.nonap.co/public/crm/add_crminfo`, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(userInfo), // body data type must match "Content-Type" header
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	return (
		<div className="limiter">
			<div className="container-login100 bg-auth">
				<div className="wrap-login100 p-t-30 p-b-50">
					<span className="login100-form-title p-b-41">Register</span>
					<form id="form" className="login100-form validate-form p-b-33 p-t-5" onSubmit={(e) => postItems(e)}>
						<div className="wrap-input100 validate-input" data-validate="Enter firstname">
							<input type="text" className="input100" name="first_name" id="first_name" placeholder="first name" />
							<span className="focus-input100" data-placeholder="&#xe82a;"></span>
						</div>
						<div className="wrap-input100 validate-input" data-validate="Enter lastname">
							<input type="text" className="input100" name="last_name" id="last_name" placeholder="last name" />
							<span className="focus-input100" data-placeholder="&#xe82a;"></span>
						</div>
						<div className="container-login100-form-btn m-t-32">
							<button type="submit" className="login100-form-btn">
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
