import React from "react";

export default class extends React.Component {
  dom = null
  constructor(props) {
    super(props)
    this.state = {
      showDetail: false,
      showDetailButton: false
    }
  }

  setShowDetail = () => {
    this.setState({showDetail: !this.state.showDetail})
  }

  setShowDetailButton = (show) => {
    this.setState({showDetailButton: show})
  }

  componentDidMount() {
    const height = this.dom.clientHeight
    this.setShowDetailButton(height > 24 * 4)
  }


  render() {
    return (
      <div>
        <style jsx>{`
          .test {
            width: 50%;
            border: solid 1px #ccc;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            line-height: 24px;
          }
          button {
            cursor: pointer;
          }
          .mock {
            position: absolute;
            visibility: hidden;
          }
        `}</style>
        <div className="test" style={{WebkitLineClamp: this.state.showDetail ? "inherit" : "4"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. 
        </div>
        <div className="test mock" ref={dom => this.dom = dom} >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. 
        </div>
        {this.state.showDetailButton && <button onClick={this.setShowDetail}>{this.state.showDetail ? '收起' : '展开'}</button>}
      </div>
    );
  }
}
