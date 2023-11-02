import React, { useEffect, useState } from 'react';
import { url } from '../../Components/Auth/Auth';
import './Nominees.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Small from '../../Components/Loader/Small/Small';

const Nominees = () => {
  const [nominees, setNominees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/vote/nominees`);
        if (response) {
          setNominees(response.data);
          setIsLoading(false)
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='vote' >
      <div className="vote-top">
        <div className="contents">
          <h1>Leadership Elections <span>2023</span></h1>
          <div className="text">
            <p>Welcome to the Old Grammarians Society's Leadership Elections for the year 2023. It's time to make your voice heard and cast your vote for the leaders who will steer our society towards a brighter future. Get to know the nominees and their visions by exploring their profiles below. Your vote counts in shaping the next chapter of our community's journey.</p>
          </div>
        </div>
      </div>
      {
        isLoading ? (
          <div className="d-l-s-con">
            <Small />
          </div>
        ) : (
          <>

            <div className="nominees-container">
              <h2>Cast Your Votes</h2>
              <p>Your vote makes a difference in shaping our future.</p>
              <div className="nominees">
                {
                  nominees.map((nominee) => {
                    return (
                      <div className="nominee-card">
                        <img className="nominee-image" src="https://via.placeholder.com/150" alt="Nominee" />
                        <h3 className="nominee-name">{nominee.name}</h3>
                        <p className="nominee-position">Presidential Candidate</p>
                        <p className="nominee-description">{nominee.manifesto}</p>
                        <Link to={`/nominees/nominee/${nominee._id}`} className="vote-button">Vote for {nominee.name}</Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="real-time-data-section">
              <div className="data-container">
                <h1>Voting Data</h1>
                <p className='heading'>CMS OGS Nominee Vote Counts</p>
                <div className="nominees-data-container">
                  {
                    nominees.map((nominee) => {
                      return (
                        <div className="content">
                          <p>{nominee.name}</p>
                          <span>{nominee.votes}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Nominees  