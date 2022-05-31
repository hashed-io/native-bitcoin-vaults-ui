import QrDecodeXpub from '../../components/decode/qr-decode-xpub.vue'

export default {
  title: 'Decode/QrDecodeXpub',
  component: QrDecodeXpub
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QrDecodeXpub },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    // Story args can be spread into the returned object
    return { ...args }
  },
  // Then, the spread values can be accessed directly in the template
  template: '<QrDecodeXpub/>'
})

export const Base = Template.bind({})
Base.args = {
}