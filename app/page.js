// app/page.js
import Intro from './sections/Intro';
import BuildSomething from './sections/BuildSomething';
import CurrentExperience from './sections/CurrentExperience';

export default function Page() {
  return (
    <div>
      <Intro />
      <BuildSomething />
      <CurrentExperience />
    </div>
  );
}