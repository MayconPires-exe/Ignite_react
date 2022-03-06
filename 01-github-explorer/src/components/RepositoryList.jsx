import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

// creating a new component
export function RepositoryList() {
  return (
    <section>
      <h1>Repository List</h1>

      <ul>
       <RepositoryItem repository={repository} />
       <RepositoryItem repository={repository} />
       <RepositoryItem repository={repository} />
       <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}