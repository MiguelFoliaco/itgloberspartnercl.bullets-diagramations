import React, { PropsWithChildren } from 'react'
import { useDevice } from 'vtex.device-detector';
import { useListContext, ListContextProvider } from "vtex.list-context";
import { useCssHandles } from "vtex.css-handles"
import { BulletSchema } from './BulletTypes';
import { BulletAsList } from "./modules/BulletAsList"

export interface IBulletGroup {
  bullets: BulletSchema;
}

const index = ({
  bullets,
  children
}: PropsWithChildren<IBulletGroup>) => {

  const handles = useCssHandles(['bullet_container']);
  const { isMobile } = useDevice();
  const { list } = useListContext() || []
  const _bullets = BulletAsList(bullets, isMobile)

  const newListContextValue = list.concat(_bullets)
  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
          ?
          <div className={handles.bullet_container}>
            {
              _bullets
            }
          </div>
          :
          <div>
            {children}
          </div>
      }
    </ListContextProvider>
  )
}

export default index
