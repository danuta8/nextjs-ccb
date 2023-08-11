import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Hero2',
    displayName: 'Hero2',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Empowering Community \nBankers',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'February 11-13, 2024 San Antonio',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'The Conference for Community Bankers is a dynamic gathering where industry leaders, experts, and professionals unite to explore the latest trends, strategies, and innovations in the banking sector.',
      },
      {
        name: 'link',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='undefined' linktype='external' url='#' anchor='' target=''/>",
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://app.kajoo.ai/icons/default-imag.svg"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-imag',
      },
    ],
  })
}
