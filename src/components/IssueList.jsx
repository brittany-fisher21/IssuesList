import React from "react";

class IssuesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };
  }

  componentDidMount() {
    this._fetchIssues();
  }

  _fetchIssues = async () => {
    const response = await fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    ).then((response) => response.json());
    this.setState({
      issues: response,
    });
  };
  render() {
    return (
      <>
        <h1>List of Issues</h1>
        {this.state.issues.map((issue) => (
          <p>{issue.title}</p>
        ))}
        ;
      </>
    );
  }
}

export default IssuesList;
