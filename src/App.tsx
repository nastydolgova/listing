import './App.css'

import Listing from "./components/Listing/Listing.tsx";
import jsonData from "./mock/etsy.json"
import ItemViewModel from "@/models/ItemViewModel.ts";

export default function App() {
  return (
    <Listing items={jsonData as ItemViewModel[]} />
  )
}