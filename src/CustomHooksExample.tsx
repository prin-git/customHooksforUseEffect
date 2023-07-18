import "./styles.css";
import { useTitle } from "./cutomHooks";
const CustomHooksExample = () => {
  const { title } = useTitle();
  return <h1>{title}</h1>;
};
export default CustomHooksExample;
