import{_ as e}from"./index-CVWM_Zk0.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await e(()=>import("./Attractor-c06acEDX.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Attractor-c06acEDX.js","./ParticlesInteractorBase-vfDeBun3.js","./index-CVWM_Zk0.js","./index-Cy9eyonZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
