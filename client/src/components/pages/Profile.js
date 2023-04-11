import React from 'react';

import '../styles/Profile.css';

import Auth from '../../utils/auth';

//wishlist:
    //user profile has a campground wishlist and a places i've been
    //as it stands now, in the model, it has a favCampgrounds property. we can change this later.

    //query me to get favCampgrounds
    //delete campground



export default function Profile() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const getUserData = async () => {
          try {
            const token = Auth.loggedIn() ? Auth.getToken() : null;
    
            if (!token) {
              return false;
            }
    
            const response = await getMe(token);
    
            if (!response.ok) {
              throw new Error('something went wrong!');
            }
    
            const user = await response.json();
            setUserData(user); //sets the state variable to the returned info
          } catch (err) {
            console.error(err);
          }
        };

        getUserData();
    }, []); //Runs only on the first render

    return (
        <div>
            <h1>Profile Page</h1>
                <h1>Hello, {userData.username}!</h1>

                <div id="campgrounds">
                    <h1>Favorite Campgrounds</h1>
                    {userData.favCamgrounds.map((camp) => {
                        return (
                            <div>
                                <h1>{camp.name}</h1>
                                <h1>{camp.state}</h1>
                                <h1>{camp.description}</h1>
                                <img src={camp.image}></img>
                            </div>

                        );
                    })}


                </div>

        </div>

    );

};





