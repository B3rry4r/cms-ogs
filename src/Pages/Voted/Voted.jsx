import React, { useEffect, useState } from 'react';
import './Voted.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { authAxios, url } from '../../Components/Auth/Auth';
import Small from '../../Components/Loader/Small/Small';

const Voted = () => {
  const user = useState(JSON.parse(localStorage.getItem('profile')))
  const [errorMessage, setErrorMessage] = useState('');
  const eContent = document.querySelector('.error');
  const [isLoading, setIsLoading] = useState(false)
  const [isVoting, setIsVoting] = useState(false)
  const [nominee, setNominee] = useState([]);
  const vId = user[0].result._id;
  const navigate = useNavigate()
  const { id } = useParams();
  const data = {
    voterId: vId
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`${url}/vote/nominees/${id}`);
        setNominee(response.data);
        if (response) {
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
      }
    };
    fetchData();

  }, [id]);

  const sOverlay = document.querySelector('.s-voted');

  const vote = async () => {
    try {
      setIsVoting(true);
      const response = await authAxios.post(`${url}/vote/${id}`, data);
      console.log(response.data);
      if (response) {
        setIsVoting(false);
        sOverlay.classList.add('active')
      }
    } catch (error) {
      toggleError();
      setErrorMessage(error?.response?.data?.message);
      setIsVoting(false);
    }
  }

  const toggleError = () => {
    eContent.classList.add('active');
  }

  const handleErrorRedirect = () => {
    eContent.classList.remove('active');
    navigate('/');
  };

  const handleRedirect = () => {
    sOverlay.classList.remove('active');
    navigate('/');
  }

  return (
    <div className='voted' >
      <div className="container">
        {
          isLoading ? (
            <Small />
          ) : (
            <>
              <div className="v-top">
                <img className="nominee-image" src="https://via.placeholder.com/150" alt="Nominee" />
                <h3 className="name">{nominee.name}</h3>
                <p>{nominee.manifesto}</p>
                <p>Vote for {nominee.name}</p>
              </div>
              <div className="v-bottom">
                <Link to='/nominees'>Go-Back</Link>
                <button onClick={vote}>
                  {
                    isVoting ? (
                      <Small />
                    ) : (
                      'Vote'
                    )
                  }
                </button>
              </div>
            </>
          )
        }
      </div>
      <div className="error">
        <div className="m-container">
          <p>Sorry!</p>
          <p>{errorMessage}</p>
          <span onClick={handleErrorRedirect}>Visit OGS</span>
        </div>
      </div>
      <div className="s-voted">
        <div className="v-container">
          <p>Thank You</p>
          <p>Your have successfully voted for {nominee.name}</p>
          <span onClick={handleRedirect} >Visit OGS</span>
        </div>
      </div>
      <div className="filtered circle-1"></div>
      <div className="filtered circle-2"></div>
      <div className="filtered circle-3"></div>
    </div>
  )
}

export default Voted