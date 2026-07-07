import { useState, useEffect } from "react";

function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/nicheagy/repos?sort=updated&per_page=100",
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch repos");
        return response.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="repo-status">Loading projects...</p>;
  if (error)
    return <p className="repo-status">Couldn't load projects right now.</p>;
  if (repos.length === 0)
    return <p className="repo-status">No public repos found.</p>;

  return (
    <div className="repo-grid">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="repo-card"
        >
          <>
            <h3>{repo.name}</h3>
            <p className="repo-description">
              {repo.description || "No description provided."}
            </p>
            <div className="repo-meta">
              {repo.language && <span>{repo.language}</span>}
              <span>★ {repo.stargazers_count}</span>
            </div>
          </>
        </a>
      ))}
    </div>
  );
}

export default GitHubProjects;
