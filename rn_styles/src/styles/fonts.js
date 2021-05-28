import { Platform } from 'react-native';

const platformBasedFonts = {
  NotoSansKRMedium: Platform.OS === 'ios' ? 'NotoSansKR-Medium' : 'system font',
  NotoSansKRBold: Platform.OS === 'ios' ? 'NotoSansKR-Bold' : 'system font',
  NotoSansKRLight: Platform.OS === 'ios' ? 'NotoSansKR-Light' : 'system font',
};

export default platformBasedFonts;
