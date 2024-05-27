import React from 'react'
import Tiles from './Tiles'
import Strike from './Strike'

function Board({tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <Tiles 
      playerTurn={playerTurn}
      onClick={()=>onTileClick(0)} 
      value={tiles[0]} 
      className="right-border bottom-border"
       />

      <Tiles 
      playerTurn={playerTurn}
      onClick={()=>onTileClick(1)} 
      value={tiles[1]} 
      className="right-border bottom-border" 
      />

      <Tiles 
      playerTurn={playerTurn}
      onClick={()=>onTileClick(2)} 
      value={tiles[2]} 
      className=" bottom-border" 
      />
      <Tiles 
      playerTurn={playerTurn}
      onClick={()=>onTileClick(3)} 
      value={tiles[3]} 
      className="right-border bottom-border" 
      />

      <Tiles 
      playerTurn={playerTurn}
      onClick={()=>onTileClick(4)} 
      value={tiles[4]} 
      className="right-border bottom-border" 
      />

      <Tiles 
      playerTurn={playerTurn}
      onClick={()=>onTileClick(5)} 
      value={tiles[5]} 
      className=" bottom-border" 
      />

      <Tiles 
      playerTurn={playerTurn}
      onClick={()=>onTileClick(6)} 
      value={tiles[6]} 
      className="right-border" 
      />

      <Tiles
      playerTurn={playerTurn} 
      onClick={()=>onTileClick(7)} 
      value={tiles[7]} 
      className="right-border" 
      />

      <Tiles 
      playerTurn={playerTurn}
      onClick={()=>onTileClick(8)} 
      value={tiles[8]} 
      />

      <Strike strikeClass={strikeClass} />
    </div>
  )
}

export default Board
