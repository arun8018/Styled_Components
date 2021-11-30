import "./styles.css";
import { Button, FancyButton } from "./Components/Button";
export default function App() {
  return (
    <div>
      <Button>Button</Button>
      <Button varient="danger">Button</Button>
      <FancyButton>Fancy</FancyButton>
    </div>
  );
}
