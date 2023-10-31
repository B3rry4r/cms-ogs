import React from 'react'
import './Nominee.scss'
const Nominee = () => {
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

      <div className="nominees-container">
        <h2>Cast Your Votes</h2>
        <div className="nominees">
          <div class="nominee-card">
            <img class="nominee-image" src="https://via.placeholder.com/150" alt="Nominee Image" />
            <h3 class="nominee-name">John Doe</h3>
            <p class="nominee-position">Presidential Candidate</p>
            <p class="nominee-description">An accomplished leader with a proven track record in organizational management and community development.</p>
            <button class="vote-button">Vote for John Doe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nominee  