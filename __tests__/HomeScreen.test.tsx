import { render, screen } from "@testing-library/react-native";
import HomeScreen from "../src/screens/HomeScreen";

describe("HomeScreen", () => {
  it("renders the main landing sections", async () => {
    await render(<HomeScreen />);

    expect(screen.getByText("What Our Customers Say")).toBeTruthy();
    expect(screen.getByText("Find the Perfect Plan for You")).toBeTruthy();
    expect(screen.getAllByText("Get Started").length).toBeGreaterThan(0);
  });
});
