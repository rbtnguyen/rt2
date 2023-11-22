import "./styles.css";
import PillRow from "./PillRow";
import { pillData } from "./pill-data"

export default function App() {
  return (
    <div className="App">
      <section className="pills-container">
        {/* {
          If grabbing data from a CMS would loop over, but want to demonstrate adding granular options to each PillRow
          so rendering each Pill individually and providing random options duration/offset, which I don't think should live in the
          content data structure
          pillData.map(pillRow => <PillRow pills={pillRow}/>)
        } */}
        <PillRow pills={pillData[0]} duration={`50s`} offset={`-2s`}></PillRow>
        <PillRow pills={pillData[0]} duration={`48s`} offset={`-7s`}></PillRow>
        <PillRow pills={pillData[0]} duration={`55s`} offset={`0`}></PillRow>
        <PillRow pills={pillData[0]} duration={`60s`} offset={`-13s`}></PillRow>
        <PillRow pills={pillData[0]} duration={`56s`} offset={`-20`}></PillRow>
      </section>
    </div>
  );
}