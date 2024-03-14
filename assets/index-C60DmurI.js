import{_ as i}from"./index-CVWM_Zk0.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-wPdyfesd.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-wPdyfesd.js","./ValueWithRandom-MAir2PIz.js","./index-CVWM_Zk0.js","./index-Cy9eyonZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
