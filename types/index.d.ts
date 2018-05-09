declare const __DEV__:boolean;
declare module '*.css' {
  interface IClassNames {
      [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
