import React, { Fragment } from 'react'
import { Bullet } from '../../Bullet'
import { BulletSchema } from '../BulletTypes'

export const BulletAsList = (bullets: BulletSchema, isMobile: boolean) => {


  return (

    bullets.map((e, i) => (
      <Fragment key={Date.now() + i}>
        <Bullet bullet={e} isMobile={isMobile} />
      </Fragment>
    )
    )
  )
}
