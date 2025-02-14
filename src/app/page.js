'use client'

import { getEntries } from "@/api/api";
import { useState } from "react";

export default function Home() {
  const [votes, setVotes] = useState({});

  const upVote = (countryId) => {
    setVotes({...votes, [countryId]: votes[countryId] ? votes[countryId] + 1 : 1});
  } 
  
  const downVote = (countryId) => {
    setVotes({...votes, [countryId]: votes[countryId] ? votes[countryId] - 1 : 0});
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-4xl my-5">Eurovision 2025 Entries</h1>
      <ul>
        {getEntries().map(entry => (
          <li key={entry.countryId} className="bg-white my-4 rounded-md flex">
            <div className="flex-0 p-4">
              <span className="text-6xl">{votes[entry.countryId] || 0}</span>
            </div>
            <div className="flex-1 p-4">
              <div className="flex">
                <span className="flex-0 pr-5">{entry.country.name}</span>
                <img className="align-baseline" src={`https://flagsapi.com/${entry.countryId}/flat/32.png`}></img>
              </div>
              <p><span className="text-2xl">{entry.song}</span> <span className="text-slate-400">by <span>{entry.artist}</span></span></p>
            </div>
            <div className="flex-0 flex flex-col">
              <button 
                className="flex-1 p-4 border-b-2 border-l-2 rounded-md border-slate-200"
                onClick={() => upVote(entry.countryId)}>+</button>
              <button
                className="flex-1 p-4 border-l-2 rounded-md border-slate-200"
                onClick={() => downVote(entry.countryId)}>-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
