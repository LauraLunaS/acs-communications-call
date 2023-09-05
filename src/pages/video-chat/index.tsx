
import React from 'react'

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/App'),
  { ssr: false }
)

const VideoPage = () => {
  return (
    <DynamicComponentWithNoSSR />
  )
}

export default VideoPage