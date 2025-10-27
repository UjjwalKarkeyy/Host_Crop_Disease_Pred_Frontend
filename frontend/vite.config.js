import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/Host_Crop_Disease_Pred_Frontend/',  // added this line
})
