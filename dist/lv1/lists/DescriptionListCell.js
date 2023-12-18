var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { useResponsive } from '../../utilities/VibesProvider';
import commonProps from '../../utilities/commonProps';
var DescriptionListCell = function (props) {
    var children = props.children;
    var listBaseClass = 'vb-descriptionListCell';
    return (React.createElement("td", __assign({}, commonProps(props, listBaseClass, { responsive: useResponsive() })), children));
};
export default DescriptionListCell;
//# sourceMappingURL=DescriptionListCell.js.map