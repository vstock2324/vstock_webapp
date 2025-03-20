/* eslint-disable @typescript-eslint/no-unused-vars */
import * as fabric from "fabric";
export type EditorElementBase<T extends string> = {
  readonly id: string;
  readonly type: T;
};
export type VideoEditorElement = EditorElementBase<"video">;
export type ImageEditorElement = EditorElementBase<"image">;
export type AudioEditorElement = EditorElementBase<"audio">;
export type TextEditorElement = EditorElementBase<"text">;

export type MenuOption =
  | "Video"
  | "Audio"
  | "Images"
  | "Export"
  | "Animation"
  | "Effect"
  | "Fill"
  | "Assets"
  | "Stickers"
  | "Shapes"
  | null;

export type EditorElement =
  | VideoEditorElement
  | ImageEditorElement
  | AudioEditorElement
  | TextEditorElement;

export type Placement = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
};
