// App.jsx

import './App.css';
import SimpleList from './components/SimpleList';
import StudentList from './components/StudentList';
import ProjectList from './components/ProjectList'
import MoviesList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <SimpleList />
      <StudentList />
      <ProjectList />
      <MoviesList />
    </div>
  );
}

export default App;
