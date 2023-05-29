import React, { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TimerProps {}

interface TimerState {
  currentTime: Date;
}

class Timer extends Component<TimerProps, TimerState> {
  timerID: NodeJS.Timeout | null = null;

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount(): void {
    this.timerID = setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerID !== null) {
      clearInterval(this.timerID);
    }
  }

  setCurrentTime(): void {
    this.setState({
      currentTime: new Date()
    });
  }

  render(): JSX.Element {
    const { currentTime } = this.state;
    return <>{currentTime.toLocaleTimeString()}</>;
  }
}

export default Timer;
