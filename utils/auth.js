

exports.isAdmin = function (pet, res) {
	if(!pet.get('authorization'))
	{
		return false;
	}
	else {
		var data = getLoginAndPass(pet.get('authorization'));
		if (data.username === 'admin' && data.password === '123456') {
	    	return true;
	 	}
	 	return false;
	 }
}


function getLoginAndPass(auth) {
	const base64 = auth.substr('Basic'.length);
	const ascii = new Buffer(base64,'base64').toString('ascii');
	const username = ascii.split(':')[0];
  	const password = ascii.split(':')[1];
  	var user = {username: username,
  				password: password};
  	return user;
}
