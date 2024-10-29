// global.d.ts
declare global {
  interface Window {
    loadImage: (img: HTMLImageElement) => void; // Adjust the parameter type as needed
  }
}

// This line is required to make the file a module.
export {};