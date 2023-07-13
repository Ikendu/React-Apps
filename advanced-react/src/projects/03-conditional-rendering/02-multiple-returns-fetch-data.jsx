import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setLoaing] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(true);
          setLoaing(false);
          return;
        }
        const user = await response.json();
        setUser(user);
        console.log(user);
        console.log(response);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setTimeout(() => {
        setLoaing(false);
      }, 4000);
    };
    loadUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error in transmission...</h2>;
  }
  const { avatar_url, name, company, html_url } = user;
  return (
    <div>
      <h1>User Data</h1>
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <h4>Work at: {company}</h4>
      <a href={html_url} target="blank">
        Profile
      </a>
    </div>
  );
};
export default MultipleReturnsFetchData;
