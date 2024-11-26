export interface ImageProps
  extends Omit<React.ComponentProps<'img'>, 'width' | 'height'> {
  width: number;
  height: number;
}
