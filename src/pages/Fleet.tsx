import Hero from '../components/Hero'
import FleetGrid from '../components/FleetGrid'
export default function Fleet() {
  return (<><Hero title="The fleet" sub="Pick the boat that will be your home at sea. Every vessel, cabin and capacity, in one place." />
    <section className="wrap py-14"><FleetGrid /></section></>)
}
