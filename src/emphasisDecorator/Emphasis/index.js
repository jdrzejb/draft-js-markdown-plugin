import React from 'react';
import { emphasis1, emphasis2 } from '../regexp';
import replaceLeafContent from '../../utils/replaceLeafContent';

export default class Emphasis extends React.Component {

  static displayName = 'MarkdownEmphasis';

  render() {
    const { component, children } = this.props;
    if (component) {
      return React.createElement(component, this.props);
    }
    const leaf = children[0];
    return <em>{replaceLeafContent(leaf, (text) => text.replace(emphasis1, '$1').replace(emphasis2, '$1'))}</em>;
  }
}
