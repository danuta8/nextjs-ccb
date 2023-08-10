import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'BannerInteriorPageRed',
    displayName: 'BannerInteriorPageRed',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'bgImage',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'bgImage1',
        type: CommonFieldTypes.Image,
      },
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Conference for Community Bankers',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
      },
    ],
  })
}
