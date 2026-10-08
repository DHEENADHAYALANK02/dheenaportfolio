"use client";
import {useRef} from "react";
import {motion,useMotionValue,useSpring,useReducedMotion} from "framer-motion";
export default function Magnetic({href,children,solid}:{href:string;children:React.ReactNode;solid?:boolean}){
 const r=useRef<HTMLAnchorElement>(null),x=useSpring(useMotionValue(0),{stiffness:200,damping:15}),y=useSpring(useMotionValue(0),{stiffness:200,damping:15}),calm=useReducedMotion();
 return <motion.a ref={r} href={href} style={{x,y}} onMouseMove={e=>{if(calm||!r.current)return;const b=r.current.getBoundingClientRect();x.set((e.clientX-b.left-b.width/2)*.25);y.set((e.clientY-b.top-b.height/2)*.25)}} onMouseLeave={()=>{x.set(0);y.set(0)}}
  className={`inline-block px-7 py-3.5 text-sm font-bold tracking-wide transition-colors ${solid?"bg-red text-white hover:bg-black":"border border-black/20 text-black hover:border-red hover:text-red"}`}>{children}</motion.a>;
}
