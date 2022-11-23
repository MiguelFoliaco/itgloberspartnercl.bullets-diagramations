export type BulletSchema = Array<BulletType>

export type BulletType={
  image: string;
  titleBullet:string;
  link:Link;
}
export interface Link{
  url: string;
  attributeNofollow?:boolean;
  openNewTab?: boolean;
  newTab?: boolean;
}
