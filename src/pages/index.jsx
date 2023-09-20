import { PureComponent } from "react";

import { connect, history } from '@umijs/max'

@connect(({ demo }) => ({ demo }))
class DemoPage extends PureComponent {
  render() {
    const { demo, dispatch } = this.props;
    const { count } = demo;

    return (
      <div>
        <p>count: {count}</p>
        <button onClick={() => dispatch({
          type: 'demo/add',
        })}>add</button>
      </div>
    );
  };
}

export default DemoPage;
