import Features from "./components/Features";
import ProductOverview from "./components/ProductOverview";
import ReviewSection from "./components/Reviews";
import ReviewForm from "./components/RieviewForm";

function App() {
  return (
    <div>
      <ProductOverview />
      <Features />
      <ReviewSection />
      <ReviewForm />
    </div>
  );
}

export default App;
