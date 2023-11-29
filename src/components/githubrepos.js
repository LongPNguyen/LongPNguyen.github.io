import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "antd";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [displayedRepos, setDisplayedRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoverState, setHoverState] = useState({});
  const reposPerRow = 4; // Adjust based on your layout
  const rowsPerPage = 2;
  const reposPerPage = reposPerRow * rowsPerPage;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/longpnguyen/repos"
        );
        const sortedRepos = response.data.sort(
          (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)
        );
        setRepos(sortedRepos);
        setDisplayedRepos(sortedRepos.slice(0, reposPerPage));
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const handleMouseOver = (index) => {
    setHoverState((prevState) => ({ ...prevState, [index]: true }));
  };

  const handleMouseOut = (index) => {
    setHoverState((prevState) => ({ ...prevState, [index]: false }));
  };

  const handleViewMore = () => {
    const newDisplayLimit = displayedRepos.length + reposPerPage;
    setDisplayedRepos(repos.slice(0, newDisplayLimit));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ paddingBottom: "1em" }}>
      <h2 className="projectsTitle">My GitHub Repositories</h2>
      <Row gutter={[16, 16]}>
        {displayedRepos.map((repo, index) => (
          <Col style={{padding: "0"}} xs={24} sm={12} md={8} lg={6} key={repo.id}>
            <a
             width="90%"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut(index)}
            >
              <Card
                className="repo-card"
                title={repo.name}
                style={{
                  opacity: hoverState[index] ? 1.5 : 1,
                  boxShadow: hoverState[index]
                    ? `1px 1px 2px white, 0 0 25px #40A9FF, 0 0 5px lightblue`
                    : `0 0 0 0`,
                  transform: hoverState[index] ? `scale(1.015)` : `scale(1.0)`,
                  transition: ".5s",
                }}
              >
                {console.log(repo.description)}
                <p className="ellipsis">
                  {repo.description !== null
                    ? repo.description
                    : "No Description Available"}
                </p>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
      {displayedRepos.length < repos.length && (
        <Button onClick={handleViewMore} style={{ marginTop: "20px" }}>
          View More
        </Button>
      )}
    </div>
  );
};

export default ReposList;
