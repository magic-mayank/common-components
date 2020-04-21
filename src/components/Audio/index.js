import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrack: null,
      player: "stopped",
      currentTime: null,
      duration: null
    }
  }

  componentDidMount() {
    if (this.player) {
      this.player.addEventListener("timeupdate", e => {
        this.setState({
          currentTime: e.target.currentTime,
          duration: e.target.duration
        });
      });
      this.player.addEventListener("ended", e => {
        this.setState({ player: "stopped" });
      });
    }
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => { });
  }
  UNSAFE_componentWillReceiveProps(newprops) {
    if (newprops.currentTab != this.props.currentTab || newprops.currentSubTab != this.props.currentSubTab) {
      // if (this.props.audiosrc) {
      //   this.player.pause();
      //   //this.player.currentTime = 0;
      // }
      this.setState({
        selectedTrack: null,
        player: "stopped",
        currentTime: null,
        duration: null
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "Lab 1":
          track = this.props.audiosrc;
          break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (this.state.player === "restart") {

        this.player.currentTime = 0;
        this.player.play();
        this.setState({ player: null });
        // console.log("")
        // this.setState({ player: "stopped" })
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
  }

  render() {

    return (
      <>
        <div>
          <button className={(this.state.player !== "playing" && this.state.player !== "restart" && this.state.player !== null) ? "vl-audio-play-icon" : "vl-audio-pause-icon"}
            title={(this.state.player !== "playing" && this.state.player !== "restart") ? "Audio Play" : "Audio Pause"}
            aria-label={(this.state.player !== "playing" && this.state.player !== "restart") ? "Audio Play" : "Audio Pause"}
            onClick={() => (this.state.player !== "playing" && this.state.player !== "restart" && this.state.player !== null) ? this.setState({ selectedTrack: "Lab 1", player: "playing" }) :
              this.setState({ selectedTrack: "Lab 1", player: "paused" })}>
          </button>

          {this.state.player !== "stopped" && (
            <button id="audio_restart_icon" className="vl-audio-restart-icon" title="Audio Replay" aria-label="Audio Replay" onClick={() => this.setState({ player: "restart" })}>

            </button>
          )}
        </div>
        <audio ref={ref => (this.player = ref)} />
      </>
    );
  }
}

export default Audio;
