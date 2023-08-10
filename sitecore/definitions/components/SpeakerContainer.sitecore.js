import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'SpeakerContainer',
    displayName: 'SpeakerContainer',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'src4',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://app.kajoo.ai/icons/default-imag.svg"}',
      },
      {
        name: 'alt4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-imag',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Jane Doe',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Chief Executive Officer\n',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Google',
      },
      {
        name: 'src5',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://app.kajoo.ai/icons/default-imag.svg"}',
      },
      {
        name: 'alt5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-imag',
      },
      {
        name: 'text12',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'John Doe',
      },
      {
        name: 'text16',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Chief Executive Officer\n',
      },
      {
        name: 'text17',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Google',
      },
      {
        name: 'src6',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://app.kajoo.ai/icons/default-imag.svg"}',
      },
      {
        name: 'alt6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-imag',
      },
      {
        name: 'text13',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Jane Doe',
      },
      {
        name: 'text14',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Chief Executive Officer\n',
      },
      {
        name: 'text15',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Google',
      },
      {
        name: 'src7',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://app.kajoo.ai/icons/default-imag.svg"}',
      },
      {
        name: 'alt7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'default-kajoo-imag',
      },
      {
        name: 'text18',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Jane Doe',
      },
      {
        name: 'text19',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Chief Executive Officer\n',
      },
      {
        name: 'text20',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Google',
      },
    ],
  })
}
