import BackgroundWave from "./components/backgroundWave";
import Template from "./components/template";

const App = () => {
  return (
    <div className="w-full h-auto pt-[11rem] md:pt-[18rem] pb-20 flex justify-center items-center relative bg-slate-300">
      <BackgroundWave />
      <h1 className="absolute top-24 left-1/2 text-white text-[3vw] -translate-x-1/2 font-extrabold select-none">Beautiful Images &amp; Pictures</h1>
      <Template />
    </div>
  )
}

export default App;
