import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Hq2 soft',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0 // Disable splash screen
    }
  }
};

export default config;
