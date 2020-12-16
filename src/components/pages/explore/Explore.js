import React from 'react'
import '../../../assets/styles/Explore.css'
import { FiTrendingUp } from 'react-icons/fi'
import { IoIosPulse } from 'react-icons/io'
import { AiOutlineWallet } from 'react-icons/ai'
import { Button } from '../../Button'
import TileHeader from './TileHeader'
import DataStrip from './DataStrip'
import { stripOne, stripTwo } from './Data'

function Explore() {
  return (
    <div className="explore">
      <div className="sidebar">
        <div>
          <TileHeader icon={<IoIosPulse />} title={"OPEN TRADES"} />

          <div className="tile-details">
            <div>
              <p className="tile-headings">Trades in progress</p>
              <p className="tile-numbers">15</p>
            </div>
            <div>
              <p className="tile-headings">Closest outcome</p>
              <p className="tile-numbers">25m 40s</p>
              <p className="tile-numbers--small">ETH 48 hours</p>
            </div>
          </div>
        </div>
        <div>
          <TileHeader icon={<FiTrendingUp />} title={"TRADING HISTORY"} />
          <ul className='tile-nav'>
            <li>Last</li>
            <li>day</li>
            <li>week</li>
            <li>month</li>
            <li>all</li>
          </ul>
          <div className="tile-details">
            <div>
              <p className="tile-headings">Total trades</p>
              <p className="tile-numbers">245</p>
            </div>
            <div>
              <p className="tile-headings">Profit</p>
              <p className="tile-numbers">+21.5%</p>
            </div>
          </div>
          <div className='graph'></div>
        </div>
        <div >
          <TileHeader icon={<AiOutlineWallet />} title={"TRAINING WALLET"} />
          <div>
            <p className="tile-headings">Trading</p>
            <div className="tile-details--last">
              <p className="tile-numbers">$ 34, 752.00</p>
              <Button children={"TOP UP"} buttonStyle={"btn--outline"} buttonColor={'green--outline'} />
            </div>
          </div>
          <div>
            <p className="tile-headings">Holding</p>
            <div className="tile-details--last">
              <p className="tile-numbers">$ 4, 102.00</p>
              <Button children={"BUY DAI"} buttonColor={"white"} buttonColor={'green'} />
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-filter">
          <div>
            <span className="strip-headings">Selected assets, types and period: </span>
            <Button children={"FILTER"} buttonStyle={"btn--outline"} buttonColor={'green--outline'} />
          </div>
          <div>
            <div>
              <span className="strip-headings">Units: </span>
              <div className="filter-units"><span>%</span><span>$</span></div>
            </div>
            <div>
              <span className="strip-headings">Sort by: </span>
              <select name="category" id="category" className="filter-select">
                <option value="trending" selected>Trending</option>
              </select>
            </div>
          </div>
        </div>
        <DataStrip {...stripOne} />
        <DataStrip {...stripOne} />
        <DataStrip {...stripOne} />
        <DataStrip {...stripOne} />
        <DataStrip {...stripTwo} />
        <DataStrip {...stripTwo} />
        <DataStrip {...stripTwo} />
        <DataStrip {...stripTwo} />
      </div>
    </div>
  )
}

export default Explore
