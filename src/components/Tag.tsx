import React from "react";

function Tag({ bg, color, text }: any) {
  return <div className={`rounded-sm text-xs px-2 py-1 ${bg} ${color}`}>{text}</div>;
}

export default Tag;
