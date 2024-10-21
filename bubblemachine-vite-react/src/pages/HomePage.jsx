import React, { useState } from "react";
import { Box } from "@mui/material";
import BubbleRender from "../components/bubbles/BubbleRender";
import PrimaryContainer from "../components/layout/PrimaryContainer";
import WaveformVis from "../components/waveform/WaveformVis";
import BubbleTable from "../components/table/ZTable";
import PopUpLayer from "../components/table/PopUpLayer";

export default function HomePage() {
  const [audioDuration, setAudioDuration] = useState(0);
  const [vizWidth, setVizWidth] = useState(800);
  const [audioFileName, setAudioFileName] = useState(""); // State for audio file name

  return (
    <div>
      <PrimaryContainer
        label="Current File:"
        labelColor="white"
        title={audioFileName || ""} // Set title to audio file name or empty string
        titleColor="#00FF00"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginBottom: 0,
          }}
        >
          <BubbleRender audioDuration={audioDuration} vizWidth={vizWidth} />
        </Box>

        {/* Pass down functions to update audio duration and width */}
        <WaveformVis
          setAudioDuration={setAudioDuration}
          setVizWidth={setVizWidth}
          setAudioFileName={setAudioFileName} // Pass down function to update filename
        />
      </PrimaryContainer>

      <PrimaryContainer
        label="New Bubble"
        labelColor="white"
        title=""
        titleColor="#FF0000"
      >
        <BubbleTable />
      </PrimaryContainer>

      {/* PopUp Layers */}
      {[...Array(6)].map((_, index) => (
        <PopUpLayer key={index} layer={`${index + 1}`} />
      ))}
    </div>
  );
}
