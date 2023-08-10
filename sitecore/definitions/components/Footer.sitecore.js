import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Footer',
    displayName: 'Footer',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Let’s Stay Connected',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Join our mailing list for the latest news about our events, discounts and more',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'First and Last Name',
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/5AuDzoiYIsVBwu9466XW2.svg"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle29323331',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Email Address:',
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/UD6eU-o_OViptZoss-Dgn.svg"}',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Rectangle28264187',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Sign Up',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Site Map',
      },
      {
        name: 'value',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(0, 0, 0, 1); \nwidth: 259px; \nheight: auto; \ntext-align: left; \nline-height: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 15px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \nfont-family: Lato; \nfont-size: 18px; \nfont-stretch: normal; \nfont-style: normal; \nfont-weight: 400; \ntext-decoration: none; \n"><span >Home</span><br /><span /></span>',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Program',
      },
      {
        name: 'value1',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(0, 0, 0, 1); \nwidth: 259px; \nheight: auto; \ntext-align: left; \nline-height: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 15px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \nfont-family: Lato; \nfont-size: 18px; \nfont-stretch: normal; \nfont-style: normal; \nfont-weight: 400; \ntext-decoration: none; \n"><span >Speakers</span><br /><span /></span>',
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Plan Your Trip',
      },
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'About',
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Sponsors',
      },
      {
        name: 'text10',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Register',
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://kajoo.nyc3.digitaloceanspaces.com/production/orgs/61b3c08b7312e9f629bc048e/assets/cAN4bXDTeXIf1F1viC76W.png"}',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'image128665',
      },
      {
        name: 'value2',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(0, 0, 0, 1); \nwidth: 583px; \nheight: auto; \nfont-weight: 400; \nfont-family: Inter; \ntext-align: left; \nline-height: 150.52273273468018%; \nfont-size: 18px; \nfont-style: normal; \nfont-stretch: normal; \nmargin-left: 0; \nmargin-right: 0; \nmargin-top: 0; \nmargin-bottom: 32px; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Copyright © 2021 American Bankers Association. All rights reserved.</span><br /><span /></span>',
      },
      {
        name: 'value3',
        type: CommonFieldTypes.RichText,
        standardValue:
          '<span style="color: rgba(144, 144, 144, 1); \nwidth: 583px; \nheight: auto; \nfont-weight: 400; \nfont-family: Inter; \ntext-align: center; \nline-height: 150.52273273468018%; \nfont-size: 18px; \nfont-style: normal; \nfont-stretch: normal; \nalign-self: auto; \nflex-grow: 0; \nposition: ; \ntext-decoration: none; \n"><span >Privacy Policy | Terms of Service</span><br /><span /></span>',
      },
    ],
  })
}
