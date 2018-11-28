import fetch from 'isomorphic-unfetch'
// import dynamic from 'next/dynamic'
import Router from 'next/router'
import React from 'react'


// const MoonBase = dynamic(import('../game/index'), {ssr: false})

const Game = ({ paid }) => {
  if (paid) {
    return <div>insert game here</div>
  } else {
    Router.push('/arcade')
  }
}

Game.getInitialProps = async function (ctx) {
  console.log('getInitialProps')
  try {
    const {paid} = await fetch(`http://localhost:8000/checkInvoice/${ctx.query.invoice}`)
      .then(x => x.json())
    console.log(paid)
    return {
      paid
    }
  } catch (error) {
    return {
      paid: false
    }
  }
}

export default Game
