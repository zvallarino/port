// app/page.js

import Intro from "../sections_work/Intro";
import Design from "../sections_work/Design";
import Final from "../sections_work/Final";



export default function Page() {
  return (
    <div>
      <Intro />
      <Design />
      <Final />
    </div>
  );
}