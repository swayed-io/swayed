import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import exportFromJSON from "export-from-json";

export default function Reachearcher() {
  
  return (
    <div>
      <h1 className="text-3xl uppercase text-center">Researchers</h1>      
    </div>
  );
}
