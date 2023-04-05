import React from 'react';

type State = {
  key: string,
};

export class App extends React.Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressedKey);
  }

  pressedKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            key
              ? `The last pressed key is [${key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
