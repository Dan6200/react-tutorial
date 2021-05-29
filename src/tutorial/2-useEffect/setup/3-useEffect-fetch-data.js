import React from 'react'

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = React.useState([])
  const getUsers = async () => {
	  const response = await fetch(url)
	  const users = await response.json()
	  setUsers(users)
  }
  React.useEffect(() => {
	  getUsers()
  }, [])
  return <>
  	<h2>Github Users</h2>
	<ul className="users">
		{users.map( user => {
			const {id, login, avatar_url, html_url} = user
			return <li key={id}>
				<img src={avatar_url} alt={login}/>
				<div>
					<h4>
					 	{login}
					</h4>
					<h5>
						<a href={html_url}>See Profile</a>
					</h5>
				</div>
			</li>
		})}
	</ul>
  </>;
};

export default UseEffectFetchData;
