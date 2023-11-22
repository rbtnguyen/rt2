// Takes in Array, offset
import Pill from "./Pill";
import styled from 'styled-components'

interface Pill {
  imagePath: string,
  title: string
  modalHeading: string;
  modalBody: string;
}

interface PillRowProps {
  offset?: number
  pills?: Pill[]
  duration?: string
}

const PillGroup = function({offset, pills, duration='30s'}: PillRowProps) {

  // Uncomment the line below to have all the rows animate at the speed
  // duration = `60s`;
  const Group = styled.div`
    animation: ${duration} drift infinite linear;
    animation-delay: ${offset};
  `
  return (
    <Group className="pill-group">
      {pills && pills.map((pill: Pill) => <Pill imagePath={pill.imagePath} title={pill.title} modalHeading={pill.modalHeading} modalBody={pill.modalBody}/>)}
    </Group>
  )
}

export default function PillRow(props: any) {
  return (
    <div className="pill-row">
      <PillGroup {...props}/>
      {/* Duplicating Pill group for infinite scroll effect */}
      <PillGroup {...props}/>
    </div>
  );
}