function SVGImage({ progress }:any) {
  return (
    
    <svg>
      <path
        d="M0 0 L50 100 L100 0 Z"
        style={{
          stroke: "#ff0000",
          strokeWidth: 3,
          fill: "none",
          strokeDasharray: 100,
          strokeDashoffset: progress * 100
        }}
      />
    </svg>
  );
};

export default SVGImage;
