import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pageButton" align="left">
        <button id="backBtn">← Back</button>
      </div>
      <div className="headerContent" align="left">
        <strong id="subject">Lorem ipsum dolor sit amet &nbsp;
          <button id="activeBtn"><font color="white">Active</font></button>
        </strong>
        <br></br>
        <p id="endTime">Active ends in : 2 days</p>
      </div>
      <div className="myVoteContent">
        <div className='mellowFrame'>
          <div id='myVoteContent_left'>
            <strong>Your Voting</strong>
          </div>
          <div id='myVoteContent_right'>
            <div id='myVoteContent_right_vote' align='left'>
              <p>Voting Power</p>
              <strong>00,000.00 VOTE</strong>
            </div>
            <div id='myVoteContent_right_btn' align='right'>
              <button id="supportBtn"><font color="white">Support</font></button>
              &nbsp;&nbsp;&nbsp;
              <button id="rejectBtn"><font color="white">Reject</font></button>
            </div>
          </div>
        </div>
      </div>
      <div className="resultVoteContent">
        <div className='mellowFrameVoteResult'>
          <div align='left' id="voteResult"><strong>Voting results</strong></div>
          <hr></hr>
          <div>
            <div id="resultVoteContent_left">
              <br></br>
              <div class="progress-bar">
                <div className='progress-success-left'>
                  <font color="black">Support</font>
                </div>
                <div className='progress-success-mid'>
                  <font color="black">9,000,000 VOTE</font>
                </div>
                <div className='progress-success-right'>
                  <font color="black">90%</font>
                </div>
                <div class="progress-success">
                </div>
              </div>
              <br></br>
              <div class="progress-bar">
              <div className='progress-success-left'>
                  <font color="black">Reject</font>
                </div>
                <div className='progress-success-mid'>
                  <font color="black">1,000,000 VOTE</font>
                </div>
                <div className='progress-success-right'>
                  <font color="black">10%</font>
                </div>
                <div class="progress-reject"></div>
              </div>
              <p align="left" id="viewAll">View all votes</p>
            </div>
            <div id="resultVoteContent_right">
              <div className='resultVoteContentLine'>
                <div className="resultVoteContentLineleft">Quorum</div>
                <div className="resultVoteContentLineright">Reached<img width="20" height="20" src="https://img.icons8.com/cotton/64/checkmark.png" alt="checkmark" /></div>
              </div>
              <br></br>
              <div className='resultVoteContentLine'>
                <div className="resultVoteContentLineleft">Current Votes<a className='hint'> Required 000K</a></div>
                <div className="resultVoteContentLineright">000K</div>
              </div>
              <br></br>
              <div className='resultVoteContentLine'>
                <div className="resultVoteContentLineleft">Differential</div>
                <div className="resultVoteContentLineright">Reached<img width="20" height="20" src="https://img.icons8.com/cotton/64/checkmark.png" alt="checkmark" /></div>
              </div>
              <br></br>
              <div className='resultVoteContentLine'>
                <div className="resultVoteContentLineleft">Current Differential<a className='hint'> Required 00K</a></div>
                <div className="resultVoteContentLineright">00.00K</div>
              </div>
              <br></br>
              <div className='resultVoteContentLine'>
                <div className="resultVoteContentLineleft">Total Voting Power</div>
                <div className="resultVoteContentLineright">00,000,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainContent">
        <div className='mellowFrameContent'>
          <div><br></br><br></br></div>
          <div className='mainContentSubject'>Lorem ipsum dolor sit amet</div>
          <div className='mainContentContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <hr></hr><br></br>
          <div className='mainContentSubject'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</div>
          <div className='mainContentContent'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>

        </div>
      </div>
    </div>
  );
}

export default App;
