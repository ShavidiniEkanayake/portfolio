import{_ as i}from"./index-CVWM_Zk0.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-R-bfKaDR.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new e(r)},a)}export{p as loadOpacityUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./OpacityUpdater-R-bfKaDR.js","./index-CVWM_Zk0.js","./index-Cy9eyonZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
