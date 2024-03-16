'use client'

import { Viewer } from '@react-pdf-viewer/core';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function Resume() {
    return (
        <Viewer fileUrl='./pdf_file/RESUME.pdf'/>
    );
}