import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{red:{DEFAULT:"#E10600",deep:"#7A0400"}},fontFamily:{display:["Anton","Impact","sans-serif"],sans:["Archivo","system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
