export type IStyleType = string | undefined;

export const stylesFilterAndJoin = (styles: IStyleType[]): IStyleType => {
  return styles.filter((style) => style !== undefined).join(" ");
};
