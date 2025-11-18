import { Header, SearchFilters, ProvidersListing } from "./components";

function App() {
  return (
    <>
      <div className="min-h-dvh bg-white text-slate-900">
        <Header />
        <SearchFilters />
        <ProvidersListing />
      </div>
    </>
  );
}

export default App;
