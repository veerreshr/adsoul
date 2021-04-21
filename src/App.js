import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AppDetails from "./screens/AppDetails";
function App() {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/app/:id" component={AppDetails} exact />
    </Router>
  );
}

export default App;
