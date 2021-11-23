import requests from "../utils/requests ";

const Nav = () => {
	return (
		<div>
            {requests.map((request, index) => 
            <h2 key={index}>{request.title}</h2>)}
            This is it
		</div>
	);
};

export default Nav;
