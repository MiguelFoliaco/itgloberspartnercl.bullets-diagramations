# bullets-diagramations

grid y slider de Bullets de categorias


## Configuration 

1. Añade a tu `manifest.json` la dependencia `itgloberspartnercl.bullets-diagramations`;
2. Para declarar este componente debes configurar las siguientes propiedades.


### `bullets-diagramations` props

| Prop name    | Type            | Description    | Default value |
| ------------ | --------------- | -------------- | -------------- |
| `bullets`      | `array`       | Esta propiedad recibe arrays de<br/>bulltes         |   `[]`     |



EL propiedad `bullet` es: 

- `object`


- `bullet` object:

| Prop name | Type | Description | `required` |
| --------- | ---- | ----------- | ---------- |
 | `image`      | `string`       | url de la imagen que se desea mostrar         | `true`|
| `titleBullet`      | `string`       | Titulo del bullet         |    `true`     |
| `link`      | `objetc`       | este atributo recibe un `objetc` tipo Link         |      `true`   |


La propiedad `Link` es: 
- `object`


- `bullet` object:

| Prop name    | Type            | Description    | Required                                                                                                                         |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `url`      | `string`       | url de la imagen que se desea mostrar         |    `true` |
| `attributeNofollow`      | `boolean`       | Permitir hacer seguimiento al link|     `false`    |
| `openNewTab`      | `boolean`       | abrir una nueva pestaña         |     true    |



## Customization


| CSS Handles |
| ----------- | 
| `bullet_container` | 
| `bullet__link` | 
| `bullet__item` | 
| `bullet__image` | 
| `bullet__title` |


