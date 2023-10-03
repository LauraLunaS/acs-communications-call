
import React from 'react'
import { GlobalStyle } from "../styles/global";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/App'),
  { ssr: false }
)

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <DynamicComponentWithNoSSR />
    </>
  )
}

export default Home;