import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  
  const env = loadEnv(mode, process.cwd());

  const loadEnvVariables = () => {
    const envVariables: { [key: string]: string } = {};
    for (const key in env) {
      if (key.startsWith("VITE_")) {
        envVariables[key] = env[key];
      }
    }

    return envVariables;
  };


  console.log("Environment variables:", env);
  return {
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@pages", replacement: resolve(__dirname, "src/pages") },
        { find: "@items", replacement: resolve(__dirname, "src/items") },
        { find: "@services", replacement: resolve(__dirname, "src/services") },
        { find: "@store", replacement: resolve(__dirname, "src/store") },
        { find: "@styles", replacement: resolve(__dirname, "src/assets/styles") },
        { find: "@", replacement: resolve(__dirname, "src") },
      ]
    },
    define: {
      ...Object.entries(loadEnvVariables()).reduce((acc, [key, value]) => {
        console.log("key", key)
        console.log("value", value)
        acc[`process.env.${key}`] = JSON.stringify(value);
        acc[key] = JSON.stringify(value);
        return acc;
      }, {} as { [key: string]: string}),
    },
  };
});