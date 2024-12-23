import React from 'react'
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src="https://i.postimg.cc/rynxxJzt/AMEER-HAMZA-Copy.jpg" alt="" />
          <input placeholder="What's on your mind?" className='shareInput' />
        </div>
        <hr className='shareHr' />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo_or_video</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}
