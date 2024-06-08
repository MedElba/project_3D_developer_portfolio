// https://github.com/vitejs/vite/issues/9539
// for the error: "Property 'env' does not exist on type 'ImportMeta'.ts(2339)' when using import.meta.env
import 'vite/client'

declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.jpeg';