// app/page.js

import Aboutme from "../about_sections/Aboutme";
import Background from "../about_sections/Background";
import Drawing from "../about_sections/Drawing";


export default function Page() {
  return (
    <div>
      <Aboutme />
      <Background />
      <Drawing />
    </div>
  );
}