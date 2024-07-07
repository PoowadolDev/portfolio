// DownloadLink.js
"use client"
import React from 'react';

export default function DownloadLink ( filename, url) {
  const handleClick = () => {
    window.location.href = url;
  };
  console.log("Download")
  return (
    <a download href="../file/Poowadol_CV.pdf" onClick={handleClick}>
      Download {filename}
    </a>
  );
};