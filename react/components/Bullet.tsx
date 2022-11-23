import React from 'react';
import { Link } from 'vtex.render-runtime';
import { useCssHandles } from "vtex.css-handles";
import { BulletType } from './BulletGroup/BulletTypes';
import './BulletGroup/index.css'
type prop = {
  bullet: BulletType,
  isMobile: boolean;
}
const CSS_HANDLES = ['bullet__link', 'bullet__item', 'bullet__image', 'bullet__title'];

const Bullet = ({ bullet, isMobile }: prop) => {


  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.bullet__item} >
      <Link to={bullet.link.url} target={bullet.link.newTab ? '_blank' : ''} className={handles.bullet__link} >
        <img src={bullet.image} alt={bullet.image} className={handles.bullet_image} />
        {
          isMobile && <h3 className={handles.bullet__title}>{bullet.titleBullet}</h3>
        }
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "Imagen de Bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}

export { Bullet }
