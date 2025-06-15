declare module 'curtainsjs' {
  export class Curtains {
    constructor(options?: any);
    dispose(): void;
  }
  export class Plane {
    constructor(curtains: any, element: any, params?: any);
    onRender(callback: () => void): void;
    remove(): void;
    uniforms: { [key: string]: any };
  }
}
declare module 'curtainsjs' {
  export class Curtains {
    constructor(params?: any);
    onRender(callback: () => void): void;
    onScroll(callback: () => void): void;
    onContextLost(callback: () => void): void;
    onContextRestored(callback: () => void): void;
    onError(callback: (error: any) => void): void;
    onLoading(callback: (event: any) => void): void;
    createPlane(element: HTMLElement, params?: any): Plane;
    destroy(): void;
  }

  export class Plane {
    uniforms: { [key: string]: { value: any } };
    onRender(callback: () => void): void;
    onAfterResize(callback: () => void): void;
    onAfterRender(callback: () => void): void;
    onScroll(callback: () => void): void;
    onLoading(callback: () => void): void;
    setUniform(name: string, value: any): void;
    updatePosition(): void;
    destroy(): void;
  }
}
declare module 'curtainsjs' {
  export class Curtains {
    constructor(params: any);
    createPlane(element: HTMLElement, params?: any): Plane;
    onError(callback: () => void): void;
    destroy(): void;
  }
  export class Plane {
    uniforms: { [key: string]: { value: any } };
    onRender(callback: () => void): void;
    destroy(): void;
  }
}
