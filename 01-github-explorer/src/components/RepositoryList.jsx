const repositoryName = 'unform2'

// create a new component
export function RepositoryList() {
  return (
    <section>
      <h1>Repository List</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">
            Access repository
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Access repository
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Access repository
          </a>
        </li>
      </ul>
    </section>
  );
}