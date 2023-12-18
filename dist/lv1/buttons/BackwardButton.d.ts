import * as React from 'react';
import { MarginClassProps } from '../../utilities/marginClasses';
import { CommonProps } from '../../utilities/commonProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
import { ButtonAppearanceType } from './Button';
declare type Props = {
    /**
     * ボタンのラベルとなる文字列を指定します。アイコンを表示する場合はここに入れずにIconComponentを使用してください。
     */
    children?: React.ReactNode;
    /**
     * href を設定します
     */
    url?: string;
    /**
     * 導線の優先度から、ボタンの種類を指定するのに使います。
     * primaryは背景ベタ塗り+白字、secondaryは白背景+グレーの枠線+リンク色字、tertiaryは枠線なし+リンク色字となります。
     */
    appearance?: ButtonAppearanceType;
    /**
     * ボタンを押したものの動作が危険性を伴うかどうか。 `true` にすると赤系の色になります。
     */
    danger?: boolean;
    /**
     * disabled に設定します
     */
    disabled?: boolean;
    /**
     * サイズを小さくします
     */
    small?: boolean;
    /**
     * サイズを大きくします
     */
    large?: boolean;
    /**
     * input type を指定します
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * click ハンドラを指定します
     */
    onClick?: React.MouseEventHandler;
    /**
     * rel を指定します
     */
    rel?: string;
} & MarginClassProps & SelfWindowNavigationProp & CommonProps;
/**
 * BackwardButton は前画面への遷移のためのボタンです。
 *
 * - 「次の画面」「他の画面」への遷移には JumpButton を使用してください
 * - `target="_blank"` は指定できません
 * - ListTableの行内に入れる場合など、高さを小さくしたい場合には `small` を使用してください
 * - フォームの送信を伴う場合など、不可逆な遷移をする場合には `Button` を使用してください
 */
declare const BackwardButton: React.FC<Props>;
export default BackwardButton;
