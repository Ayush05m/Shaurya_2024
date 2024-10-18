import React from "react";
import { useEffect } from "react";
import { Window } from "@mui/icons-material";

import "./WordGlobe.css";

import {TagCloud} from "@frank-mayer/react-tag-cloud";
import { TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { DividerClasses } from "@mui/material";

const WordGlobe = () => {
  return (
    <>
      <div className="text-sphere ">
        <span className="tagcloud">
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(500,w.innerWidth,w.innerHeight) / 2,
              maxSpeed: "fast",
            })}
          >
            {[
              "Badminton🏸",
              "Cricket 🏏",
              "Football⚽",
              "Volleyball🏐",
              "Basketball🏀",
              "Hockey🏑",
              "Kabaddi🏅",
              "Chess♟️",
              "Puzzle Solve🧩",
              "WeightLifting🏋️",
              "Tug Of War🪢",
              "Marathon🏃",
              "Fun events🏅",
              "Race🏃‍♀️",
              "Table Tennis🏓",
            ]}
          </TagCloud>
        </span>
      </div>
    </>
  );
};

export default WordGlobe;