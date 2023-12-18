import * as React from 'react';
import { CommonProps } from '../../utilities/commonProps';
import { ButtonAriaProps, LinkAriaProps } from '../../utilities/AriaProps';
import { SelfWindowNavigationProp } from '../../utilities/selfWindowNavigator';
declare type Props = {
    /**
     * 遷移先画面のURLを指定します。  指定した場合には `<a>` 要素、渡さなかった場合には `<button>` 要素となります。
     *
     * **指定できない場合は何も指定しないでください**
     */
    href?: string;
    /**
     * `<a>` 要素の `target` 属性に渡されます。 `"_blank"` とした場合、 OpenInNew アイコンがつきます
     */
    target?: string;
    /**
     * 未指定の場合、`target="_blank"` であれば `noopener noreferrer`となります
     */
    /**
     * disabled に設定します
     */
    disabled?: boolean;
    rel?: string;
    children?: React.ReactNode;
    /**
     * クリック時の処理を指定します。 `onSelfWindowNavigation` とは違い、すべての状況でクリック時に発火します。
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
} & SelfWindowNavigationProp & ButtonAriaProps & LinkAriaProps & CommonProps;
/**
 *
 * 配置された場所のフォントにスタイルをあわせつつ、「青文字」・「アンダーライン」でボタンまたはリンクであることを表現するコンポーネントです。
 *
 * 本文や注釈などの中にリンクを配置したい場合には、こちらを使用してください。
 *
 *
 * - 文字サイズは配置された場所に従います
 * - 見た目はボタンですが、セマンティクス上はリンクにもボタンにもなります
 *   - `href` を指定すると `<a>` 要素、指定しないと `<button>` 要素となります。
 *   - `href` を指定できない（遷移先のURLが存在しない）場合は `href` を指定しないでください（`#` を入れたりしないでください）
 * - `target` に `_blank` を指定すると OpenInNew アイコンが表示されます
 * - react-router 等を使用している場合は、遷移時の処理を `onSelfWindowNavigation` に指定してください
 * - `Button` コンポーネント（特に `appearance="tertiary"` を指定したもの）との使い分け方については、 `Button` コンポーネントの解説を参照してください。
 *
 * 名称は「インライン」の「リンク」ですが、これは配置場所や目的を制限するものではありません。
 * 文中や文尾以外の場所への配置も、「ボタン」としての使用もすることができます。
 */
declare const InlineLink: React.FC<Props>;
export default InlineLink;
