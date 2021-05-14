import React from 'react'
import Card from './Card'
function Head(){
  return <h1 className="head">Top Netflix Series list</h1>
}
function Main(){
  return(
    <div className="content">
      <Card name="DARK" val="https://picsum.photos/280/150"/>
      <Card name="Extra Curricular" val="https://picsum.photos/270/150"/>
      <Card name="Interstellar" val="https://picsum.photos/281/150"/>
      <Card name="West-World"val="https://picsum.photos/280/149"/>
      <Card name="Game Of Thrones" val="https://picsum.photos/280/151"/>
      <Card name="Game Of Thrones" val="https://picsum.photos/282/151"/>
      <Card name="Game Of Thrones" val="https://picsum.photos/278/151"/>
      <Card name="Game Of Thrones" val="https://picsum.photos/281/152"/>
    </div>
  );
}
export {Head,Main}
